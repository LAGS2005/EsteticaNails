import Navbar from '@/components/navbar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Gallery from '@/components/sections/gallery';
import Services from '@/components/sections/services';
import Team from '@/components/sections/team';
import Appointment from '@/components/sections/appointment';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Team />
      <Appointment />
      <Contact />
      <Footer />
    </main>
  );
}
