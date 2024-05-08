import { projects } from '@/utils/data/projects';
import { ProjectCarrousel } from '@/components/ProjectCarrousel';

export const Projects = () => {
  return (
    <section className="bg-[#131418] flex flex-col px-5 md:px-20 lg:flex-row" id="projects">
      <div className="pt-20 pb-52 w-full">
        <h2 className="mb-32 font-extrabold text-green text-6xl uppercase text-center">PROJECTS</h2>
				<ProjectCarrousel projects={projects} />
			</div>
		</section>
	)
}

export default Projects;
