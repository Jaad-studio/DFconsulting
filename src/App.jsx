import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SponsorMarquee from './components/SponsorMarquee';
import Services from './components/Services';
import DemoIA from './components/DemoIA';
import Method from './components/Method';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reveal Observer
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    // Cleanup splash
    setTimeout(() => {
      const splash = document.getElementById('splash-screen');
      if (splash) {
        splash.classList.add('opacity-0');
        setTimeout(() => setLoading(false), 500);
      } else {
        setLoading(false);
      }
    }, 1200);
  }, [loading]);

  return (
    <HelmetProvider>
      <div className="bg-[#041e15] text-emerald-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden relative min-h-screen">
        <Helmet>
          <title>DF Consulting - Cabinet de Croissance RGE et Piscinistes</title>
          <meta name="description" content="DF Consulting accompagne les artisans RGE et Piscinistes dans leur croissance digitale. Acquisition de leads exclusifs, valorisation IA et suivi personnalisé." />
        </Helmet>

        {loading && (
          <div id="splash-screen" className="fixed inset-0 z-[100] bg-[#041e15] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out">
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative flex items-center text-8xl md:text-[10rem] font-black tracking-tighter">
                <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">D</span>
                <span className="text-lime-400 drop-shadow-[0_0_30px_rgba(163,230,53,0.6)] -ml-1 md:-ml-2">F</span>
              </div>
              <p className="mt-2 text-emerald-200/60 font-medium tracking-[0.4em] uppercase text-sm md:text-lg animate-pulse pl-2">
                Consulting
              </p>
            </div>
          </div>
        )}

        <div className="fixed inset-0 z-0 bg-[#041e15] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.04] mix-blend-screen"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#063323]/90 via-transparent to-[#031810]/90"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-500/20 blur-[150px] rounded-full mix-blend-screen animate-forest-1"></div>
            <div className="absolute top-[10%] right-[-10%] w-[700px] h-[700px] bg-amber-500/15 blur-[150px] rounded-full mix-blend-screen animate-forest-2"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[900px] h-[900px] bg-teal-500/20 blur-[150px] rounded-full mix-blend-screen animate-forest-1" style={{ animationDelay: '-10s' }}></div>
            <div className="sun-ray left-[10%]"></div>
            <div className="sun-ray left-[45%]" style={{ animationDelay: '-3s', width: '250px' }}></div>
            <div className="sun-ray left-[80%]" style={{ animationDelay: '-7s' }}></div>
            <div className="absolute inset-0 bg-noise pointer-events-none opacity-60"></div>
        </div>

        <Navigation />
        <Hero />
        <SponsorMarquee />
        <Services />
        <DemoIA />
        <Method />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
        
        <a href="https://wa.me/33749699137" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center cursor-pointer pointer-events-auto">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </HelmetProvider>
  );
}

export default App;
