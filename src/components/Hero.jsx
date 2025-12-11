import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { ASSETS } from "../constants";

export default function Hero() {
  const heroImages = [ASSETS.hero.main, ASSETS.hero.ambiance, ASSETS.hero.chefAction];
  const heroCaptions = [
    "Crafted to Perfection — A signature dish that defines our philosophy of refined taste.",
    "Ambiance Meets Art — Where luxury, intimacy, and timeless elegance intertwine.",
    "Mastery Behind Every Plate — Precision, passion, and craftsmanship from our culinary team.",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 300);
    }, 7000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleImageChange = (idx) => {
    if (idx !== currentImage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage(idx);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Images with Crossfade */}
      {heroImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            currentImage === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img}
            alt={`Hero ${idx + 1}`}
            className="w-full h-full object-cover scale-105 animate-ken-burns"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>
      ))}

      {/* Hero Content - Lowered for breathing room */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto text-white pt-32 md:pt-40">
        {/* Subtitle */}
        <div className="mb-8 overflow-hidden">
          <p className={`uppercase text-xs md:text-sm tracking-[0.3em] font-light text-white/70 transition-all duration-700 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            Est. 2015 — Casablanca, Morocco
          </p>
        </div>

        {/* Logo/Title */}
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-[0.05em] mb-8 transition-all duration-700 ${
          isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          ÉLAN
        </h1>

        {/* Dynamic Caption */}
        <div className="min-h-[4rem] flex items-center justify-center">
          <p className={`text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-700 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            {heroCaptions[currentImage]}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 transition-all duration-700 delay-100 ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <a
            href="#menu"
            className="group px-8 py-3 border border-white/40 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500 tracking-wider text-xs md:text-sm font-light"
          >
            <span className="group-hover:tracking-[0.3em] transition-all duration-300">EXPLORE MENU</span>
          </a>

          <a
            href="#reservations"
            className="group px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-500 tracking-wider text-xs md:text-sm font-light"
          >
            <span className="group-hover:tracking-[0.3em] transition-all duration-300">RESERVE TABLE</span>
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-3 justify-center mt-16">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleImageChange(idx)}
              className={`group relative transition-all duration-500 ${currentImage === idx ? "w-10" : "w-6 hover:w-8"}`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div className={`h-0.5 rounded-full transition-all duration-500 ${
                currentImage === idx ? "bg-white" : "bg-white/30 group-hover:bg-white/60"
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </div>

      {/* Ken Burns effect animation */}
      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns { animation: ken-burns 20s ease-out infinite alternate; }
      `}</style>
    </section>
  );
}