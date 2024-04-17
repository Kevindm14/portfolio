import { Navigation } from '../../components';
import { About, Hero } from '../../components/sections';

export function Component() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
    </>
  );
}

Component.displayName = 'Home';
