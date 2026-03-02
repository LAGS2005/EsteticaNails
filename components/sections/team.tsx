import { Mail, Phone } from 'lucide-react';

export default function Team() {
  const team = [
    {
      id: 1,
      name: 'Mariana Silva',
      specialization: 'Esteticista Sênior',
      bio: 'Chefe de estética com 16 anos em cuidados faciais e corporais premium',
      initials: 'MS',
    },
    {
      id: 2,
      name: 'Ana Carolina Souza',
      specialization: 'Especialista em Sobrancelhas',
      bio: 'Design de sobrancelhas e micropigmentação com técnica internacional',
      initials: 'AC',
    },
    {
      id: 3,
      name: 'Beatriz Costa',
      specialization: 'Massoterapeuta',
      bio: 'Massagem terapêutica e relaxamento com 12 anos de experiência',
      initials: 'BC',
    },
    {
      id: 4,
      name: 'Gabriela Mendes',
      specialization: 'Maquiadora Profissional',
      bio: 'Maquiagem artística para eventos, casamentos e sessões fotográficas',
      initials: 'GM',
    },
    {
      id: 5,
      name: 'Jessica Oliveira',
      specialization: 'Terapeuta Capilar',
      bio: 'Especialista em tratamentos capilares de luxo e design de cortes',
      initials: 'JO',
    },
    {
      id: 6,
      name: 'Carolina Martins',
      specialization: 'Podóloga e Manicure',
      bio: 'Especialista em cuidados de unhas e pés com técnicas premium',
      initials: 'CM',
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Conheça Nossos Profissionais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Especialistas certificados dedicados a sua transformação e beleza
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold">
                  {member.initials}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{member.specialization}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>

                {/* Contact Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <button className="flex-1 flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 py-2 hover:bg-muted rounded">
                    <Mail size={16} />
                    <span className="text-xs">E-mail</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 py-2 hover:bg-muted rounded">
                    <Phone size={16} />
                    <span className="text-xs">Ligar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
