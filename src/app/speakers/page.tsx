import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Speakers from '@/components/Speakers';
import ClientOnly from '@/components/ClientOnly';
import { BackgroundBeams } from '@/components/BackgroundBeams';
import SectionWrapper from '@/components/SectionWrapper';

export default function SpeakersPage() {
  return (
    <main className="min-h-screen relative bg-black selection:bg-red-600 selection:text-white">
      <BackgroundBeams />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-24 pb-12">
          <ClientOnly fallback={<div className="min-h-screen animate-pulse bg-black" />}>
            <SectionWrapper>
              <Speakers />
            </SectionWrapper>
          </ClientOnly>
        </div>
        <Footer />
      </div>
    </main>
  );
}
