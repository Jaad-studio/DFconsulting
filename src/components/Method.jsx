import React from 'react';
import { Zap, TrendingUp, Handshake, Mail, MessageSquare } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Method() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]); // Parallax on photo

  return (
    <section id="methode" className="py-24 md:py-32 relative z-10 bg-[#01140e] overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lime-500/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                
                {/* LEFT SIDE: EDITORIAL PHOTO (Sticky) */}
                <div className="lg:col-span-5 relative w-full lg:sticky lg:top-32 h-[500px] md:h-[700px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group">
                    <motion.div style={{ y }} className="absolute inset-0 z-0">
                        <img 
                          src="/fabre.jpg" 
                          alt="Notre équipe d'experts" 
                          loading="lazy" 
                          decoding="async" 
                          className="w-full h-[120%] object-cover object-top" 
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                    
                    <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
                                <span className="text-lime-400 font-bold uppercase tracking-widest text-[10px]">Consultant Stratégique</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white font-serif">Votre Expert</h3>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.4)] group-hover:scale-110 transition-transform">
                            <Handshake className="w-6 h-6 text-black" />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: SCROLLING CONTENT */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
                            L'humain au cœur <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500 italic font-serif">de la machine.</span>
                        </h2>
                        
                        <p className="text-xl md:text-2xl text-emerald-50/70 font-light mb-12 leading-relaxed">
                            DF Consulting, c'est la puissance aveugle des algorithmes couplée à une subtilité humaine. Vous parlez <span className="text-white font-medium">directement avec un expert</span> qui connaît le label RGE, MaPrimeRénov', le marché luxueux de la piscine et la dure réalité des chantiers.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-lime-500/20 hover:bg-white/[0.04] transition-colors"
                        >
                            <MessageSquare className="w-8 h-8 text-lime-400 mb-4" />
                            <h4 className="text-2xl font-bold text-white mb-2">Disponibilité WhatsApp 7j/7</h4>
                            <p className="text-emerald-100/60 leading-relaxed font-light">Une question sur un lead ? Un ajustement de budget suite à un gros chantier gagné ? Envoyez un vocal, nous optimisons l'algorithme dans la seconde.</p>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-lime-500/20 hover:bg-white/[0.04] transition-colors"
                        >
                            <TrendingUp className="w-8 h-8 text-lime-400 mb-4" />
                            <h4 className="text-2xl font-bold text-white mb-2">Suivi ROI Extrême</h4>
                            <p className="text-emerald-100/60 leading-relaxed font-light">Nous ne comptons pas en impressions ou en clics. Nous comptons en euros générés. Vous avez accès à un tableau de bord en temps réel connectant nos pubs à vos signatures de devis.</p>
                        </motion.div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-lime-500/10 to-emerald-900/40 border border-lime-500/30 flex items-center justify-between"
                    >
                        <div>
                            <p className="text-lime-400 font-bold text-4xl md:text-5xl mb-1">+312%</p>
                            <p className="text-white/80 font-medium uppercase tracking-widest text-sm">Croissance moyenne de nos partenaires</p>
                        </div>
                        <TrendingUp className="w-16 h-16 text-lime-400/50" />
                    </motion.div>
                    
                </div>
            </div>
        </div>
    </section>
  );
}
