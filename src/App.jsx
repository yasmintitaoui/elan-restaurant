import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App font-sans text-gray-900 bg-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Menu Section */}
      <Menu />

      {/* Gallery Section */}
      <Gallery />
      
      {/* Reservations Section */}
      <Reservations />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
