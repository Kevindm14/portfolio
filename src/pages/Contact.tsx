import GithubIcon from '../assets/github_icon.svg'
import LinkedinIcon from '../assets/linkedin.svg'

export const Contact = () => {
    return (
        <div className="">
            <div className="flex flex-col text-center space-y-5 py-40 text-white px-40">
                <h1 className="text-5xl">Get in Touch</h1>

                <div className="flex flex-col border-[#5BE9B9] space-y-10 border-4 rounded-md w-1/2 mx-auto py-10">
                    <h2>Do you have any question?</h2>

                    <button className="bg-[#6E07F3] hover:bg-[#32ac83] transition ease-in-out rounded w-36 py-2 mx-auto">Say Hello 👋</button>
                </div>

                <div className="flex space-x-10 justify-center">
                    <img src={LinkedinIcon} className='w-10' alt="Github" />
                    <img src={GithubIcon} className='w-10' alt="Github" />
                </div>
            </div>
        </div>
    )
}

export default Contact