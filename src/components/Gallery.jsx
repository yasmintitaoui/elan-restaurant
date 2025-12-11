import { useState, useEffect } from "react";
import { ASSETS } from "../constants";
import { Camera, Utensils, Users, Sparkles, X } from "lucide-react";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        const rect = gallerySection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryItems = [
    {
      image: ASSETS.gallery[0],
      title: "Dining Experience",
      subtitle: "Guests enjoying our culinary artistry",
      category: "Dining",
      icon: Users
    },
    {
      image: ASSETS.gallery[1],
      title: "Elegant Setup",
      subtitle: "Bar view with impeccable table settings",
      category: "Ambiance",
      icon: Sparkles
    },
    {
      image: ASSETS.gallery[2],
      title: "Culinary Mastery",
      subtitle: "Chef at work in our modern kitchen",
      category: "Kitchen",
      icon: Utensils
    },
    {
      image: ASSETS.gallery[3],
      title: "Fire & Passion",
      subtitle: "The art of perfect execution",
      category: "Kitchen",
      icon: Utensils
    },
    {
      image: ASSETS.gallery[4],
      title: "Private Celebrations",
      subtitle: "Intimate dining for special occasions",
      category: "Events",
      icon: Sparkles
    },
    {
      image: ASSETS.gallery[5],
      title: "Seasonal Elegance",
      subtitle: "Special events and decorations",
      category: "Events",
      icon: Camera
    }
  ];

  return (
    <section id="gallery" className="relative w-full bg-black text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-white rounded-full blur-[120px]" />
      </div>

      <div className="relative py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">Visual Journey</h3>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white mb-6">
              Our <span className="font-serif italic">Gallery</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Step inside Élan and discover the artistry, ambiance, and passion that define every moment
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-8" />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedImage(index)}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${index % 3 === 1 ? 'md:row-span-2' : ''}`}
                  style={{ 
                    transitionDelay: `${300 + index * 100}ms`,
                    height: index % 3 === 1 ? '600px' : '290px'
                  }}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/30 rounded-full">
                      <Icon className="w-3 h-3 text-white" />
                      <span className="text-xs text-white tracking-wider">{item.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ${
                    hoveredIndex === index ? 'translate-y-0' : 'translate-y-4'
                  }`}>
                    <h3 className="text-xl md:text-2xl font-light text-white mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className={`text-white/80 text-sm transition-all duration-500 ${
                      hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Zoom Icon */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <Camera className="w-6 h-6 text-white" />
                  </div>

                  {/* Border Effect */}
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-2xl" />
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-white/60 mb-6">
              Follow us on Instagram for daily inspiration and behind-the-scenes moments
            </p>
            <button className="px-10 py-4 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-500 tracking-wider text-sm font-light">
              @elan_casablanca
            </button>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-6xl w-full">
            <img
              src={galleryItems[selectedImage].image}
              alt={galleryItems[selectedImage].title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-6">
              <h3 className="text-2xl font-light text-white mb-2">
                {galleryItems[selectedImage].title}
              </h3>
              <p className="text-white/60">
                {galleryItems[selectedImage].subtitle}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage - 1 + galleryItems.length) % galleryItems.length);
            }}
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <span className="text-white text-2xl">←</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage + 1) % galleryItems.length);
            }}
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <span className="text-white text-2xl">→</span>
          </button>
        </div>
      )}

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default Gallery;