import GithubIcon from '../assets/github_icon.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import TwitterIcon from '../assets/twitter_icon.svg'

export const Contact = () => {
    return (
        <div className="flex flex-col justify-center text-center space-y-10 h-screen overflow-hidden">
            <h1 className="text-6xl uppercase w-80 font-extrabold mx-auto text-white">Get in Touch</h1>

            <div className="flex text-white flex-col border-4 rounded-md mx-10"></div>

            <a href='mailto:kevindiazm.14@gmail.com'
                className="border font-medium border-white text-white hover:bg-white hover:text-blue transition ease-in-out px-20 py-5 mx-auto">
                Say Hello 👋
            </a>

            <div className="flex space-x-10 justify-center mx-auto">
                <a href="https://www.linkedin.com/in/kevindm14/" target='_blank'>
                    <img src={LinkedinIcon} className='w-10 cursor-pointer' alt="Linkedin" />
                </a>
                <a href="https://github.com/Kevindm14/portfolio" target='_blank'>
                    <img src={GithubIcon} className='w-10 cursor-pointer' alt="Github" />
                </a>
                <a href="https://twitter.com/Kevin57931422" target='_blank'>
                    <img src={TwitterIcon} className='w-10 cursor-pointer' alt="Twitter" />
                </a>
            </div>
        </div>
    )
}

export default Contact;