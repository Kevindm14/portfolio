import { Navigation } from '@/components';
import { About, Contact, Hero } from '@/components/sections';

export function Component() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Contact />
    </>
  );
}

Component.displayName = 'Home';
