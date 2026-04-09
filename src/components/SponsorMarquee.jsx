import React from 'react';
import { ShieldCheck, Zap, Sun, Home, Award, Waves } from 'lucide-react';

export default function SponsorMarquee() {
  const items = [
    { icon: <ShieldCheck className="text-lime-400 w-5 h-5" />, text: "Artisans certifiés RGE" },
    { icon: <Waves className="text-lime-400 w-5 h-5" />, text: "Piscinistes & Spas" },
    { icon: <Zap className="text-lime-400 w-5 h-5" />, text: "QualiPAC" },
    { icon: <Sun className="text-lime-400 w-5 h-5" />, text: "QualiPV" },
    { icon: <Home className="text-lime-400 w-5 h-5" />, text: "Expert MaPrimeRénov'" },
    { icon: <Award className="text-lime-400 w-5 h-5" />, text: "Qualibat" },
  ];

  // Repeat items for infinite scroll
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-[#01140e] border-y border-white/5 py-5 overflow-hidden flex relative z-20">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#01140e] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#01140e] to-transparent z-10 pointer-events-none"></div>
        <div className="flex animate-marquee gap-12 whitespace-nowrap pl-12 items-center opacity-60">
            {marqueeItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.icon}
                <span className="text-white font-medium uppercase tracking-widest text-sm">{item.text}</span>
              </div>
            ))}
        </div>
    </div>
  );
}
