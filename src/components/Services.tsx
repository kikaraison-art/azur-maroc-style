import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Service {
  title: string;
  subtitle: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Architecture d'Intérieur",
    subtitle: "Restructuration complète",
    description:
      "Repenser l'espace dans sa globalité. Du plan initial à la réalisation finale, je conçois des intérieurs où chaque volume trouve sa juste proportion, où la circulation devient intuitive et où la lumière naturelle sublime chaque pièce.",
  },
  {
    title: "Décoration & Styling",
    subtitle: "Matières et mobilier",
    description:
      "L'art de composer une atmosphère unique. Sélection de mobilier, textiles, luminaires et objets d'art — chaque élément est choisi pour créer une harmonie sensorielle, un équilibre entre l'épure contemporaine et la chaleur des matières nobles.",
  },
  {
    title: "Consultation Couleurs",
    subtitle: "Expertise chaux et enduits",
    description:
      "Ma spécialité : les pigments naturels et les finitions artisanales. Chaux, tadelakt, stuc — je maîtrise les techniques ancestrales pour créer des surfaces vivantes, des teintes nuancées qui évoluent avec la lumière du jour.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-widest">
              Vos Projets
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className="text-center"
              >
                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl tracking-wider mb-2">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-bronze mb-6">
                  {service.subtitle}
                </p>

                {/* Line */}
                <div className="line-thin w-12 mx-auto mb-6" />

                {/* Description */}
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
