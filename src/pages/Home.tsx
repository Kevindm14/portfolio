import { TypeAnimation } from 'react-type-animation';
import profilePhoto from '../assets/profile.jpg';
import { skills } from '../utils/skills';
import { Badge } from '../components/Badge/Badge';

export const Home = () => {
    return (
        <>
            <div className="flex flex-col pt-32 pb-52 p-5 sm:px-12 md:px-20 items-center text-white">
                <div className="mb-20">
                    <h1 className="text-green mb-10 lg:w-[700px] mx-auto font-extrabold text-6xl lg:text-9xl uppercase text-center">Hello my name is</h1>
                    <h2 className="text-white lg:mb-0 mx-auto font-extrabold text-5xl uppercase text-center">Kevin Diaz</h2>
                </div>

                <div className="flex flex-col">
                    <TypeAnimation
                        sequence={['WEB DEVELOPER.', 1000 ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className='text-2xl lg:text-4xl font-extrabold text-center'
                    />
                </div>

                <button className='border-2 w-72 mt-5 lg:mt-5 font-medium py-2 hover:text-blue hover:border-white hover:bg-white transition ease-in'>Hit me up</button>
            </div>

            {/* About me */}
            <section className='bg-blue flex flex-col lg:flex-row-reverse lg:justify-between'>
                <div className='text-white px-5 py-60 flex justify-center text-center flex-col items-center lg:w-1/2 lg:px-40'>
                    <h2 className='mb-10 font-extrabold text-green text-6xl uppercase text-center'>About Me</h2>

                    <p className='text-md text-gray'>
                        I am Kevin, a passionate <span className='text-white'>Developer. +2 years of experience</span> using best practices on the web. Used to work with different programming languages.
                        My expertise is developing next-level websites and web applications including full frontend design.
                    </p>
                </div>

                <div className="lg:w-1/2">
                    <img src={profilePhoto} alt="profile" height={1770} width={1328} />
                </div>
            </section>

            {/* Skills - Projects */}
            <section className='bg-blue flex flex-col py-20 lg:flex-row md:px-20 px-5'>
                <div className="py-52 w-full">
                    <h2 className='mb-10 font-extrabold text-green text-6xl uppercase text-center'>SKILLS</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 justify-center gap-10'>
                        {skills.map(({ name, tech }) =>
                            <div className=''>
                                <h3 className='text-gray font-bold mb-2'>{name}</h3>

                                <div className='flex flex-wrap gap-1'>
                                    {tech.map(({ name }) => (
                                        <Badge
                                            className='mb-2'
                                            color='green'
                                            bg='green'>
                                            {name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;