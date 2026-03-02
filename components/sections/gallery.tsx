'use client';

import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  };

  const galleryItems = [
    {
      id: 1,
      title: 'Transformação Facial',
      category: 'Facial',
      image: 'linear-gradient(135deg, #d4a5a5 0%, #9b6b6b 100%)',
    },
    {
      id: 2,
      title: 'Tratamento Capilar',
      category: 'Cabelo',
      image: 'linear-gradient(135deg, #e8c4a0 0%, #c4a080 100%)',
    },
    {
      id: 3,
      title: 'Design de Sobrancelha',
      category: 'Sobrancelha',
      image: 'linear-gradient(135deg, #d9b8a3 0%, #b8927a 100%)',
    },
    {
      id: 4,
      title: 'Maquiagem Artística',
      category: 'Maquiagem',
      image: 'linear-gradient(135deg, #d4a5a5 0%, #9b6b6b 100%)',
    },
    {
      id: 5,
      title: 'Manicure Premium',
      category: 'Unhas',
      image: 'linear-gradient(135deg, #e8c4a0 0%, #c4a080 100%)',
    },
    {
      id: 6,
      title: 'Spa Corporal',
      category: 'Corpo',
      image: 'linear-gradient(135deg, #d9b8a3 0%, #b8927a 100%)',
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Galeria de Transformações
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Veja os resultados incríveis de nossos tratamentos premium
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex gap-4">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                >
                  <div className="group relative h-80 rounded-lg overflow-hidden bg-gradient-to-br from-primary/40 to-secondary/40">
                    <div
                      className="absolute inset-0"
                      style={{ background: item.image }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <span className="text-xs font-semibold text-primary-foreground/80 mb-2 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-primary-foreground text-balance">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Info Text */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-6">
            Cada transformação conta uma história de confiança e beleza realçada
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            Agende Sua Sessão
          </button>
        </div>
      </div>
    </section>
  );
}
