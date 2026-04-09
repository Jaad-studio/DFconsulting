import React, { useState } from 'react';
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ specialty: '', challenge: '', name: '', phone: '' });

  const goToStep = (newStep) => {
    setStep(newStep);
  };

  const setSpecialty = (spec) => {
    setFormData({ ...formData, specialty: spec });
    goToStep(2);
  };

  const setChallenge = (chal) => {
    setFormData({ ...formData, challenge: chal });
    goToStep(3);
  };

  const submitForm = (e) => {
    e.preventDefault();
    goToStep(4);
  };

  const resetForm = () => {
    setFormData({ specialty: '', challenge: '', name: '', phone: '' });
    goToStep(1);
  };

  const specialties = [
    'Pompe à Chaleur (PAC)',
    'Solaire / Photovoltaïque',
    'Isolation / Façade',
    'Rénovation Globale',
    'Constructeur de Piscines'
  ];

  const challenges = [
    'Je manque de demandes de devis régulières',
    'Mes leads actuels sont de mauvaise qualité',
    'La concurrence est trop forte sur mon secteur',
    'Je perds trop de temps à prospecter'
  ];

  return (
    <section id="contact" className="py-32 relative z-10 bg-gradient-to-t from-[#020e0a] to-[#041e15]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="glass-panel rounded-[3rem] p-8 md:p-14 relative overflow-hidden reveal">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-lime-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 min-h-[400px]">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Demandez votre audit</h2>
                        <p className="text-emerald-100/70 text-lg">Répondez à ces questions rapides pour préparer notre échange.</p>
                    </div>

                    {step < 4 && (
                      <div className="w-full max-w-sm mx-auto bg-black/40 h-1.5 rounded-full mb-12 overflow-hidden flex">
                          <div className="h-full bg-lime-400 transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }}></div>
                      </div>
                    )}

                    {step === 1 && (
                      <div className="animate-fade-in-up max-w-2xl mx-auto">
                          <h3 className="text-xl md:text-2xl text-white font-medium mb-6 text-center">Quelle est votre spécialité RGE ou métier principal ?</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {specialties.map(spec => (
                                <button key={spec} onClick={() => setSpecialty(spec)} className="p-5 rounded-2xl border border-white/10 bg-black/20 hover:bg-lime-500/10 hover:border-lime-500/50 transition-all text-white font-medium text-left flex items-center justify-between group">
                                    {spec} 
                                    <ChevronRight className="w-5 h-5 text-lime-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </button>
                              ))}
                          </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="animate-fade-in-up max-w-2xl mx-auto">
                          <h3 className="text-xl md:text-2xl text-white font-medium mb-6 text-center">Quel est votre plus grand défi actuel ?</h3>
                          <div className="grid grid-cols-1 gap-4">
                              {challenges.map(chal => (
                                <button key={chal} onClick={() => setChallenge(chal)} className="p-5 rounded-2xl border border-white/10 bg-black/20 hover:bg-lime-500/10 hover:border-lime-500/50 transition-all text-white font-medium text-left flex items-center justify-between group">
                                    {chal}
                                    <ChevronRight className="w-5 h-5 text-lime-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </button>
                              ))}
                          </div>
                          <button onClick={() => goToStep(1)} className="mt-8 text-sm text-emerald-100/50 hover:text-white mx-auto block transition-colors">← Retour</button>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="animate-fade-in-up max-w-md mx-auto">
                          <h3 className="text-xl md:text-2xl text-white font-medium mb-6 text-center">Où pouvons-nous vous joindre ?</h3>
                          <form onSubmit={submitForm} className="space-y-4">
                              <div>
                                  <label className="block text-xs text-emerald-100/50 uppercase tracking-wider mb-2 ml-1">Nom ou Entreprise</label>
                                  <input 
                                    required 
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all placeholder:text-emerald-100/20" 
                                    placeholder="Ex: Jean Dupont" 
                                  />
                              </div>
                              <div>
                                  <label className="block text-xs text-emerald-100/50 uppercase tracking-wider mb-2 ml-1">Numéro de téléphone</label>
                                  <input 
                                    required 
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all placeholder:text-emerald-100/20" 
                                    placeholder="06 12 34 56 78" 
                                  />
                              </div>
                              <button type="submit" className="w-full py-4 mt-6 font-bold text-black rounded-xl bg-lime-400 hover:bg-lime-300 transition-colors shadow-[0_0_20px_rgba(163,230,53,0.3)] flex justify-center items-center gap-2 group">
                                  Terminer et valider 
                                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              </button>
                          </form>
                          <button onClick={() => goToStep(2)} className="mt-8 text-sm text-emerald-100/50 hover:text-white mx-auto block transition-colors">← Étape précédente</button>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="animate-fade-in-up text-center py-8">
                          <div className="w-20 h-20 rounded-full bg-lime-500/20 flex items-center justify-center mx-auto mb-6">
                              <CheckCircle className="w-10 h-10 text-lime-400" />
                          </div>
                          <h3 className="text-3xl text-white font-bold mb-4">Demande confirmée !</h3>
                          <p className="text-emerald-100/70 text-lg max-w-md mx-auto mb-8">
                              Merci {formData.name}. Notre équipe a bien reçu vos informations concernant votre activité de {formData.specialty}. <br /><br />Un de nos experts vous contactera très rapidement au <span className="text-white font-medium">{formData.phone}</span>.
                          </p>
                          <button onClick={resetForm} className="text-lime-400 hover:text-lime-300 text-sm font-medium transition-colors">
                              Faire une nouvelle demande
                          </button>
                      </div>
                    )}

                </div>
            </div>
        </div>
    </section>
  );
}
