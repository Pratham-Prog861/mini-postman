'use client';

import { Navbar } from '@/components/landing/Navbar';
import { ScrollToTop } from '@/components/landing/ScrollToTop';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import Features from '@/components/Features';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import UseCases from '@/components/UseCases';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <Navbar />
      <ScrollToTop />
      <Hero />
      <ProblemStatement />
      <Features />
      <Process />
      <TechStack />
      <UseCases />
      <Cta />
      <Footer />
    </div>
  );
}
