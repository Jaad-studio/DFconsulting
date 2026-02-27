export default async function handler(req, res) {
    // N'autoriser que les requêtes POST
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Méthode non autorisée' });
    }
  
    const { specialty, city } = req.body;
  
    if (!specialty || !city) {
      return res.status(400).json({ error: 'La spécialité et la ville sont requises.' });
    }
  
    const prompt = `En tant qu'analyste de marché spécialisé dans la rénovation énergétique (RGE) en France, réalise un mini-audit très concis pour un artisan qui installe des ${specialty} dans la ville de ${city} (et sa région). 
    Structure ta réponse avec ces 3 points précis (et des emojis) :
    1. 🌡️ Contexte local (climat typique, type de logements anciens, passoires thermiques).
    2. 🎯 Profil du client idéal dans ce secteur géographique.
    3. 🚀 Le meilleur angle marketing à utiliser pour ses publicités locales.
    Reste très professionnel, direct, et donne envie à l'artisan de dominer son marché avec de bonnes publicités. Maximum 150 mots.`;
  
    // Récupération sécurisée de la clé depuis les variables d'environnement Vercel
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
        return res.status(500).json({ error: 'Clé API manquante sur Vercel.' });
    }

    // On utilise le modèle standard et ultra-rapide : gemini-1.5-flash
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: "Tu es un expert en data locale et stratégie d'acquisition pour le secteur du bâtiment." }] }
        })
      });
  
      const data = await response.json();
  
      // Gestion des erreurs Google API
      if (!response.ok) {
        console.error("Erreur Google Gemini:", JSON.stringify(data.error, null, 2));
        
        // Si Google dit que le modèle n'est pas trouvé pour la clé
        if (data.error?.message?.includes('not found for API key')) {
             throw new Error("Clé API Google invalide ou générée au mauvais endroit. Veuillez générer une clé sur Google AI Studio.");
        }
        throw new Error(data.error?.message || 'Erreur inconnue API Google');
      }
  
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Impossible de générer l'analyse.";
      
      res.status(200).json({ result: text });
    } catch (error) {
      console.error("Erreur backend :", error);
      res.status(500).json({ error: error.message || 'Erreur interne du serveur.' });
    }
}
