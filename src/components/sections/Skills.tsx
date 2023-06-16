import {skills} from "../../utils/skills.ts";
import {Badge} from "../Badge/Badge.tsx";

export const Skills = () => {
	return (
		<section className='bg-neutrals-900 flex flex-col py-20 lg:flex-row md:px-20 px-5'>
			<div className="py-20 w-full">
				<h2 className='mb-40 font-extrabold text-green text-6xl uppercase text-center'>SKILLS</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 justify-center gap-10'>
					{skills.map(({ name, tech }) =>
						<div key={name}>
							<h3 className='text-gray font-bold mb-2'>{name}</h3>

							<div className='flex flex-wrap gap-1'>
								{tech.map(({ name }) => (
									<Badge
										key={name}
										className='mb-2'
										color='green'
										bg='green'>
										{name}
									</Badge>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default Skills;