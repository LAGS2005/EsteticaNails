import { Heart, Award, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Heart,
      title: 'Cuidado Personalizado',
      description: 'Cada tratamento é personalizado para atender suas necessidades únicas de beleza e bem-estar.',
    },
    {
      icon: Award,
      title: 'Excelência Premium',
      description: 'Profissionais certificados internacionalmente usando produtos e técnicas de luxo.',
    },
    {
      icon: Users,
      title: 'Comunidade de Beleza',
      description: 'Construindo um círculo de clientes que celebram beleza, confiança e transformação.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nosso Studio de Beleza
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Dedicado a revelar a beleza única de cada cliente através de cuidados especializados
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Image placeholder */}
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 h-80 md:h-96 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Heart className="mx-auto mb-4 opacity-50" size={48} />
              <p className="text-sm">Espaço Premium de Beleza</p>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Sua Beleza é Nossa Paixão
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Com mais de 15 anos de experiência em beleza e bem-estar, nosso studio tem sido refúgio para clientes que buscam transformação e confiança. Acreditamos em potencializar a beleza natural de cada pessoa através de cuidados especializados e produtos premium.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossos ambientes sofisticados combinados com profissionais altamente treinados garantem uma experiência de luxo incomparável, onde sua beleza é celebrada e realçada em um espaço de tranquilidade absoluta.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300">
              Conheça Nossa Jornada
            </button>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50 group cursor-pointer"
            >
              <item.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
