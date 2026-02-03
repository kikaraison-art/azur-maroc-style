import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectNavigationProps {
  prev: Project | null;
  next: Project | null;
}

const ProjectNavigation = ({ prev, next }: ProjectNavigationProps) => {
  return (
    <section className="border-t border-foreground/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          {/* Previous */}
          {prev ? (
            <Link
              to={`/projet/${prev.slug}`}
              className="group py-12 md:py-16 px-6 md:px-12 border-r border-foreground/10 hover:bg-secondary/30 transition-colors"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    Précédent
                  </p>
                  <p className="font-serif text-sm md:text-base tracking-wider">
                    {prev.title}
                  </p>
                </div>
              </motion.div>
            </Link>
          ) : (
            <div className="py-12 md:py-16 px-6 md:px-12 border-r border-foreground/10" />
          )}

          {/* Next */}
          {next ? (
            <Link
              to={`/projet/${next.slug}`}
              className="group py-12 md:py-16 px-6 md:px-12 hover:bg-secondary/30 transition-colors text-right"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-end gap-4"
              >
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    Suivant
                  </p>
                  <p className="font-serif text-sm md:text-base tracking-wider">
                    {next.title}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </motion.div>
            </Link>
          ) : (
            <div className="py-12 md:py-16 px-6 md:px-12" />
          )}
        </div>

        {/* Back to Portfolio */}
        <div className="border-t border-foreground/10 py-8 text-center">
          <Link
            to="/#projets"
            className="nav-link inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-3 h-3" />
            Retour au portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectNavigation;
