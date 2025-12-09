import { FC } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="block rounded-2xl p-6 shadow-md bg-white border hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold">{title}</h3>
        <ExternalLink className="w-5 h-5 opacity-60" />
      </div>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.a>
  );
};

export default ProjectCard;
