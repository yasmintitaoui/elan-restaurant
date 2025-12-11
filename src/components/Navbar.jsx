import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle blur + border when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reservations", href: "#reservations" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-700 ease-out
        ${scrolled 
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/40" 
          : "bg-transparent border-b border-transparent"
        }
      `}
    >
      <div className="max-w-[1600px] mx-auto px-8 py-5 flex justify-between items-center">

        {/* LOGO - Much smaller, elegant, clickable */}
        <button
          onClick={scrollToTop}
          className="group relative cursor-pointer transition-all duration-500 hover:scale-110"
          aria-label="Go to home"
        >
          <h1 className="
            text-2xl md:text-3xl 
            font-serif 
            tracking-[0.35em] 
            text-white 
            leading-none
          ">
            ÉLAN
          </h1>
          {/* Subtle white shimmer on hover */}
          <span className="
            absolute inset-0 
            text-white/0 
            bg-clip-text 
            bg-gradient-to-r from-transparent via-white/30 to-transparent 
            -translate-x-full 
            group-hover:translate-x-full 
            transition-transform duration-1200
          ">
            ÉLAN
          </span>
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                relative 
                text-white/60 
                hover:text-white 
                text-xs 
                tracking-[0.3em] 
                font-light 
                uppercase 
                transition-all duration-500 
                group
              "
            >
              {link.name}
              
              {/* Centered elegant underline */}
              <span className="
                absolute -bottom-1.5 left-1/2 -translate-x-1/2 
                w-0 h-px bg-white 
                group-hover:w-full 
                transition-all duration-700 ease-out
              " />
              {/* Soft glow trail */}
              <span className="
                absolute -bottom-1.5 left-1/2 -translate-x-1/2 
                w-0 h-px bg-white/40 blur-sm 
                group-hover:w-12 
                transition-all duration-700
              " />
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white/80 hover:text-white transition-all duration-300 p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* MOBILE FULL-SCREEN GLASSY MENU */}
      {open && (
        <div className="
          lg:hidden 
          fixed inset-x-0 top-16 
          h-[calc(100vh-4rem)] 
          bg-black/95 backdrop-blur-3xl 
          border-t border-white/10 
          flex flex-col items-center justify-center 
          gap-12
          animate-fade-in
        ">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                text-4xl md:text-5xl 
                font-light 
                tracking-[0.3em] 
                text-white/80 
                hover:text-white 
                transition-all duration-500 
                hover:scale-110
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;