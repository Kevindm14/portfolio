import './about.modules.css';

export const About = () => {
	return (
		<section className="about-me flex flex-col lg:flex-row-reverse lg:justify-between">
			<div className="text-white px-5 py-40 flex justify-center text-center flex-col items-center lg:w-1/2 lg:px-40">
				<h2 className='mb-10 font-extrabold text-spaceCadet text-6xl uppercase text-center'>Acerca de mi</h2>
				<p className='text-md text-spaceCadet'>
					Soy Kevin, un Desarrollador Web con amplia experiencia utilizando las mejores prácticas en la web. Acostumbrado a trabajar con diferentes lenguajes de programación. Me considero una persona muy comprometida y con capacidad para detectar y resolver problemas. Espero aprender mucho más de grandes profesionales y asumir nuevas responsabilidades.
				</p>
			</div>

			<div className="lg:w-1/2">
				<img src={`/about_me.png`} className="h-full w-full" alt="profile" />
			</div>
		</section>
	)
}

export default About;