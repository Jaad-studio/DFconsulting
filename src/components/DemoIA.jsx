import React, { useState } from 'react';
import { BarChart, MapPin, Loader2, Target, ArrowRight } from 'lucide-react';

export default function DemoIA() {
  const [specialty, setSpecialty] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const analyzeLocalMarket = () => {
    if (!specialty || !city) return;

    setLoading(true);
    setResult(null);
    setError('');

    // Mock API response delay
    setTimeout(() => {
        try {
            const mockResult = `Analyse locale générée pour la spécialité **${specialty}** à **${city}** :\n\n- Forte demande constatée ces 3 derniers mois (+15%).\n- La concurrence sur les moteurs de recherche reste modérée.\n- Potentiel de leads qualifiés : Élevé.\n- Recommandation : Mettre en avant le label RGE et les aides de l'État dans les campagnes publicitaires. (Ou la qualité du bassin pour un pisciniste).`;
            setResult(mockResult);
        } catch (err) {
            setError('Analyse momentanément indisponible. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    }, 1500);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="demo-ia" className="py-24 relative z-10 bg-black/40 border-y border-lime-500/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgxNjMsIDIzMCwgNTMsIDAuMSkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-400 text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
                    <BarChart className="w-4 h-4" />
                    Outil d'Analyse Stratégique
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight reveal">
                    Découvrez le potentiel de <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">votre secteur</span>
                </h2>
                <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto reveal" style={{ transitionDelay: '100ms' }}>
                    Nous interrogeons notre Intelligence Artificielle pour analyser la dynamique locale de votre marché. Saisissez votre ville et découvrez votre potentiel d'acquisition.
                </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 border border-lime-500/20 shadow-[0_0_50px_rgba(163,230,53,0.05)] max-w-4xl mx-auto reveal" style={{ transitionDelay: '200ms' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <label className="block text-xs text-emerald-100/50 uppercase tracking-wider mb-2 ml-1">Spécialité visée</label>
                        <select 
                          value={specialty} 
                          onChange={(e) => setSpecialty(e.target.value)}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-400 transition-all appearance-none cursor-pointer"
                        >
                            <option value="" disabled>Sélectionnez une activité</option>
                            <option value="Constructeur de Piscines / Pisciniste">Constructeur de Piscines / Pisciniste</option>
                            <option value="Pompes à chaleur (PAC)">Pompes à chaleur (PAC)</option>
                            <option value="Panneaux solaires">Panneaux solaires (Photovoltaïque)</option>
                            <option value="Isolation thermique (ITE/ITI)">Isolation thermique (ITE/ITI)</option>
                            <option value="Poêles à granulés">Poêles à granulés / Bois</option>
                            <option value="Rénovation énergétique">Rénovation énergétique</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs text-emerald-100/50 uppercase tracking-wider mb-2 ml-1">Zone d'intervention</label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-100/30" />
                            <input 
                              type="text" 
                              value={city} 
                              onChange={(e) => setCity(e.target.value)} 
                              placeholder="ex: Lyon, Bordeaux, Bretagne..." 
                              className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white focus:outline-none focus:border-lime-400 transition-all placeholder:text-emerald-100/20" 
                            />
                        </div>
                    </div>
                </div>

                <button 
                  onClick={analyzeLocalMarket} 
                  disabled={loading || !specialty || !city}
                  className={`w-full md:w-auto md:px-12 mx-auto py-4 font-bold text-black rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(163,230,53,0.2)] ${loading || !specialty || !city ? 'bg-gray-600 cursor-not-allowed opacity-50' : 'bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300'}`}
                >
                    {loading ? (
                        <span className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Analyse des données du secteur...</span>
                    ) : (
                        <span className="flex items-center gap-2"><Target className="w-5 h-5" /> Générer mon audit local gratuit</span>
                    )}
                </button>

                {(result || error) && (
                  <div className="mt-8 p-6 md:p-8 rounded-2xl bg-[#01140e] border border-lime-500/30 relative animate-fade-in-up">
                      <div className="absolute -top-3 left-6 bg-[#021c13] px-3 py-0.5 text-xs font-bold text-lime-400 tracking-wider uppercase rounded-full border border-lime-500/30 shadow-[0_0_10px_rgba(163,230,53,0.2)] flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                          {error ? 'Erreur' : 'Rapport IA Terminé'}
                      </div>

                      {error && <p className="text-red-400 mt-2">{error}</p>}
                      
                      {result && (
                        <>
                          <div className="text-emerald-50 text-base md:text-lg leading-relaxed whitespace-pre-wrap font-light mt-2" dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
                          <div className="mt-6 pt-6 border-t border-white/10 text-center">
                              <p className="text-sm text-emerald-100/50 mb-4">Ces données vous parlent ? Imaginez si nous ciblions exactement ces profils pour vous.</p>
                              <button onClick={scrollToContact} className="nav-link inline-flex text-lime-400 hover:text-lime-300 text-sm font-bold uppercase tracking-widest items-center gap-1 group">
                                  Discuter de ce marché avec un expert <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                          </div>
                        </>
                      )}
                  </div>
                )}
            </div>
        </div>
    </section>
  );
}
