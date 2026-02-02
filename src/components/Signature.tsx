import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Signature = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="signature" className="section-padding bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Thin line decoration */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="line-thin w-16 mx-auto mb-12 origin-center"
          />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-widest text-center mb-12"
          >
            La Signature
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8 text-center"
          >
            <p className="text-editorial text-lg md:text-xl lg:text-2xl text-muted-foreground">
              Depuis plus de 30 ans, je cultive l'art de créer des espaces où
              chaque détail respire l'harmonie.
            </p>

            <p className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Mon approche s'articule autour de trois piliers fondamentaux : la
              maîtrise des proportions, le jeu subtil des matières, et la
              lumière comme point d'orgue de chaque réalisation. Cette
              philosophie s'enrichit d'un métissage unique entre l'élégance
              méditerranéenne de la Côte d'Azur et la richesse sensorielle du
              Maroc.
            </p>

            <p className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Spécialiste des demi-teintes et des textures naturelles — chaux,
              tadelakt, pigments minéraux — je compose des atmosphères où le
              luxe se fait discret, où l'espace invite au recueillement et à la
              sérénité.
            </p>
          </motion.div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="line-thin w-16 mx-auto mt-12 origin-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Signature;
