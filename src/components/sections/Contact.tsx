import {FaGithubAlt, FaTwitter} from "react-icons/fa";
import {RiLinkedinFill} from "react-icons/ri";

export const Contact = () => {
	return (
		<section className="bg-spaceCadet flex flex-col lg:flex-row md:px-20 px-5" id='contact'>
			<div className="flex flex-col py-20 w-full justify-center text-center space-y-10">
				<h1 className="text-5xl md:text-6xl uppercase font-extrabold mx-auto text-zaffre">Contacto</h1>

				<a href='mailto:kevindiazm.14@gmail.com' className="border-4 rounded-md font-medium border-white text-white hover:bg-white hover:text-neutrals-900 transition ease-in-out px-20 py-5 mx-auto">
					Di ¡Hola! 👋
				</a>

				<div className="flex space-x-10 justify-center mx-auto text-white">
					<a href="https://www.linkedin.com/in/kevindm14/" target='_blank'>
						<RiLinkedinFill size={55} className="border-2 border-white px-3 rounded-full text-white hover:bg-white hover:text-neutrals-900 transition ease-in" />
					</a>
					<a href="https://github.com/Kevindm14/portfolio" target='_blank'>
						<FaGithubAlt size={55} className="border-2 border-white px-3 rounded-full text-white hover:bg-white hover:text-neutrals-900 transition ease-in" />
					</a>
					<a href="https://twitter.com/Kevin57931422" target='_blank'>
						<FaTwitter size={55} className="border-2 border-white px-3 rounded-full text-white hover:bg-white hover:text-neutrals-900 transition ease-in" />
					</a>
				</div>
			</div>
		</section>
	)
}

export default Contact;