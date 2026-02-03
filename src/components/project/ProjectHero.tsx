import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectHeroProps {
  project: Project;
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 md:pb-24 px-6 text-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-widest mb-4">
            {project.title}
          </h1>
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase">
            {project.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;
