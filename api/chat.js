import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
    // N'autoriser que les requêtes POST
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Méthode non autorisée' });
    }
  
    const { specialty, city } = req.body;
  
    if (!specialty || !city) {
      return res.status(400).json({ error: 'La spécialité et la ville sont requises.' });
    }
  
    const prompt = `INSTRUCTION : Tu es un expert en data locale et stratégie d'acquisition pour le secteur du bâtiment.
    
    MISSION : En tant qu'analyste de marché spécialisé dans la rénovation énergétique (RGE) en France, réalise un mini-audit très concis pour un artisan qui installe des ${specialty} dans la ville de ${city} (et sa région). 
    
    Structure ta réponse avec ces 3 points précis (et des emojis) :
    1. 🌡️ Contexte local (climat typique, type de logements anciens, passoires thermiques).
    2. 🎯 Profil du client idéal dans ce secteur géographique.
    3. 🚀 Le meilleur angle marketing à utiliser pour ses publicités locales.
    Reste très professionnel, direct, et donne envie à l'artisan de dominer son marché avec de bonnes publicités. Maximum 150 mots.`;
  
    // 1. Récupération et nettoyage de la clé API
    const rawApiKey = process.env.GEMINI_API_KEY || "";
    const apiKey = rawApiKey.trim();
    
    if (!apiKey) {
        return res.status(500).json({ error: "Clé API manquante sur Vercel. Ajoutez GEMINI_API_KEY dans vos réglages." });
    }

    try {
        // 2. Utilisation du SDK officiel de Google (gère les versions d'URL automatiquement)
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // 3. Appel à l'IA
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return res.status(200).json({ result: text });
        
    } catch (err) {
        console.error("Erreur SDK Google:", err);
        
        const errorMsg = err.message || "";
        
        // Si l'erreur persiste avec le SDK, c'est que la clé n'a vraiment pas les droits
        if (errorMsg.includes("not found") || errorMsg.includes("API key")) {
             return res.status(500).json({ 
                error: "Votre clé API Google actuelle n'a pas les permissions nécessaires. Veuillez en générer une NOUVELLE sur https://aistudio.google.com/app/apikey" 
            });
        }
        
        return res.status(500).json({ error: `Erreur interne : ${errorMsg}` });
    }
}
