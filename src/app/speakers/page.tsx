import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Speakers from '@/components/Speakers';
import ClientOnly from '@/components/ClientOnly';
import { BackgroundBeams } from '@/components/BackgroundBeams';

export default function SpeakersPage() {
  return (
    <main className="min-h-screen relative">
      <BackgroundBeams />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-16">
          <ClientOnly fallback={<div className="min-h-screen animate-pulse bg-gray-900" />}>
            <Speakers />
          </ClientOnly>
        </div>
        <Footer />
      </div>
    </main>
  );
}
