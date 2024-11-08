import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function EmailCTA() {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(250, 189, 0, 0.1) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Mail className="h-12 w-12 mx-auto mb-6 text-gold-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Ready to Level Up Your GitOps?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Want to take your CD process to the next level with FluxCD and GitOps? Let's talk about how we can transform your infrastructure with production-grade open source solutions.
          </p>

          <a
            href="mailto:goto@gitopsnow.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg font-semibold text-slate-900 hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Contact Us</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}