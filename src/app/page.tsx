import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Theme from '@/components/Theme';
import Footer from '@/components/Footer';

import Timeline from '@/components/Timeline';
import Sponsors from '@/components/Sponsors';
import ClientOnly from '@/components/ClientOnly';
import { BackgroundBeams } from '@/components/BackgroundBeams';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundBeams />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Theme />
        <ClientOnly>
          <Timeline />
          <Sponsors />
        </ClientOnly>
        <Footer />
      </div>
    </main>
  );
}
