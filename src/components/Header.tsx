import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GitBranch, ChevronUp } from 'lucide-react';

const menuItems = [
  { 
    label: 'Home', 
    sectionId: 'home'
  },
  { 
    label: 'Solutions', 
    sectionId: 'solutions'
  },
  { 
    label: 'Technology', 
    sectionId: 'technology'
  },
  { 
    label: 'Benefits', 
    sectionId: 'benefits'
  },
  { 
    label: 'FAQ', 
    sectionId: 'faq'
  },
  { 
    label: 'Get Started', 
    sectionId: 'contact'
  }
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 20);
    setShowScrollTop(scrollPosition > window.innerHeight);

    // Update active section based on scroll position
    const sections = menuItems.map(item => document.getElementById(item.sectionId));
    const viewportPosition = scrollPosition + window.innerHeight / 3;

    sections.forEach((section, index) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (viewportPosition >= sectionTop && viewportPosition < sectionBottom) {
          setActiveSection(menuItems[index].sectionId);
        }
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    
    if (section) {
      setIsMobileMenuOpen(false);
      
      setTimeout(() => {
        const headerHeight = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 300);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-2 bg-slate-900/90 backdrop-blur-md' : 'py-4 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between relative z-50">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center space-x-2 group"
              aria-label="GitOpsNow Home"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold-500/20 blur-lg rounded-full group-hover:bg-gold-500/30 transition-colors" />
                <GitBranch className="h-8 w-8 text-gold-400 relative z-10" />
              </div>
              <span className="text-xl font-bold">GitOpsNow</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.sectionId}`}
                  onClick={(e) => scrollToSection(e, item.sectionId)}
                  className={`text-sm transition-colors relative ${
                    activeSection === item.sectionId 
                      ? 'text-gold-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  {activeSection === item.sectionId && (
                    <motion.div 
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-400"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 bg-slate-800/95 backdrop-blur-md rounded-lg overflow-hidden"
              >
                <div className="py-2 space-y-1">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={`#${item.sectionId}`}
                      onClick={(e) => scrollToSection(e, item.sectionId)}
                      className={`block w-full px-4 py-3 transition-colors ${
                        activeSection === item.sectionId
                          ? 'text-gold-400 bg-slate-700/50'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-gold-500 text-slate-900 shadow-lg hover:bg-gold-400 transition-colors z-50 hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}