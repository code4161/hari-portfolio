// ✨ CHANGED: Removed unused imports
// import { ProjectCard } from "@/components/sub/project-card";
// import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id='projects'
      className='flex flex-col items-center justify-center py-20'
    >
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>

      {/* ✨ CHANGED: Replaced the project map with this new text block */}
      <div className='flex flex-col items-center gap-4 text-center px-10'>
        <h2 className='text-3xl font-bold text-white'>
          Looking for projects, experience speaks better.
        </h2>
        <p className='text-xl text-gray-300 max-w-2xl'>
          To see my full work history and client reviews, please click the{' '}
          <span className='font-bold text-purple-400'>Upwork</span> button in
          the navigation menu above.
        </p>
      </div>
    </section>
  );
};
