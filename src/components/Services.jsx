import React from 'react';
import { Target, Leaf, Sun, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
  };

  return (
    <section id="services" className="py-32 relative z-10 bg-gradient-to-b from-[#041e15] to-[#01140e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-emerald-500/5 blur-[200px] rounded-full pointer-events-none"></div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter relative z-10 mb-4">
                    Un écosystème d'acquisition <br/> <span className="italic text-emerald-300/80 font-light font-serif">naturellement surpuissant.</span>
                </h2>
                <p className="text-emerald-100/60 text-lg md:text-xl max-w-2xl mx-auto">
                    Nous combinons data-science locale et créativité humaine pour dominer votre secteur géographique.
                </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10"
            >
                {/* BIG CARD : OPÉRATIONS MULTICANAL */}
                <motion.div variants={itemVariants} className="lg:col-span-2 group cursor-pointer relative overflow-hidden rounded-[2.5rem] bg-black border border-white/10 aspect-[16/10] md:aspect-[16/8] lg:aspect-auto h-[450px]">
                    <div className="absolute inset-0 bg-[url('/bg_multichannel.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 -rotate-45 group-hover:rotate-0 transition-all duration-500">
                        <MoveRight className="text-lime-400 w-5 h-5" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                        <div className="w-14 h-14 rounded-2xl bg-black/60 backdrop-blur-md border border-lime-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                            <Target className="w-7 h-7 text-lime-400" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">Acquisition Multicanal</h3>
                        <p className="text-emerald-50/80 text-lg font-light leading-relaxed max-w-xl">
                            Nous diffusons vos offres sur Meta (Facebook/Instagram) et Google. Nous captons les particuliers et professionnels de votre région au moment exact de leur intention d'achat.
                        </p>
                    </div>
                </motion.div>

                {/* SMALL CARD 1 : VALORISATION IA */}
                <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-[2.5rem] bg-black border border-white/10 h-[450px]">
                    <div className="absolute inset-0 bg-[url('/bg_ai.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <Leaf className="w-8 h-8 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.6)]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Valorisation par l'IA</h3>
                        <p className="text-emerald-50/70 text-base font-light leading-relaxed">
                            Plus besoin de photographes hors de prix. Notre IA de pointe magnifie vos futurs chantiers pour projeter vos prospects.
                        </p>
                    </div>
                </motion.div>

                {/* MEDIUM CARD : EXCLUSIVITÉ */}
                <motion.div variants={itemVariants} className="lg:col-span-3 group relative overflow-hidden rounded-[2.5rem] bg-black border border-white/10 h-72 lg:h-64 flex flex-col md:flex-row items-center">
                    <div className="absolute inset-0 bg-[url('/bg_exclusive.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center w-full px-8 md:px-16 gap-8 text-center md:text-left">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lime-400 to-emerald-600 flex items-center justify-center shadow-[0_0_40px_rgba(163,230,53,0.5)] shrink-0 group-hover:rotate-12 transition-transform duration-500">
                            <Sun className="w-10 h-10 text-black" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">Exclusivité Absolue du Flux</h3>
                            <p className="text-emerald-50/80 text-lg font-light leading-relaxed max-w-3xl">
                                Contrairement aux courtiers classiques, chaque lead atterrit chez vous, et vous seul. <br className="hidden md:block"/>Finie la guerre des prix au moins-disant dans votre ville.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    </section>
  );
}
