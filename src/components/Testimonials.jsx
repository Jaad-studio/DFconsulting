import React from 'react';
import { Star, Quote, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const renderStars = () => (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-lime-400 text-lime-400" />)}
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } }
  };

  return (
    <section id="avis" className="py-32 relative z-10 overflow-hidden bg-[#000000]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lime-500/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
                <div className="inline-block px-4 py-1.5 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    Exclusivités & Chantiers Validés
                </div>
                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                    Ceux qui domptent <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500 italic font-serif font-light">leur marché local.</span>
                </h3>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {/* Avis 1 (PAC) */}
                <motion.div variants={cardVariants} className="glass-panel rounded-3xl p-10 relative overflow-hidden group hover:border-lime-500/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between border-white/10 bg-white/[0.01]">
                    <Quote className="absolute top-8 right-8 w-16 h-16 text-white/[0.02] rotate-180 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                    <div>
                        {renderStars()}
                        <p className="text-lg md:text-xl text-emerald-50/90 font-light leading-relaxed mb-10">
                            "Depuis que nous avons confié notre acquisition à DF Consulting, la donne a complètement changé. Nous avons arrêté d'acheter des leads éclatés entre 5 concurrents où il fallait se battre sur les prix. Aujourd'hui, les prospects nous attendent, et notre planning de pose PAC est plein sur 3 mois."
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                        <img src="/avatar_pac.jpg" alt="Laurent B." loading="lazy" decoding="async" className="w-14 h-14 rounded-2xl object-cover shadow-[0_0_20px_rgba(163,230,53,0.2)] border border-lime-400/30" />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-white font-bold text-base">Laurent Dubois</p>
                                <BadgeCheck className="w-4 h-4 text-blue-400" />
                            </div>
                            <p className="text-lime-400/80 text-xs font-bold uppercase tracking-wider mt-1">Gérant Rénov'Énergie (PAC)</p>
                        </div>
                    </div>
                </motion.div>

                {/* Avis 2 (Solar) */}
                <motion.div variants={cardVariants} className="glass-panel rounded-3xl p-10 relative overflow-hidden group hover:border-lime-500/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between border-white/10 bg-white/[0.01]">
                    <Quote className="absolute top-8 right-8 w-16 h-16 text-white/[0.02] rotate-180 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                    <div>
                        {renderStars()}
                        <p className="text-lg md:text-xl text-emerald-50/90 font-light leading-relaxed mb-10">
                            "J'étais sceptique sur l'approche de valorisation par l'IA au début. Finalement, nos pubs sont cliquées 3 fois plus que nos concurrents sur le solaire. Des clients ultra qualifiés qui viennent directement nous voir. Le ROI est monstrueux."
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                        <img src="/avatar_solar.jpg" alt="Sophie T." loading="lazy" className="w-14 h-14 rounded-2xl object-cover shadow-[0_0_20px_rgba(163,230,53,0.2)] border border-lime-400/30" />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-white font-bold text-base">Sarah Jenkins</p>
                                <BadgeCheck className="w-4 h-4 text-blue-400" />
                            </div>
                            <p className="text-lime-400/80 text-xs font-bold uppercase tracking-wider mt-1">Directrice Solaire Pro</p>
                        </div>
                    </div>
                </motion.div>

                {/* Avis 3 (Pool) */}
                <motion.div variants={cardVariants} className="glass-panel rounded-3xl p-10 relative overflow-hidden group hover:border-lime-500/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between border-white/10 bg-white/[0.01]">
                    <Quote className="absolute top-8 right-8 w-16 h-16 text-white/[0.02] rotate-180 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                    <div>
                        {renderStars()}
                        <p className="text-lg md:text-xl text-emerald-50/90 font-light leading-relaxed mb-10">
                            "M. Fabre comprend vraiment notre métier du luxe. L'écosystème mis en place tourne tout seul. On vend des bassins de luxe à plus de 45 000€ à des clients que l'on pensait intouchables avant. Nous dominons toute la région."
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                        <img src="/avatar_pool.jpg" alt="Marc D." loading="lazy" className="w-14 h-14 rounded-2xl object-cover shadow-[0_0_20px_rgba(163,230,53,0.2)] border border-lime-400/30" />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-white font-bold text-base">Alex Croft</p>
                                <BadgeCheck className="w-4 h-4 text-blue-400" />
                            </div>
                            <p className="text-lime-400/80 text-xs font-bold uppercase tracking-wider mt-1">Pisciniste Luxe</p>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    </section>
  );
}
