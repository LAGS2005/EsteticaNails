'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export default function Appointment() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'facial',
    date: '',
    time: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const services = [
    { value: 'facial', label: 'Tratamento Facial' },
    { value: 'massage', label: 'Massagem Terapêutica' },
    { value: 'eyebrow', label: 'Design de Sobrancelhas' },
    { value: 'makeup', label: 'Maquiagem Profissional' },
    { value: 'nails', label: 'Manicure/Pedicure' },
    { value: 'hair', label: 'Tratamento Capilar' },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'general-checkup',
        date: '',
        time: '',
      });
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Agende seu Tratamento
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Reserve seu momento de luxo e transformação com nossos profissionais
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
            <CheckCircle className="text-green-600" size={24} />
            <div>
              <p className="font-semibold text-green-900">Agendamento Confirmado!</p>
              <p className="text-sm text-green-700">Entraremos em contato em breve para confirmar seu tratamento.</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-background rounded-lg p-6 sm:p-8 border border-border shadow-sm">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Nome Completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="João Silva"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Endereço de E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="joao@exemplo.com"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Número de Telefone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+55 (11) 0000-0000"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Serviço</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Data Preferida</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {errors.date && <p className="text-sm text-destructive mt-1">{errors.date}</p>}
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Horário Preferido</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {errors.time && <p className="text-sm text-destructive mt-1">{errors.time}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Agendar Tratamento
          </button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Entraremos em contato em breve para confirmar e preparar seu momento especial.
          </p>
        </form>
      </div>
    </section>
  );
}
