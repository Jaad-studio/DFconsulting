export default async function handler(req, res) {
    // N'autoriser que les requêtes POST
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Méthode non autorisée' });
    }
  
    const { specialty, city } = req.body;
  
    if (!specialty || !city) {
      return res.status(400).json({ error: 'La spécialité et la ville sont requises.' });
    }
  
    // Nous intégrons l'instruction système directement dans le prompt
    // pour éviter les problèmes de compatibilité avec certaines clés API Google.
    const prompt = `INSTRUCTION : Tu es un expert en data locale et stratégie d'acquisition pour le secteur du bâtiment.
    
    MISSION : En tant qu'analyste de marché spécialisé dans la rénovation énergétique (RGE) en France, réalise un mini-audit très concis pour un artisan qui installe des ${specialty} dans la ville de ${city} (et sa région). 
    
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

    // Stratégie de repli (Fallback) : on teste les modèles du plus récent au plus ancien
    // Cela garantit que la requête passera peu importe les restrictions de la clé API.
    const modelsToTry = ['gemini-1.5-flash', 'gemini-1.0-pro', 'gemini-pro'];
    
    let success = false;
    let responseText = "";
    let lastErrorMsg = "";

    for (const model of modelsToTry) {
        try {
            console.log(`Tentative avec le modèle : ${model}`);
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
            
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });
  
            const data = await response.json();
  
            if (response.ok && data.candidates && data.candidates.length > 0) {
                responseText = data.candidates[0].content.parts[0].text;
                success = true;
                console.log(`Succès avec le modèle : ${model}`);
                break; // Le modèle a fonctionné, on arrête la boucle
            } else {
                lastErrorMsg = data.error?.message || 'Erreur API inconnue';
                console.error(`Échec avec ${model}:`, lastErrorMsg);
            }
        } catch (err) {
            lastErrorMsg = err.message;
            console.error(`Exception avec ${model}:`, lastErrorMsg);
        }
    }

    // Renvoi de la réponse au front-end
    if (success) {
        return res.status(200).json({ result: responseText });
    } else {
        return res.status(500).json({ 
            error: `L'IA a rejeté la requête après plusieurs tentatives. Raison : ${lastErrorMsg}` 
        });
    }
}
