import { useState, useEffect } from "react";
import { ASSETS } from "../constants";
import { ChefHat, Leaf, Flame, Wine, Sparkles, Award, Beef, Fish } from "lucide-react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("appetizers");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        const rect = menuSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: "appetizers", label: "Appetizers", icon: Sparkles },
    { id: "mains", label: "Main Courses", icon: ChefHat },
    { id: "desserts", label: "Desserts", icon: Award },
    { id: "drinks", label: "Cocktails", icon: Wine }
  ];

  // Pricing and tags for each item
  const menuEnhanced = {
    appetizers: ASSETS.menu.appetizers.map((item, idx) => ({
      ...item,
      price: ["38", "42", "34"][idx],
      subtitle: [
        "Sea Urchin Coral & Black Rice Crisp",
        "Slow-Cooked Egg Yolk",
        "Coconut-Lemongrass Cream & Mango"
      ][idx],
      tags: [
        ["Signature", "Seafood"],
        ["Premium", "Raw"],
        ["Gluten-Free"]
      ][idx],
      spiceLevel: [0, 0, 1][idx]
    })),
    mains: ASSETS.menu.mains.map((item, idx) => ({
      ...item,
      price: ["68", "92", "58", "54", "62"][idx],
      subtitle: [
        "Red Wine Air & Roasted Vegetables",
        "Scallop & Rich Jus",
        "Beetroot & Morello Cherry",
        "Avocado Cream & Black Coral",
        "Ibérico Ham & Yuzu Veal Jus"
      ][idx],
      tags: [
        ["Signature"],
        ["Premium", "Chef's Choice"],
        ["Signature"],
        ["Seafood", "Gluten-Free"],
        ["Premium", "Seafood"]
      ][idx],
      spiceLevel: [1, 0, 0, 2, 0][idx]
    })),
    desserts: ASSETS.menu.desserts.map((item, idx) => ({
      ...item,
      price: ["18", "20", "18"][idx],
      subtitle: [
        "Aerated Mousse",
        "Strawberry & Liquorice",
        "Frozen Sorbet"
      ][idx],
      tags: [
        ["Signature"],
        ["Rich"],
        ["Gluten-Free", "Signature"]
      ][idx],
      spiceLevel: 0
    })),
    drinks: ASSETS.menu.drinks.map((item, idx) => ({
      ...item,
      price: ["22", "20", "24"][idx],
      subtitle: [
        "Signature Cocktail",
        "House Special",
        "Premium Cocktail"
      ][idx],
      tags: [
        ["Signature", "Smoked"],
        ["Classic"],
        ["Premium", "Aged"]
      ][idx],
      spiceLevel: 0
    }))
  };

  const currentItems = menuEnhanced[activeCategory];

  const getSpiceIndicator = (level) => {
    if (level === 0) return null;
    return (
      <div className="flex gap-1">
        {[...Array(level)].map((_, i) => (
          <Flame key={i} className="w-3 h-3 text-orange-400" />
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="relative w-full bg-black text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-white rounded-full blur-[120px]" />
      </div>

      <div className="relative py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">Culinary Excellence</h3>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white mb-6">
              Our <span className="font-serif italic">Menu</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              A curated selection of Mediterranean-inspired dishes, crafted with passion and precision
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-8" />
          </div>

          {/* Category Navigation */}
          <div className={`flex flex-wrap justify-center gap-4 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative px-8 py-4 rounded-full border transition-all duration-500 flex items-center gap-3 ${
                    activeCategory === cat.id
                      ? 'bg-white text-black border-white shadow-lg shadow-white/20'
                      : 'bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/40'
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-transform duration-500 ${activeCategory === cat.id ? 'rotate-12 scale-110' : 'group-hover:scale-110'}`} />
                  <span className="text-sm tracking-wider font-light">{cat.label}</span>
                  {activeCategory === cat.id && (
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-xl -z-10 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Menu Items Grid */}
          <div className={`grid md:grid-cols-2 ${currentItems.length > 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-3'} gap-8 mb-20`}>
            {currentItems.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-700 hover:shadow-2xl hover:shadow-white/10 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/30 rounded-full text-xs text-white tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full">
                      <span className="text-black font-light text-lg">${item.price}</span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center transition-all duration-500 p-6 ${
                    hoveredItem === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="text-center">
                      <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
                      {getSpiceIndicator(item.spiceLevel) && (
                        <div className="flex justify-center mt-4">
                          {getSpiceIndicator(item.spiceLevel)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-light text-white group-hover:tracking-wider transition-all duration-500 mb-1">
                      {item.name.split(',')[0]}
                    </h3>
                    <p className="text-white/50 text-sm italic">{item.subtitle}</p>
                  </div>
                  
                  <p className="text-white/60 text-sm line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Action Button */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <button className="text-sm text-white/70 hover:text-white tracking-wider transition-colors flex items-center gap-2 group/btn">
                      <span>View Details</span>
                      <span className="transform translate-x-0 group-hover/btn:translate-x-2 transition-transform">→</span>
                    </button>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Wine Pairing Section */}
          {activeCategory === "mains" && (
            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-center mb-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Wine className="w-12 h-12 text-white/40 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-white mb-3">Wine Pairing Available</h3>
              <p className="text-white/60 max-w-2xl mx-auto mb-6">
                Enhance your dining experience with our sommelier-selected wine pairings, 
                carefully curated to complement each dish perfectly.
              </p>
              <button className="px-8 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-500 tracking-wider text-sm">
                View Wine List
              </button>
            </div>
          )}

          {/* Tasting Menu CTA */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <Award className="w-16 h-16 text-white/40 mx-auto mb-6" />
                <h3 className="text-3xl md:text-4xl font-light text-white mb-4">Chef's Tasting Menu</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Experience our culinary journey with a 9-course tasting menu, 
                  featuring seasonal specialties and chef's innovative creations. 
                  Each course is a masterpiece designed to tell a story.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="px-10 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-500 tracking-wider font-light">
                    Reserve Tasting Experience
                  </button>
                  <span className="text-white/60 text-sm">
                    $185 per person • Wine pairing +$95
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dietary Info Footer */}
          <div className={`mt-16 flex flex-wrap justify-center gap-8 text-sm text-white/50 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2">
              <Beef className="w-4 h-4 text-red-400" />
              <span>Premium Cuts</span>
            </div>
            <div className="flex items-center gap-2">
              <Fish className="w-4 h-4 text-blue-400" />
              <span>Fresh Seafood Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Spice Level Indicated</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-white/40" />
              <span>Chef's Signature</span>
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-white/40 text-xs mt-12 tracking-wider">
            Prices in USD • Menu subject to seasonal changes • Please inform us of any dietary restrictions
          </p>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default Menu;