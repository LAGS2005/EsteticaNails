'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Serviços', href: '#services' },
    { label: 'Profissionais', href: '#team' },
    { label: 'Agendamento', href: '#appointment' },
    { label: 'Contato', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                HC
              </div>
              <span className="hidden sm:inline font-bold text-foreground text-lg">HealthCare</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleScroll('#appointment')}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Agende Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleScroll(link.href)}
                  className="block w-full text-left px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleScroll('#appointment')}
                className="w-full mt-4 bg-primary text-primary-foreground px-3 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                Agende Agora
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
