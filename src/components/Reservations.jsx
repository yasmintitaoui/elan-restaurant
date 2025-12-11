import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, Users, MessageSquare, CheckCircle } from "lucide-react";

const Reservations = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="reservations"
      className="relative w-full bg-black text-white py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Enhanced Ambient Glass Glow */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-white rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white rounded-full blur-[180px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/50 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="tracking-[0.4em] text-xs text-white/50 uppercase mb-4">
            Exclusive Reservations
          </p>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-6">
            Reserve Your Table
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Secure an intimate evening of culinary excellence at ÉLAN — where every detail is crafted for perfection.
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-10" />
        </div>

        {/* Ultra-Glassy Form Container */}
        <div className="relative bg-white/4 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl shadow-black/50">
          {/* Subtle Inner Frosted Overlay */}
          <div className="absolute inset-0 bg-white/5 rounded-3xl -z-10" />

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Full Name */}
            <div className="space-y-3">
              <label className="text-sm tracking-wider text-white/60">Full Name</label>
              <div className="relative group">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 transition group-focus-within:text-white/60" />
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder-white/30 focus:bg-white/10 focus:border-white/30 focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-3">
              <label className="text-sm tracking-wider text-white/60">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 transition group-focus-within:text-white/60" />
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder-white/30 focus:bg-white/10 focus:border-white/30 focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-3">
              <label className="text-sm tracking-wider text-white/60">Phone Number</label>
              <div className="relative group">
                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 transition group-focus-within:text-white/60" />
                <input
                  type="tel"
                  required
                  placeholder="+212 ..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder-white/30 focus:bg-white/10 focus:border-white/30 focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Number of Guests */}
            <div className="space-y-3">
              <label className="text-sm tracking-wider text-white/60">Number of Guests</label>
              <div className="relative group">
                <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 transition group-focus-within:text-white/60" />
                <input
                  type="number"
                  min="1"
                  max="12"
                  required
                  placeholder="2"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder-white/30 focus:bg-white/10 focus:border-white/30 focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Preferred Date */}
            <div className="space-y-3">
              <label className="text-sm tracking-wider text-white/60">Preferred Date</label>
              <div className="relative group">
                <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 transition group-focus-within:text-white/60" />
                <input
                  type="date"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:bg-white/10 focus:border-white/30 focus:outline-none transition-all duration-300 cursor-pointer"
                />
              </div>
            </div>

            {/* Preferred Time */}
            <div className="space-y-3">
              <label className="text-sm tracking-wider text-white/60">Preferred Time</label>
              <div className="relative group">
                <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 transition group-focus-within:text-white/60" />
                <input
                  type="time"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:bg-white/10 focus:border-white/30 focus:outline-none transition-all duration-300 cursor-pointer"
                />
              </div>
            </div>

            {/* Special Requests */}
            <div className="md:col-span-2 space-y-3">
              <label className="text-sm tracking-wider text-white/60">Special Requests (Optional)</label>
              <div className="relative group">
                <MessageSquare className="absolute left-5 top-6 w-5 h-5 text-white/30 transition group-focus-within:text-white/60" />
                <textarea
                  rows="4"
                  placeholder="Dietary restrictions, celebrations, seating preferences..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pl-14 text-white placeholder-white/30 resize-none focus:bg-white/10 focus:border-white/30 focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-8">
              <button
                type="submit"
                className="group relative overflow-hidden px-16 py-5 border border-white/20 rounded-full text-white tracking-widest text-sm font-light transition-all duration-700 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-white/20"
              >
                <span className="relative z-10">Confirm Reservation</span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </button>
            </div>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="mt-12 flex flex-col items-center animate-fade-in">
              <CheckCircle className="w-12 h-12 text-white/80 mb-4" />
              <p className="text-white/90 text-lg tracking-wide">Your reservation request has been sent.</p>
              <p className="text-white/50 text-sm mt-2">We will confirm shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservations;