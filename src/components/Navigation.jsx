import React, { useState } from 'react';
import { Menu, X, Phone, Target } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto glass-panel rounded-full px-4 py-3 flex items-center justify-between gap-8 shadow-2xl shadow-black/50 max-w-4xl w-full transition-all">
          <div className="flex items-center gap-2 pl-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="font-bold text-white tracking-tight hidden sm:block">DF Consulting</span>
            <span className="font-bold text-white tracking-tight sm:hidden">DF</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo('services')} className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors">Écosystème</button>
            <button onClick={() => scrollTo('demo-ia')} className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors">Audit IA</button>
            <button onClick={() => scrollTo('methode')} className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors">La Méthode</button>
            <button onClick={() => scrollTo('avis')} className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors">Témoignages</button>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => scrollTo('contact')} className="nav-link hidden sm:flex items-center gap-2 px-5 py-2 font-medium text-sm text-black rounded-full bg-white hover:bg-emerald-50 transition-colors">
              <Phone className="w-4 h-4" />
              Audit Gratuit
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#01140e]/98 backdrop-blur-3xl flex flex-col items-center justify-center overflow-hidden transition-all duration-300">
          <div className="absolute inset-0 bg-noise pointer-events-none opacity-40"></div>
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-lime-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center w-full px-8 gap-6 mt-12">
            <button onClick={() => scrollTo('services')} className="mobile-nav-link text-4xl font-light text-white hover:text-lime-400 transition-colors w-full text-center pb-6 border-b border-white/5">Écosystème</button>
            <button onClick={() => scrollTo('demo-ia')} className="mobile-nav-link text-4xl font-light text-white hover:text-lime-400 transition-colors w-full text-center pb-6 border-b border-white/5">Audit IA</button>
            <button onClick={() => scrollTo('methode')} className="mobile-nav-link text-4xl font-light text-white hover:text-lime-400 transition-colors w-full text-center pb-6 border-b border-white/5">La Méthode</button>
            <button onClick={() => scrollTo('avis')} className="mobile-nav-link text-4xl font-light text-white hover:text-lime-400 transition-colors w-full text-center pb-6 border-b border-white/5">Témoignages</button>

            <button onClick={() => scrollTo('contact')} className="mobile-nav-link mt-4 px-8 py-5 text-xl font-bold text-black rounded-2xl bg-gradient-to-r from-lime-400 to-emerald-400 shadow-[0_0_30px_rgba(163,230,53,0.2)] w-full text-center flex items-center justify-center gap-3 active:scale-95 transition-transform">
              <Target className="w-6 h-6" />
              Réserver mon Audit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
