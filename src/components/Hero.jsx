import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-end items-center pb-12 z-10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none flex flex-col bg-[#021c13]">
            <div className="relative w-full h-[60vh] md:h-full overflow-hidden flex items-center justify-center">
                <img src="/hero.jpg" alt="DF Consulting - Croissance digitale pour artisans RGE et Piscinistes" className="absolute inset-0 w-full h-full object-cover object-center z-10 opacity-70" />
                <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-gradient-to-t from-[#041e15] via-[#041e15]/90 to-transparent z-20"></div>
            </div>
            <div className="w-full h-[40vh] md:hidden bg-[#041e15] z-10"></div>
        </div>

        <div className="relative z-30 w-full max-w-5xl mx-auto px-4 flex flex-col items-center pointer-events-none">
            <div className="flex flex-wrap justify-center gap-4 mb-6 pointer-events-auto">
                <button onClick={scrollToContact} className="nav-link px-8 py-4 font-bold text-black rounded-full bg-lime-400 hover:bg-lime-300 transition-colors shadow-[0_0_30px_rgba(163,230,53,0.3)] flex items-center justify-center gap-2 group">
                    Réserver mon audit gratuit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pointer-events-auto">
                <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-white font-medium text-sm">+10 Artisans / Piscinistes</span>
                </div>
                <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3">
                    <span className="text-lime-400 font-bold">x3</span>
                    <span className="text-white font-medium text-sm">Demandes de devis</span>
                </div>
            </div>
        </div>
    </section>
  );
}
