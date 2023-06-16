import {TypeAnimation} from "react-type-animation";

export const Hero = () => {
	return (
		<section className="flex bg-purple flex-col h-[900px] pt-32 pb-52 p-5 sm:px-12 md:px-20 items-center text-white">
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

			<button className='border-2 w-72 mt-5 lg:mt-5 font-medium py-2 hover:text-neutrals-900 hover:border-white hover:bg-white transition ease-in'>Hit me up</button>
		</section>
	)
}

export default Hero;