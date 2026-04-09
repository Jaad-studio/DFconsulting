import React from 'react';
import { Star, Quote, BadgeCheck } from 'lucide-react';

export default function Testimonials() {
  const renderStars = () => (
    <div className="flex gap-1 mb-6 text-lime-400">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-lime-400" />)}
    </div>
  );

  return (
    <section id="avis" className="py-32 relative z-10 overflow-hidden bg-gradient-to-b from-[#05281d] to-[#041e15]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lime-500/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-3">Témoignages</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight reveal">
                    Ceux qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">dominent leur secteur</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Avis 1 (Large) */}
                <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-lime-500/30 hover:-translate-y-1 transition-all duration-500 md:col-span-2 lg:col-span-2 flex flex-col justify-between reveal">
                    <Quote className="absolute top-6 right-6 w-16 h-16 text-white/[0.03] rotate-180 pointer-events-none" />
                    <div>
                        {renderStars()}
                        <p className="text-lg md:text-xl text-emerald-50/90 font-light leading-relaxed mb-8">
                            "Depuis que nous avons confié notre acquisition à DF Consulting, la donne a complètement changé. Nous avons arrêté d'acheter des leads éclatés entre 5 concurrents où il fallait se battre sur les prix. Aujourd'hui, les prospects nous attendent, le taux de transformation a doublé et notre planning de pose est rempli sur 2 mois complets. Un vrai partenaire de croissance."
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" alt="Laurent B." loading="lazy" decoding="async" className="w-12 h-12 rounded-full object-cover shadow-[0_0_15px_rgba(163,230,53,0.3)] border border-lime-400/50" />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-white font-bold text-sm">Laurent B.</p>
                                <BadgeCheck className="w-4 h-4 text-blue-400" />
                            </div>
                            <p className="text-emerald-400/80 text-xs font-medium uppercase tracking-wider mt-0.5">Gérant Rénov'Énergie (PAC)</p>
                        </div>
                    </div>
                </div>

                {/* Avis 2 (Standard) */}
                <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-lime-500/30 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between reveal" style={{ transitionDelay: '100ms' }}>
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-white/[0.03] rotate-180 pointer-events-none" />
                    <div>
                        {renderStars()}
                        <p className="text-base text-emerald-50/80 font-light leading-relaxed mb-8">
                            "J'étais sceptique sur l'approche par l'IA au début, mais les résultats sont là. Coût par lead en baisse de 35% sur le solaire, et surtout des clients qualifiés qui ont le budget pour leur projet."
                        </p>
                    </div>
                    <div className="flex items-center gap-3 mt-auto">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" alt="Sophie T." loading="lazy" className="w-10 h-10 rounded-full object-cover shadow-lg border border-white/10" />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-white font-bold text-sm">Sophie T.</p>
                                <BadgeCheck className="w-3.5 h-3.5 text-blue-400" />
                            </div>
                            <p className="text-emerald-400/80 text-xs font-medium">Photovoltaïque</p>
                        </div>
                    </div>
                </div>

                {/* Avis 3 (Standard) */}
                <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-lime-500/30 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between reveal" style={{ transitionDelay: '200ms' }}>
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-white/[0.03] rotate-180 pointer-events-none" />
                    <div>
                        {renderStars()}
                        <p className="text-base text-emerald-50/80 font-light leading-relaxed mb-8">
                            "M. Fabre comprend vraiment notre métier d'artisan. L'écosystème mis en place tourne tout seul. On se concentre enfin sur nos chantiers de construction de piscine et plus sur la prospection."
                        </p>
                    </div>
                    <div className="flex items-center gap-3 mt-auto">
                        <img src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=150&q=80" alt="Marc D." loading="lazy" className="w-10 h-10 rounded-full object-cover shadow-lg border border-white/10" />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-white font-bold text-sm">Marc D.</p>
                                <BadgeCheck className="w-3.5 h-3.5 text-blue-400" />
                            </div>
                            <p className="text-emerald-400/80 text-xs font-medium">Pisciniste</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
