import React from 'react';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 text-center relative z-10 bg-black">
        <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="text-emerald-500/50 w-4 h-4" />
            <span className="font-bold text-emerald-500/50">DF Consulting</span>
        </div>
        <p className="text-emerald-100/30 text-sm mb-2">
            © {new Date().getFullYear()} Tous droits réservés. Propulsé par l'Intelligence Artificielle.
        </p>
        <a href="https://www.jaad.studio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-100/30 text-xs hover:text-lime-400 transition-colors group">
            Site web by <span className="font-semibold text-emerald-100/50 group-hover:text-lime-400 transition-colors">JAAD studio</span>
        </a>
    </footer>
  );
}
