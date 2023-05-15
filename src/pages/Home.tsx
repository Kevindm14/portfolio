import heroDevices from '../assets/hero-devices.svg'
import GitFork from '../assets/git_fork.svg'
import { TypeAnimation } from 'react-type-animation';

export const Home = () => {
    const date = new Date();
    const padToDigits = (date: number) => String(date).padStart(2, '0');

    const dateNow = `${padToDigits(date.getHours())}:${padToDigits(date.getMinutes())}`

    return (
        <>
            <div className="flex justify-between max-w-max py-40 text-white px-40">
                <div className="max-w max-w-2xl flex flex-col space-y-10">
                    <div>
                        <h1 className="text-[#5BE9B9] mb-2">Hello my name is</h1>

                        <TypeAnimation
                            sequence={['Kevin Diaz | Web Developer.', 1000 ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '2.3em', display: 'inline-block' }}
                        />
                        <p className=''>Web developer with more than 2 years of experience using best practices on the web. Used to work with different programming languages.</p>
                    </div>

                    <button className='w-48 border-[#5BE9B9] border-2 rounded py-3'>Contact Me</button>
                </div>

                <img src={heroDevices} className='w-1/2' alt="Hero Devices" />
            </div>

            <div className='bg-[#141C3A] p-40'>
                <div className="bg-black rounded-md p-9 shadow-lg term">
                    <div className='flex space-x-1 mb-10'>
                        <span className='bg-red-500 rounded-full w-5 h-5'></span>
                        <span className='bg-yellow-500 rounded-full w-5 h-5'></span>
                        <span className='bg-green-500 rounded-full w-5 h-5'></span>
                    </div>

                    <div className='text-white'>
                        <div className='flex mb-3 text-sm content-center'>
                            <span className='bg-blue-500 px-3 rounded-l-md'>About Me </span>
                            <img src={GitFork} className='w-5 bg-slate-500' alt="gitFork" />
                            <span className='px-3'>Main</span>
                            <span>{dateNow}</span>
                        </div>
                        <p className='text-sm mb-10'>
                            <span className='text-yellow-300 mr-2'>$</span>
                            <TypeAnimation
                                sequence={[
                                    'Hello, I had been working as software developer a three years ago.', 1000, // Waits 1s
                                    'I enjoy built web applications dynamically. My goal is to always create products that provide performance experiences to innovative and practical solutions.', 2000, // Waits 1s
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '1em', display: 'inline-block' }}
                            />
                        </p>

                        <div className='flex mb-3 text-sm content-center'>
                            <span className='bg-yellow-600 px-3 rounded-l-md'>Skills </span>
                            <img src={GitFork} className='w-5 bg-slate-500' alt="gitFork" />
                            <span className='px-3'>Main</span>
                            <span>{dateNow}</span>
                        </div>
                        <ul className='text-sm flex flex-col space-y-3'>
                            <li><span className='text-yellow-300'>$</span> Cloud Providers: Google Cloud</li>
                            <li><span className='text-yellow-300'>$</span> JavaScript: Bootstrap, TailwindCSS, Jest, ReactJS, TypeScript, StimulusJS, Playwright.</li>
                            <li><span className='text-yellow-300'>$</span> Container Orchestration: Docker.</li>
                            <li><span className='text-yellow-300'>$</span> CI/CD Tools: GitHub Actions.</li>
                            <li><span className='text-yellow-300'>$</span> Project Management/Defect Tracking Systems: JIRA, Trello.</li>
                            <li><span className='text-yellow-300'>$</span> Databases: PostgreSQL, MySQL.</li>
                            <li><span className='text-yellow-300'>$</span> Operating Systems: Linux, MacOS, Unix.</li>
                            <li><span className='text-yellow-300'>$</span> Software Development Methodologies: Scrum.</li>
                            <li><span className='text-yellow-300'>$</span> Version Control Systems: Git, GitHub.</li>
                            <li><span className='text-yellow-300'>$</span> Programming and Scripting: Bash, Typescript, JavaScript, Golang, Ruby, Lua, SQL.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}