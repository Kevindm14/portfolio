import profilePhoto from "../../assets/profile.jpg";

export const About = () => {
	return (
		<section className='bg-neutrals-900 flex flex-col lg:flex-row-reverse lg:justify-between'>
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
	)
}

export default About;