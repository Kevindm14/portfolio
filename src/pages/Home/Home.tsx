import { About, Contact, Hero } from '../../components/sections';

export function Component() {
  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  );
}

Component.displayName = 'Home';
