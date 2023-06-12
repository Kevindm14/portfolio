import heroDevices from '../assets/hero-devices.svg'
import { TypeAnimation } from 'react-type-animation';
import profilePhoto from '../assets/profile.jpg'
import { skills } from '../utils/skills';
import { Badge } from '../components/Badge/Badge';

export const Home = () => {
    return (
        <>
            <div className="flex flex-col gap-20 p-5 items-center text-white">
                <div className="max-w max-w-2xl flex flex-col gap-10">
                    <div>
                        <h1 className="text-green mb-20 mx-auto font-extrabold text-6xl uppercase text-center">Hello my name is</h1>

                        <TypeAnimation
                            sequence={['Kevin Diaz | Web Developer.', 1000 ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            className='text-xl font-bold'
                        />
                        <p className='text-sm mt-2 text-light'>Web developer +2 years of experience using best practices on the web. Used to work with different programming languages.</p>
                    </div>

                    <button className='border-2 font-medium py-2 hover:text-blue hover:border-white hover:bg-white transition ease-in'>Hit me up</button>
                </div>

                <img src={heroDevices} alt="Hero Devices" className='mb-20' />
            </div>

            {/* About me */}
            <section className='bg-blue flex flex-col'>
                <div className='text-white px-5 py-20 flex justify-center text-center flex-col items-center'>
                    <h2 className='mb-10 font-extrabold text-green text-6xl uppercase text-center'>About Me</h2>

                    <p className='text-sm text-gray'>
                        I am Kevin, a passionate <span className='text-white'>Developer</span>. My expertise is developing next-level websites and web applications including full frontend design.
                    </p>
                </div>
                <img src={profilePhoto} alt="profile" />
            </section>

            {/* Skills */}
            <section className='bg-blue flex flex-col py-20'>
                <h2 className='mb-10 font-extrabold text-green text-6xl uppercase text-center'>SKILLS</h2>

                <div className='flex flex-col gap-10'>
                    {skills.map(({ name, tech }) =>
                        <div className='px-5'>
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
            </section>
        </>
    )
}

export default Home;