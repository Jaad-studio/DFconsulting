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
        console.error("ERREUR VERCEL: GEMINI_API_KEY est introuvable. Avez-vous refait un déploiement après l'avoir ajoutée ?");
        return res.status(500).json({ error: 'Clé API manquante. Vérifiez les variables d\'environnement sur Vercel.' });
    }

    // On utilise le modèle universel "gemini-pro" qui est disponible sur 100% des clés API
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        }) // Note: Le modèle gemini-pro classique ne gère pas toujours le paramètre systemInstruction, on l'intègre donc pour éviter toute autre erreur 400.
      });
  
      // On parse la réponse de Google
      const data = await response.json();
  
      // Si le statut HTTP n'est pas bon (ex: 400, 403, 500)
      if (!response.ok) {
        // On logue l'erreur EXACTE de Google dans les logs Vercel pour comprendre le problème
        console.error("Erreur renvoyée par Google Gemini :", JSON.stringify(data.error, null, 2));
        throw new Error(data.error?.message || 'Erreur inconnue provenant de Google API');
      }
  
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Impossible de générer l'analyse.";
      
      // Retourner le résultat au front-end
      res.status(200).json({ result: text });
    } catch (error) {
      console.error("Erreur backend détaillée :", error);
      res.status(500).json({ error: error.message || 'Erreur interne du serveur lors de l\'analyse.' });
    }
}
