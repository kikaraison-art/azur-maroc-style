import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface PressItem {
  name: string;
  quote: string;
}

const pressItems: PressItem[] = [
  {
    name: "Côte Magazine",
    quote: "Un savoir-faire rare dans l'art des enduits à la chaux",
  },
  {
    name: "Art & Décoration",
    quote: "L'élégance méditerranéenne sublimée",
  },
  {
    name: "Côté Sud",
    quote: "Maître des demi-teintes et des matières naturelles",
  },
  {
    name: "Marie Claire Maison",
    quote: "Le luxe discret au service de l'habitant",
  },
];

const Press = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="presse" className="section-padding bg-background">
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
              Revue de Presse
            </h2>
          </motion.div>

          {/* Press Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {pressItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="text-center group"
              >
                {/* Logo placeholder - styled as text */}
                <div className="border-thin border-foreground/10 py-8 px-4 mb-6 transition-colors duration-300 group-hover:border-foreground/30">
                  <span className="font-serif text-lg md:text-xl tracking-wider">
                    {item.name}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-editorial text-sm text-muted-foreground italic">
                  "{item.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;
