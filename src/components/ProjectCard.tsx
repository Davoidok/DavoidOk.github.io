import { FC } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "./ProjectCard.css";

export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  icon?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, link, icon }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      whileTap={{ scale: 0.98 }}
    >
      <div className="card-header">
        <div className="card-icon">{icon || "⚡"}</div>
        <ExternalLink className="w-5 h-5 card-link-icon" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </motion.a>
  );
};

export default ProjectCard;
