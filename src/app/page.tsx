import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Theme from '@/components/Theme';
import Footer from '@/components/Footer';

import Timeline from '@/components/Timeline';
import Sponsors from '@/components/Sponsors';
import ClientOnly from '@/components/ClientOnly';
import { BackgroundBeams } from '@/components/BackgroundBeams';
import SectionWrapper from '@/components/SectionWrapper';
import CountdownTimer from '@/components/CountdownTimer';
import ImageGallery from '@/components/ImageGallery';
import FAQ from '@/components/FAQ';
import Registration from '@/components/Registration';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black selection:bg-red-600 selection:text-white">
      <BackgroundBeams />
      <div className="relative z-10 flex flex-col items-center">
        <Navbar />
        <Hero />

        <SectionWrapper delay={0.2} className="w-full -mt-20 md:-mt-40 mb-20">
          <CountdownTimer />
        </SectionWrapper>

        <SectionWrapper className="w-full">
          <About />
        </SectionWrapper>

        <SectionWrapper className="w-full">
          <Theme />
        </SectionWrapper>

        <ClientOnly>
          <SectionWrapper className="w-full">
            <Timeline />
          </SectionWrapper>

          <SectionWrapper className="w-full">
            <ImageGallery />
          </SectionWrapper>

          <SectionWrapper className="w-full">
            <FAQ />
          </SectionWrapper>

          <SectionWrapper className="w-full">
            <Registration />
          </SectionWrapper>

          <SectionWrapper className="w-full">
            <Sponsors />
          </SectionWrapper>

          <SectionWrapper className="w-full">
            <Contact />
          </SectionWrapper>
        </ClientOnly>

        <Footer />
      </div>
    </main>
  );
}
