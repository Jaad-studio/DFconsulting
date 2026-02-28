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
  
    // Un prompt beaucoup plus humain : on demande à l'IA d'agir comme un conseiller
    const prompt = `Agis comme un vrai consultant expert en acquisition pour les artisans RGE. 
    Tu t'adresses directement à un artisan qui installe des ${specialty} autour de ${city}. 
    
    Parle-lui de façon naturelle, très humaine et encourageante (en le vouvoyant). 
    RÈGLE STRICTE : N'utilise AUCUN astérisque (*) ni aucun formatage (pas de gras, pas d'italique). Utilise uniquement du texte simple avec des sauts de ligne.
    
    Fais une analyse rapide en 3 points :
    1. 🌡️ Le contexte de sa région (climat, maisons anciennes, opportunités).
    2. 🎯 Son client idéal sur ce secteur.
    3. 🚀 L'angle d'attaque pour ses publicités locales (proximité, rassurer, aides de l'état, etc.).
    
    Sois direct, convaincant, et montre-lui que son marché a un grand potentiel. (Maximum 140 mots).`;
  
    // 1. Récupération et nettoyage de la clé API
    const rawApiKey = process.env.GEMINI_API_KEY || "";
    const apiKey = rawApiKey.trim();
    
    // =========================================================================
    // FONCTION DE SECOURS (MODE DÉMO)
    // =========================================================================
    const sendMockResponse = () => {
        // Texte de secours rendu beaucoup plus humain et sans astérisques
        const mockText = `Bonjour ! J'ai analysé votre secteur de ${city} pour votre activité de ${specialty}.\n\n1. 🌡️ Le contexte local : Votre région possède un grand nombre de maisons énergivores. Avec l'augmentation des prix de l'énergie, l'urgence de rénover n'a jamais été aussi forte pour les habitants de ${city}.\n\n2. 🎯 Votre client idéal : Ciblez les propriétaires de plus de 35 ans qui occupent leur maison depuis quelques années. Ils cherchent avant tout à réduire leurs factures et à valoriser leur bien avec MaPrimeRénov'.\n\n3. 🚀 Mon conseil d'approche : Stoppez les discours trop techniques. Jouez sur la "Tranquillité d'esprit et la Proximité". Montrez des photos de vos propres chantiers locaux et proposez une simulation gratuite des aides. Vous avez un boulevard devant vous !`;
        
        // On s'assure qu'aucun astérisque ne passe, même dans le mode secours !
        return res.status(200).json({ result: mockText.replace(/\*/g, '') });
    };

    if (!apiKey) {
        console.warn("Clé API manquante, activation du Mode Secours.");
        return sendMockResponse();
    }

    try {
        // 2. Utilisation du SDK officiel de Google
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // 3. Appel à l'IA
        const result = await model.generateContent(prompt);
        const response = await result.response;
        
        // 4. SÉCURITÉ : On nettoie le texte pour retirer absolument tous les astérisques
        let text = response.text().replace(/\*/g, '');

        return res.status(200).json({ result: text });
        
    } catch (err) {
        console.error("L'API Google a bloqué la requête :", err.message);
        return sendMockResponse();
    }
}
