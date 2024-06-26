import { Container } from '@/components/Container';
import { IconsJS } from '@/components/Icons/IconsJS';
import { IconsLanguages } from '@/components/Icons/IconsLanguages';
import { motion } from 'framer-motion';
import './hero.modules.css';

export const Hero = () => {
  return (
    <section
      id='home'
      className="flex bg-spaceCadet flex-col md:flex-row items-center md:gap-80 h-[900px] justify-center text-white"
    >
      <Container className="flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="mb-32 lg:mb-0 relative">
          <IconsLanguages.Golang className="filter-neon hidden lg:block absolute -top-32 w-16 h-16 lg:w-20 lg:h-20 text-gray" />
          <IconsLanguages.Ruby className="filter-neon hidden lg:block absolute left-64 -top-28 right w-16 h-16 lg:w-20 lg:h-20 text-gray" />
          <IconsJS.ReactJS className="filter-neon hidden lg:block absolute -bottom-40 w-16 h-16 lg:w-20 lg:h-20 text-gray" />
          <IconsJS.NodeJS className="filter-neon hidden lg:block absolute left-64 -bottom-36 right w-16 h-16 lg:w-20 lg:h-20 text-gray" />
          <IconsJS.JS className="filter-neon hidden lg:block absolute left-96 top-20 w-16 h-16 lg:w-20 lg:h-20 text-gray" />

          <h1 className="text-zaffre shadow mx-auto font-extrabold lg:text-2xl">Hola, Soy</h1>
          <h2 className="text-white lg:mb-4 mx-auto font-extrabold text-6xl">
            Kevin <span className="text-zaffre stroke-white shadow">Diaz</span>
          </h2>
          <h3 className="text-2xl lg:text-3xl font-extrabold mb-5">Un Desarrollador Web</h3>

          <a
            href='https://drive.google.com/file/d/1C4sGHiftuzKAcWuAz-Lk7aU4CQ8wz-ph/view'
            target='_blank'
            className="border-2 w-72 font-bold py-2 px-8 rounded-md hover:text-neutrals-900 hover:border-white hover:bg-white transition ease-in"
          >
            Mi Curriculum
          </a>
        </div>

        <div className="relative w-[200px] md:w-[300px] xl:w-[400px] lg:mt-0">
          {/* Rigth */}
          <motion.div
            initial={{ opacity: 0, y: -1000, x: -1000 }}
            animate={{ opacity: 1, y: 0, x: 0, transition: { duration: 1 } }}
            className={`flickering border-4 border-honeyDew w-full h-full md:w-[300px] md:h-[300px] xl:h-[400px] xl:w-[400px] absolute right-5 -top-5 rounded-lg z-20 bg-spaceCadet`}
          />
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            className={`flickering2 border-4 border-zaffre w-full h-full md:w-[300px] md:h-[300px] xl:h-[400px] xl:w-[400px] absolute right-10 -top-10 rounded-lg z-10`}
          />

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 1000, x: 1000 }}
            animate={{ opacity: 1, y: 0, x: 0, transition: { duration: 1 } }}
            className={`flickering border-4 border-honeyDew w-full h-full md:w-[300px] md:h-[300px] xl:h-[400px] xl:w-[400px] absolute left-5 -bottom-5 rounded-lg z-20 bg-spaceCadet`}
          />
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            className={`flickering2 border-4 border-zaffre w-full h-full md:w-[300px] md:h-[300px] xl:h-[400px] xl:w-[400px] absolute left-10 -bottom-10 rounded-lg z-10`}
          />

          <img className="w-full md:w-[400px] rounded-3xl relative z-30" src="/profile.webp" alt="profile" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
