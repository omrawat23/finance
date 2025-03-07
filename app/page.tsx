import {NavbarDemo} from '@/components/layout/Header';
import Hero from '@/components/Hero';
import {Footer} from '@/components/layout/Footer';
import { FinalCTA } from '@/components/FinalCTA';
import { InfiniteScroll } from '@/components/infinite-scroll';
import Marquee from '@/components/Marquee';
import { Services } from '@/components/Services';
import { Features2 } from '@/components/Features';
import { CaseStudy } from '@/components/CaseStudy';

export default function App() {
  return (
    <div className="text-white font-space relative min-h-screen">
      <div className="relative z-10">
        <div className="custom-cursor"/>
        <Hero />
        {/* <Services /> */}
        {/* <InfiniteScroll /> */}
        {/* <Marquee /> */}
        {/* <FinalCTA /> */}
        <Features2 />
        <CaseStudy />
        <Footer />
      </div>
    </div>
  );
}