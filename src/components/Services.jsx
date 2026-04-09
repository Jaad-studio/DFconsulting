import React from 'react';
import { Target, Leaf, Sun } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-32 relative z-10 bg-gradient-to-b from-[#041e15] via-[#062e21] to-[#041e15]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight text-center relative z-10 reveal">
                Un écosystème d'acquisition <span className="italic text-emerald-200/50 font-light">naturellement puissant.</span>
            </h2>

            <div className="space-y-4 relative z-10">
                <div className="glass-panel rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 group hover:bg-white/[0.05] transition-colors cursor-default reveal">
                    <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-lime-500/50 transition-colors">
                        <Target className="w-8 h-8 text-lime-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">Acquisition Multicanal (Ads)</h3>
                        <p className="text-emerald-100/70 text-lg font-light leading-relaxed">Nous diffusons vos offres sur Meta (Facebook/Instagram) et Google. Nous captons les particuliers de votre région au moment exact où ils envisagent une rénovation énergétique ou la construction d'une piscine.</p>
                    </div>
                </div>

                <div className="glass-panel rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 group hover:bg-white/[0.05] transition-colors cursor-default reveal" style={{ transitionDelay: '100ms' }}>
                    <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 transition-colors">
                        <Leaf className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">Valorisation par l'IA</h3>
                        <p className="text-emerald-100/70 text-lg font-light leading-relaxed">Plus besoin de payer des agences hors de prix pour des photos. Notre intelligence artificielle magnifie vos chantiers écologiques et rédige des textes persuasifs.</p>
                    </div>
                </div>

                <div className="glass-panel rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 group hover:bg-white/[0.05] transition-colors cursor-default reveal" style={{ transitionDelay: '200ms' }}>
                    <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-green-500/50 transition-colors">
                        <Sun className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">Exclusivité Totale</h3>
                        <p className="text-emerald-100/70 text-lg font-light leading-relaxed">Contrairement aux plateformes classiques, chaque lead généré par nos tunnels de conversion n'appartient qu'à vous. Finie la guerre des prix.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
