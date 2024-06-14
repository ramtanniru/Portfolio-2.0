import Image from 'next/image';
import './globals.css';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import GetStarted from '@/components/GetStarted';
import Coding from '@/components/Coding';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
export default function Home() {
  return (
    <main>
      <Hero/>
      <Skills/>
      <GetStarted/>
      <Coding/>
      <Projects/>
      <Achievements/>
      <Contact/>
    </main>
  );
}
