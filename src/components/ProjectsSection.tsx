import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            icon={project.icon}
          />
        ))}
      </div>
    </section>
  );
}
