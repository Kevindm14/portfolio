import { skills } from '../../../utils/skills';
import Category from '../../Category/Category';
import './skills.modules.css';

export const Skills = () => {
  return (
    <section className="bg-zaffre flex flex-col">
      <div className="py-32">
        {skills.map(({ svg }, index) => (
          <Category key={index}>
            {svg}
          </Category>
        ))};
      </div>
    </section>
  );
};

export default Skills;
