import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Team from '@/components/Team';
import ClientOnly from '@/components/ClientOnly';
import { BackgroundBeams } from '@/components/BackgroundBeams';

export default function TeamPage() {
    return (
        <main className="min-h-screen relative">
            <BackgroundBeams />
            <div className="relative z-10">
                <Navbar />
                <div className="pt-16">
                    <ClientOnly fallback={<div className="min-h-screen animate-pulse bg-gray-900" />}>
                        <Team />
                    </ClientOnly>
                </div>
                <Footer />
            </div>
        </main>
    );
}
