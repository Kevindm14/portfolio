import { Project } from '../sections/Projects';

interface Props {
  projects: Project[];
}

export const ProjectCarrousel = ({ projects }: Props) => {
  return (
    <div className="flex justify-center gap-7 select-none flex-wrap">
      {projects.map(({ title, date, image, typeProject, link }) => (
        <div
          key={image}
          className="relative aspect-[2/3] h-[30rem] rounded-md overflow-hidden"
          style={{ backgroundColor: 'rgb(52, 69, 92)', opacity: 1 }}
        >
          <a href={link} target="_blank" className="group">
            <div className="absolute z-10 text-white inset-0 flex flex-col items-center justify-center bg-neutrals-900/50 p-4 text-center opacity-0 backdrop-blur-sm transition-all duration-300 hover:opacity-100 group-focus-visible:opacity-100 gap-y-2">
              <div className="overflow-hidden">
                <p className="translate-y-full text-xs transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 text-neutrals-50/90 uppercase">
                  {date}
                </p>
              </div>
              <div className="overflow-hidden">
                <h3 className="translate-y-full text-2xl font-bold transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 lg:text-4xl">
                  {title}
                </h3>
              </div>
              <div className="overflow-hidden">
                <p className="translate-y-full text-xs lg:text-sm transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 text-neutrals-50/90">
                  {typeProject}
                </p>
              </div>
            </div>

            <img
              src={image}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover absolute inset-0 group-hover:scale-105 group-focus-visible:scale-105 transition-transform duration-700"
              alt="project"
            />
          </a>
        </div>
      ))}
    </div>
  );
};
