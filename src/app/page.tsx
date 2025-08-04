import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';
import Pricing from '@/components/pricing';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import { VantaBackground } from '@/components/vanta-background';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative">
      <VantaBackground />
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
