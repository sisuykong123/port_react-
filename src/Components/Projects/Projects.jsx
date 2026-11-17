import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <ProjectCard
          title="Blogging Website"
          main="A blogging website built with modern web tools and reusable components."
        />
        <ProjectCard
          title="YouTube Clone"
          main="A YouTube-style interface with responsive layouts and component-based UI."
        />
        <ProjectCard
          title="Netflix Clone"
          main="A Netflix-inspired project showcasing media cards and responsive design."
        />
        <ProjectCard
          title="Portfolio App"
          main="A personal portfolio app with sections for skills, experience, and projects."
        />
      </div>
    </div>
  );
};

export default Projects;