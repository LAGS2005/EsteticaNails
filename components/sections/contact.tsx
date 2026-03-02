import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av. Beleza Luxo 456, Bairro Premium, SP 01234',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (11) 4001-2000',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@studiobelelza.com.br',
    },
    {
      icon: Clock,
      title: 'Horários',
      content: 'Seg-Sex: 9h-20h, Sáb: 10h-18h, Dom: 10h-16h',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Visite-nos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Venha descobrir um mundo de beleza e luxo. Estamos prontos para recebê-lo.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center"
            >
              <info.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
              <p className="text-sm text-muted-foreground">{info.content}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 h-80 md:h-96 flex items-center justify-center border border-border">
            <div className="text-center text-muted-foreground">
              <MapPin className="mx-auto mb-4 opacity-50" size={48} />
              <p className="text-sm">Interactive Map</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Assunto</label>
                <input
                  type="text"
                  placeholder="Como podemos ajudar?"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                <textarea
                  placeholder="Sua mensagem..."
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
