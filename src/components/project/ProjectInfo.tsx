import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/data/projects";

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-editorial text-base md:text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </motion.div>

          {/* Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-foreground/10 pt-12"
          >
            {/* Services */}
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                {project.services.map((service) => (
                  <li key={service} className="font-serif text-sm tracking-wide">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Details */}
            {project.details && (
              <div>
                <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Détails
                </h3>
                <ul className="space-y-2">
                  {project.details.surface && (
                    <li className="font-serif text-sm tracking-wide">
                      Surface : {project.details.surface}
                    </li>
                  )}
                  {project.details.year && (
                    <li className="font-serif text-sm tracking-wide">
                      Année : {project.details.year}
                    </li>
                  )}
                  {project.details.duration && (
                    <li className="font-serif text-sm tracking-wide">
                      Durée : {project.details.duration}
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* Location */}
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Lieu
              </h3>
              <p className="font-serif text-sm tracking-wide">{project.subtitle}</p>
              <p className="font-sans text-xs tracking-wider text-muted-foreground mt-2 uppercase">
                {project.region === "cote-azur" ? "Côte d'Azur" : "Maroc"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
