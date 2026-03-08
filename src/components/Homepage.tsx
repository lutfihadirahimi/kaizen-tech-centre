import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import WhyUs from './WhyUs';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyUs />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;