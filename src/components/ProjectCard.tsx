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
  const isDisabled = link === "#";

  const Wrapper = isDisabled ? motion.div : motion.a;

  return (
    <Wrapper
      {...(!isDisabled && {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer"
      })}
      className={`project-card ${isDisabled ? "cursor-default" : "cursor-pointer"}`}
      whileTap={{ scale: 0.98 }}
    >
      <div className="card-header">
        <div className="card-icon">{icon || "⚡"}</div>

        {!isDisabled && (
          <ExternalLink className="w-5 h-5 card-link-icon" />
        )}
      </div>

      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </Wrapper>
  );
};


export default ProjectCard;
