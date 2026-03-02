import { Sparkles, Zap, Wind, Palette, Scissors, Flower2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Tratamentos Faciais',
      description: 'Faciais luxuosos com produtos premium para limpeza profunda, hidratação e rejuvenescimento da pele.',
    },
    {
      icon: Wind,
      title: 'Massagem Terapêutica',
      description: 'Massagens relaxantes e terapêuticas para aliviar tensão e promover bem-estar total.',
    },
    {
      icon: Scissors,
      title: 'Design de Sobrancelhas',
      description: 'Design e modelagem profissional de sobrancelhas para realçar a expressão do rosto.',
    },
    {
      icon: Palette,
      title: 'Maquiagem Profissional',
      description: 'Maquiagem artística personalizada para eventos, fotografias e uso diário com técnicas premium.',
    },
    {
      icon: Flower2,
      title: 'Cuidados das Mãos e Pés',
      description: 'Manicure e pedicure de luxo com esmaltes premium e tratamentos especiais para unhas e pele.',
    },
    {
      icon: Zap,
      title: 'Tratamentos Corporais',
      description: 'Esfoliações, hidratações e peeling para deixar sua pele macia, brilhante e radiante.',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossos Serviços de Beleza
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Cuidados premium e personalizados para realçar sua beleza natural
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              <button className="mt-4 text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-200 flex items-center gap-1 group/btn">
                Saiba Mais →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            Procurando um serviço específico? Crie um tratamento personalizado conosco.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            Marcar Consulta
          </button>
        </div>
      </div>
    </section>
  );
}
