import Portfolio from '../../assets/portfolio.png';
import UrlShort from '../../assets/url_short.png';
import Links from '../../assets/links.png';
import { ProjectCarrousel } from '../ProjectCarrousel/ProjectCarrousel';

export interface Project {
	title: string;
	date: string;
	link: string;
	image: string;
	typeProject: string;
}

export const Projects = () => {
	const projects: Project[] = [
		{
			title: 'My Portfolio',
			date: '',
			link: 'https://github.com/Kevindm14/portfolio',
			image: Portfolio,
			typeProject: 'Website'
		},
		{
			title: 'Url Shortener Landing Page',
			date: '',
			link: 'https://url-shortening-nine.vercel.app/',
			image: UrlShort,
			typeProject: 'Website'
		},
		{
			title: 'Links Connect',
			date: '',
			link: 'https://link-connect.vercel.app/',
			image: Links,
			typeProject: 'Website'
		},
	]

	return (
		<section className='bg-neutrals-900 flex flex-col px-5 md:px-20 lg:flex-row'>
			<div className="pt-20 pb-52 w-full">
				<h2 className='mb-32 font-extrabold text-green text-6xl uppercase text-center'>PROJECTS</h2>

				<ProjectCarrousel projects={projects} />
			</div>
		</section>
	)
}

export default Projects;
