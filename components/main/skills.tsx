import { SkillDataProvider } from '@/components/sub/skill-data-provider';
import { SkillText } from '@/components/sub/skill-text';

// ✨ CHANGED: Import the single categories object
import { SKILL_CATEGORIES } from '@/constants';

export const Skills = () => {
  return (
    <section
      id='skills'
      style={{ transform: 'scale(0.9)' }}
      className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
    >
      <SkillText />

      {/* ✨ CHANGED: Replaced all separate divs with this single loop */}
      <div className='flex flex-col items-center justify-center gap-10 mt-4 w-full'>
        {/* This loops through each category in your SKILL_CATEGORIES object 
          (e.g., frontend, backend, ai)
        */}
        {Object.values(SKILL_CATEGORIES).map((category) => (
          <div key={category.title} className='w-full max-w-5xl'>
            {/* 1. Renders the category title */}
            <h3 className='text-2xl font-semibold text-center text-white mb-6'>
              {category.title}
            </h3>

            {/* 2. Renders the row of skills for that category */}
            <div className='flex flex-row justify-center flex-wrap gap-5 items-center'>
              {category.skills.map((skill, i) => (
                <SkillDataProvider
                  key={skill.skill_name}
                  src={skill.image}
                  name={skill.skill_name} // Added name prop back
                  width={skill.width}
                  height={skill.height}
                  index={i}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* This background video section remains unchanged */}
      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
          <video
            className='w-full h-auto'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
          >
            <source src='/videos/skills-bg.webm' type='video/webm' />
          </video>
        </div>
      </div>
    </section>
  );
};
