import React from 'react';
import { Zap, TrendingUp } from 'lucide-react';

export default function Method() {
  return (
    <section id="methode" className="py-24 relative z-10 border-t border-white/5 bg-gradient-to-b from-[#041e15] to-[#05281d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="reveal">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-full border-2 border-lime-400/30 overflow-hidden shadow-[0_0_20px_rgba(163,230,53,0.2)]">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" alt="M. Fabre" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-lime-400 font-medium tracking-widest uppercase text-sm">Accompagnement VIP</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        L'humain au cœur <br /> de la machine.
                    </h2>
                    <p className="text-xl text-slate-400 font-light mb-8 leading-relaxed">
                        DF Consulting, c'est la puissance des algorithmes couplée à un accompagnement VIP. Vous parlez directement avec M. Fabre, un expert qui connaît le label RGE, MaPrimeRénov', le marché de la piscine et la réalité des chantiers.
                    </p>
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-3 text-white">
                            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <Zap className="w-3 h-3 text-emerald-400" />
                            </div> 
                            Un interlocuteur unique (M. Fabre)
                        </li>
                        <li className="flex items-center gap-3 text-white">
                            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <Zap className="w-3 h-3 text-emerald-400" />
                            </div> 
                            Suivi ROI en temps réel
                        </li>
                        <li className="flex items-center gap-3 text-white">
                            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <Zap className="w-3 h-3 text-emerald-400" />
                            </div> 
                            Disponibilité WhatsApp 7j/7
                        </li>
                    </ul>
                </div>
                <div className="relative reveal" style={{ transitionDelay: '200ms' }}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-amber-500/20 blur-[100px] rounded-full"></div>
                    <div className="glass-panel rounded-[2rem] p-8 md:p-10 relative z-10">
                        <div className="w-full aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#041e15]/60 backdrop-blur-[2px]"></div>
                            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#041e15] to-transparent"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <TrendingUp className="w-16 h-16 text-lime-400 mb-4 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                                <p className="text-white font-bold text-4xl drop-shadow-md">+312%</p>
                                <p className="text-lime-100/80 text-sm uppercase tracking-widest mt-2 font-medium">Croissance moyenne</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
