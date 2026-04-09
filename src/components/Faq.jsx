import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Les leads sont-ils vraiment exclusifs ?",
      answer: "Absolument. Contrairement aux plateformes de courtage traditionnelles, nous créons un système d'acquisition qui tourne en votre nom propre. Chaque prospect généré n'est envoyé qu'à vous. Fini la guerre des prix contre 4 concurrents de votre ville."
    },
    {
      question: "Combien de temps pour voir les premiers résultats ?",
      answer: "Une fois l'audit validé, la création technique de vos tunnels de conversion prend environ 5 à 7 jours. Les premières demandes de devis commencent généralement à tomber dans les 48h à 72h suivant le lancement officiel des annonces."
    },
    {
      question: "Y a-t-il un engagement de durée ?",
      answer: "Non. Nous basons notre relation sur la performance, le ROI et la confiance. Si le système vous rapporte des chantiers rentables, vous resterez naturellement avec nous. Vous êtes libre de mettre en pause la collaboration quand vous le souhaitez."
    },
    {
      question: "Quel est le budget minimum à prévoir ?",
      answer: "Cela dépend fortement de votre zone d'intervention et de votre spécialité (Pompes à chaleur, Pisciniste, Solaire, Rénovation Globale...). Lors de notre audit de 15 minutes, nous utilisons nos données locales pour vous donner une estimation précise et chiffrée."
    }
  ];

  return (
    <section id="faq" className="py-24 relative z-10 border-t border-white/5 bg-[#041e15]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-3">FAQ</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight reveal">
                    Questions <span className="italic font-light text-emerald-200/50">fréquentes</span>
                </h3>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index}
                        className="glass-panel rounded-2xl overflow-hidden cursor-pointer group reveal" 
                        style={{ transitionDelay: `${index * 100}ms` }}
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                            <h4 className="text-lg md:text-xl font-medium text-white group-hover:text-lime-400 transition-colors">
                                {faq.question}
                            </h4>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300">
                                <ChevronDown className={`w-5 h-5 text-lime-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                            </div>
                        </div>
                        <div 
                            className="overflow-hidden transition-all duration-500 ease-in-out" 
                            style={{ maxHeight: openIndex === index ? '500px' : '0' }}
                        >
                            <div className="px-6 md:px-8 pb-6 md:px-8 text-emerald-100/70 font-light leading-relaxed border-t border-white/5 pt-4">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
