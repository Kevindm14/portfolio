export const Projects = () => {
	const projects: string[] = [
		"https://images.unsplash.com/photo-1686731207846-67503b8bb60d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
		"https://plus.unsplash.com/premium_photo-1686498958763-3c45c5d137c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
		"https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	]

	return (
		<section className='bg-neutrals-900 flex flex-col px-5 md:px-20 lg:flex-row'>
			<div className="pt-20 pb-52 w-full">
				<h2 className='mb-32 font-extrabold text-green text-6xl uppercase text-center'>PROJECTS</h2>

				<div className='cards grid grid-cols-1 md:grid-cols-3 gap-10'>
					{projects.map((project) => (
						<div key={project} className='flex justify-between h-[400px] md:h-[500px] lg:h-[600px]'>
							<img src={project} className="object-cover w-full rounded-md" alt="project"/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects;