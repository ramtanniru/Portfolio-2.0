import Image from 'next/image';
import './globals.css';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import GetStarted from '@/components/GetStarted';
export default function Home() {
  return (
    <main>
      <Hero/>
      <Skills/>
      <GetStarted/>
    </main>
  );
}
