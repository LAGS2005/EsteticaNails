import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground text-primary flex items-center justify-center font-bold">
                SB
              </div>
              <span className="font-bold text-lg">Studio Beleza</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Oferecendo luxo e transformação em beleza desde 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Profissionais
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Tratamentos Faciais
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Massagem Terapêutica
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Maquiagem Profissional
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cuidados de Beleza
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; {currentYear} Studio de Beleza Luxo. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Termos de Serviço
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
