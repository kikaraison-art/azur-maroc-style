import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects, type ProjectCategory } from "@/data/projects";

type FilterType = "all" | ProjectCategory;

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const filters: { value: FilterType; label: string }[] = [
    { value: "all", label: "Tous" },
    { value: "residential", label: "Résidentiel" },
    { value: "professional", label: "Professionnel" },
  ];

  return (
    <section id="projets" className="section-padding bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-widest mb-8">
              Portfolio
            </h2>

            {/* Filters */}
            <div className="flex justify-center gap-8">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`nav-link transition-opacity ${
                    filter === f.value ? "opacity-100" : "opacity-50"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  to={`/projet/${project.slug}`}
                  className="group block cursor-pointer"
                >
                  <div className="image-hover aspect-[4/5] mb-4 overflow-hidden">
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-lg md:text-xl tracking-wider mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs tracking-wider text-muted-foreground uppercase">
                      {project.subtitle}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
