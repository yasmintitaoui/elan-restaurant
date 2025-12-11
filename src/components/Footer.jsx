import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Subtle Glassy Ambient Orbs (pure white, very low opacity) */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-32 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">

          {/* Brand & Tagline */}
          <div className="space-y-8 md:col-span-1">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-white">
                ÉLAN
              </h2>
              <p className="mt-2 text-white/60 tracking-widest text-sm uppercase">
                Fine Dining • Casablanca
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Where timeless elegance meets culinary artistry in perfect clarity.
            </p>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-8">
            <h3 className="text-xl font-light tracking-wide text-white/90">Visit Us</h3>
            <div className="space-y-4 text-white/60">
              <p className="flex items-center gap-3 hover:text-white transition">
                <MapPin className="w-5 h-5" />
                123 Ocean Drive, Casablanca, Morocco
              </p>
              <p className="flex items-center gap-3 hover:text-white transition">
                <Phone className="w-5 h-5" />
                +212 6 12 34 56 78
              </p>
              <p className="flex items-center gap-3 hover:text-white transition">
                <Mail className="w-5 h-5" />
                reservations@elan.ma
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-sm tracking-wider text-white/80 uppercase mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Opening Hours
              </h4>
              <div className="text-white/50 text-sm space-y-1">
                <p>Tuesday – Sunday: 6:00 PM – 11:00 PM</p>
                <p>Monday: Closed</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h3 className="text-xl font-light tracking-wide text-white/90">Discover</h3>
            <ul className="space-y-3 text-white/60">
              {['About', 'Menu', 'Gallery', 'Reservations'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Follow */}
          <div className="space-y-8">
            <h3 className="text-xl font-light tracking-wide text-white/90">Connect</h3>
            <div className="flex gap-6">
              {[
                { Icon: Instagram, label: "Instagram", href: "https://instagram.com/elan_casablanca" },
                { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group"
                >
                  <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-white/30 hover:bg-white/10 hover:scale-110 hover:shadow-2xl hover:shadow-white/10">
                    <Icon className="w-6 h-6 text-white/70 group-hover:text-white transition" />
                  </div>
                </a>
              ))}
            </div>

            <p className="text-xs text-white/40">
              Follow for exclusive moments behind the glass.
            </p>
          </div>
        </div>

        {/* Glassy Divider & Copyright */}
        <div className="mt-24 relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-px w-32 h-px bg-white/40 blur-sm" />

          <div className="pt-12 text-center">
            <p className="text-white/30 text-sm tracking-wider">
              © {currentYear} ÉLAN Casablanca. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;