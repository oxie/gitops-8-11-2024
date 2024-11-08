import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Zap, Cloud, Lock, Workflow, Terminal } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Industry-Leading Open Source",
      description: "Implement proven solutions like FluxCD, Crossplane, and Backstage for robust, scalable infrastructure",
      stats: ["Proven Solutions", "Industry Standard", "Production Ready"]
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Production-Grade Excellence",
      description: "Build resilient, highly available systems with advanced security and compliance automation",
      stats: ["High Availability", "Zero Trust", "Full Compliance"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Architecture Mastery",
      description: "Unified control plane for seamless multi-cloud operations and resource management",
      stats: ["Cloud Agnostic", "Centralized Control", "Cost Optimization"]
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Platform Engineering Focus",
      description: "Streamlined developer experience with automated workflows and standardized governance",
      stats: ["Rapid Deployment", "Standardization", "Self-Service"]
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Why Choose GitOpsNOW
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Elevate your infrastructure with production-grade solutions that set new standards in reliability, security, and automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative h-full p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-gold-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-gold-500/10 to-gold-600/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-gold-400">{benefit.icon}</div>
                </div>

                <h3 className="text-xl font-bold mb-4 min-h-[56px] flex items-center">
                  {benefit.title}
                </h3>
                <p className="text-slate-300 mb-6 min-h-[80px]">
                  {benefit.description}
                </p>

                <div className="space-y-3">
                  {benefit.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-slate-400"
                    >
                      <Terminal className="h-4 w-4 mr-2 text-gold-400" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}