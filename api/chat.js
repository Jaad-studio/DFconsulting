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
  
    // 1. Récupération de la clé API
    const rawApiKey = process.env.GEMINI_API_KEY || "";
    
    // 2. NETTOYAGE CRUCIAL : Supprime les espaces invisibles ajoutés par erreur lors du copier-coller
    const apiKey = rawApiKey.trim();
    
    if (!apiKey) {
        return res.status(500).json({ error: "Clé API manquante sur Vercel. Ajoutez GEMINI_API_KEY dans vos réglages." });
    }

    // Modèle officiel et ultra-rapide
    const model = 'gemini-1.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();

        if (response.ok && data.candidates && data.candidates.length > 0) {
            // Succès total
            return res.status(200).json({ result: data.candidates[0].content.parts[0].text });
        } else {
            // Renvoi de l'erreur EXACTE de Google directement sur l'écran du site
            const errorMsg = data.error?.message || JSON.stringify(data);
            console.error("Erreur API Google:", errorMsg);
            
            if (errorMsg.includes("not found") || errorMsg.includes("API key")) {
                 return res.status(500).json({ 
                    error: `La clé Google a été rejetée. Erreur de Google : "${errorMsg}". Assurez-vous que la clé vient bien de Google AI Studio.` 
                });
            }
            
            return res.status(500).json({ error: `Erreur Google : ${errorMsg}` });
        }
    } catch (err) {
        console.error("Exception Fetch:", err.message);
        return res.status(500).json({ error: `Erreur interne du serveur : ${err.message}` });
    }
}
