import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

import projectRiad from "@/assets/project-riad.jpg";
import projectApartment from "@/assets/project-apartment.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectBoutique from "@/assets/project-boutique.jpg";

type FilterType = "all" | "residential" | "professional";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: "residential" | "professional";
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Villa K",
    subtitle: "Èze, Côte d'Azur",
    category: "residential",
    image: projectRiad,
  },
  {
    id: 2,
    title: "Appartement N",
    subtitle: "Nice, France",
    category: "residential",
    image: projectApartment,
  },
  {
    id: 3,
    title: "Hôtel O",
    subtitle: "Rabat, Maroc",
    category: "professional",
    image: projectHotel,
  },
  {
    id: 4,
    title: "Bazar Bio",
    subtitle: "Marrakech, Maroc",
    category: "professional",
    image: projectBoutique,
  },
];

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
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="image-hover aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg md:text-xl tracking-wider mb-1">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs tracking-wider text-muted-foreground uppercase">
                    {project.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
