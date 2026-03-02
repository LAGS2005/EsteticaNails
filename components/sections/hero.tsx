'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow = (props: ArrowProps) => (
  <button
    {...props}
    className="slick-prev group"
    type="button"
  >
    <ChevronLeft size={20} />
  </button>
);

const NextArrow = (props: ArrowProps) => (
  <button
    {...props}
    className="slick-next group"
    type="button"
  >
    <ChevronRight size={20} />
  </button>
);

const slides = [
  {
    id: 1,
    title: 'Transformação Luxo',
    subtitle: 'Experimente beleza refinada',
    image: 'linear-gradient(135deg, #d4a5a5 0%, #9b6b6b 100%)',
    color: 'from-rose-300 to-rose-700',
  },
  {
    id: 2,
    title: 'Cuidados Premium',
    subtitle: 'Tratamentos exclusivos e personalizados',
    image: 'linear-gradient(135deg, #e8c4a0 0%, #c4a080 100%)',
    color: 'from-amber-200 to-amber-600',
  },
  {
    id: 3,
    title: 'Beleza em Harmonia',
    subtitle: 'Realçe sua beleza natural',
    image: 'linear-gradient(135deg, #d9b8a3 0%, #b8927a 100%)',
    color: 'from-yellow-100 to-yellow-700',
  },
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section id="home" className="relative pt-16 overflow-hidden">
      <Slider {...settings} className="hero-carousel">
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div
              className="h-96 sm:h-[500px] w-full relative flex items-center justify-center"
              style={{ background: slide.image }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 text-center text-white px-4 max-w-2xl animate-fade-in">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-8 text-balance">
                  {slide.subtitle}
                </p>
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                  Descobrir Beleza
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Quick Stats */}
      <div className="bg-background border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">2000+</div>
              <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">12+</div>
              <p className="text-sm text-muted-foreground">Profissionais Certificados</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10</div>
              <p className="text-sm text-muted-foreground">Serviços Disponíveis</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">15</div>
              <p className="text-sm text-muted-foreground">Anos de Excelência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
