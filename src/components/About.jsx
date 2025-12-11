import { useState, useEffect } from "react";
import { ASSETS } from "../constants";
import { Award, Star, Users, Clock } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { icon: Award, value: "12+", label: "Years of Excellence" },
    { icon: Star, value: "50+", label: "Signature Creations" },
    { icon: Users, value: "15K+", label: "Discerning Guests" },
    { icon: Clock, value: "Evening", label: "Service Daily" }
  ];

  const milestones = [
    { year: "2015", title: "The Beginning", desc: "Élan opens its doors in Casablanca" },
    { year: "2018", title: "First Recognition", desc: "Awarded inaugural Michelin star" },
    { year: "2021", title: "Regional Mastery", desc: "Celebrated as Mediterranean leader" },
    { year: "2024", title: "Pinnacle of Craft", desc: "Redefining contemporary fine dining" }
  ];

  return (
    <section id="about" className="relative w-full bg-black text-white overflow-hidden">
      {/* Ultra-Subtle Ambient Glows */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-32 left-20 w-[600px] h-[600px] bg-white rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-32 right-20 w-[600px] h-[600px] bg-white rounded-full blur-[200px] animate-pulse delay-1000" />
      </div>

      <div className="relative py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Section Header - Cinematic Entrance */}
          <div className="text-center mb-32">
            <div className={`transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <p className="tracking-[0.5em] text-xs text-white/50 uppercase mb-6">Our Legacy</p>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white mb-8">
                The Essence of <span className="italic">Élan</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
            </div>
          </div>

          {/* Main Grid - Elegant Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start mb-40">
            
            {/* LEFT: Narrative & Chef */}
            <div className={`space-y-12 transition-all duration-1500 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
              <div className="space-y-8 text-white/70 leading-loose text-lg font-light max-w-xl">
                <p className="text-2xl text-white/90 font-normal leading-relaxed">
                  Élan is more than a restaurant — it is a sanctuary of refined taste, where every element converges in perfect harmony.
                </p>
                <p>
                  Conceived as a celebration of contemporary gastronomy, our space marries minimalist elegance with understated luxury. 
                  Monochromatic interiors, softened by subtle lighting and pristine lines, create an atmosphere of quiet sophistication.
                </p>
                <p>
                  From the moment you arrive, the ocean horizon frames your experience, while our cuisine — rooted in Mediterranean tradition 
                  yet boldly innovative — unfolds across meticulously crafted courses.
                </p>
                <p className="text-white/80">
                  Here, dining transcends the plate. It becomes a moment suspended in time — deliberate, intimate, unforgettable.
                </p>
              </div>

              {/* Philosophy Duet */}
              <div className="grid grid-cols-2 gap-6">
                {["Purity of Ingredient", "Mastery of Technique"].map((principle, i) => (
                  <div
                    key={i}
                    className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-700 cursor-default"
                  >
                    <h4 className="text-white text-lg mb-3 tracking-wider group-hover:tracking-widest transition-all duration-500">
                      {principle}
                    </h4>
                    <p className="text-white/50 text-sm">
                      {i === 0 ? "Only the finest, seasonally perfect" : "Precision elevated to art"}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chef Portrait */}
              <div className="flex items-center gap-8 pt-10 border-t border-white/10">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <img
                      src={ASSETS.about.chefPortrait}
                      alt="Chef Alexandre Moreau"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <Star className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-light text-white tracking-wide">
                    Chef Alexandre Moreau
                  </h4>
                  <p className="text-white/60 text-sm tracking-wider">Visionary • Executive Chef</p>
                  <p className="text-white/40 text-xs italic mt-3">
                    “Perfection is not a destination — it is a discipline.”
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Visual Story */}
            <div className={`relative h-[700px] lg:h-[800px] rounded-3xl overflow-hidden transition-all duration-1500 delay-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
              {/* Background Layer */}
              <div className="absolute inset-0">
                <img
                  src={ASSETS.about.interior}
                  alt="Élan Interior"
                  className="w-full h-full object-cover opacity-30 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/70" />
              </div>

              {/* Floating Images */}
              <div className="absolute top-8 left-8 w-[60%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <img
                  src={ASSETS.about.exterior}
                  alt="Exterior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
                <p className="absolute bottom-6 left-6 text-white/90 text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  Arrival
                </p>
              </div>

              <div className="absolute bottom-8 right-8 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <img
                  src={ASSETS.about.teamAction}
                  alt="Culinary Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
                <p className="absolute bottom-6 left-6 text-white/90 text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  Craft
                </p>
              </div>

              {/* Center Decorative Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/05 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Achievements - Glass Cards */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1500 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-700"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Icon className="w-10 h-10 text-white/40 mb-6 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                  <h4 className="text-5xl font-light text-white mb-3 tracking-tight">{item.value}</h4>
                  <p className="text-xs text-white/50 tracking-[0.3em] uppercase">{item.label}</p>
                </div>
              );
            })}
          </div>

          {/* Timeline - Minimal & Elegant */}
          <div className={`mt-40 transition-all duration-1500 delay-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Journey</h3>
              <p className="text-white/50 tracking-wider">Moments that define us</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/20 hidden md:block" />

              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-center mb-20 last:mb-0 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 hidden md:block" />
                  <div className="relative flex items-center justify-center w-full md:w-auto">
                    <div className="absolute w-full md:w-96 h-px bg-white/10 hidden md:block" />
                    <div className="relative z-10 w-20 h-20 rounded-full bg-black border border-white/30 flex items-center justify-center text-white text-sm font-light tracking-wider">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center md:justify-start">
                    <div className={`max-w-sm bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-700 ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                      <h4 className="text-xl font-light text-white mb-2 tracking-wide">{milestone.title}</h4>
                      <p className="text-white/60 text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default About;