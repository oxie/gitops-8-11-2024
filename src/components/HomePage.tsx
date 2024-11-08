import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Tools from './Tools';
import Benefits from './Benefits';
import FAQ from './FAQ';
import EmailCTA from './EmailCTA';
import Footer from './Footer';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <section id="solutions">
        <Services />
      </section>
      <section id="technology">
        <Tools />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <FAQ />
      <section id="contact">
        <EmailCTA />
      </section>
      <Footer />
    </main>
  );
}