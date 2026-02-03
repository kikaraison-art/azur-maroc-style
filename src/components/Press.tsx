import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import marieClaire from "@/assets/press/marie-claire.jpg";
import artDecoration from "@/assets/press/art-decoration.jpg";
import coteSud from "@/assets/press/cote-sud.jpg";

interface PressItem {
  name: string;
  quote: string;
  image: string;
}

const pressItems: PressItem[] = [
  {
    name: "Marie Claire Maison",
    quote: "Une optimiste qui se plaît dans les budgets limités : « Cela m'oblige à être plus créative ! »",
    image: marieClaire,
  },
  {
    name: "Art & Décoration",
    quote: "Modernité à tous les étages dans les Alpes Maritimes",
    image: artDecoration,
  },
  {
    name: "Côté Sud",
    quote: "L'alchimie des choses : une galerie de la vie, une franche bouffée d'air",
    image: coteSud,
  },
];

const Press = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  return (
    <>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {pressItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center group"
                >
                  {/* Image */}
                  <div
                    className="aspect-[3/4] mb-6 overflow-hidden cursor-pointer image-hover"
                    onClick={() => openLightbox(item.image)}
                  >
                    <img
                      src={item.image}
                      alt={`Article ${item.name}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-serif text-lg md:text-xl tracking-wider mb-3">
                    {item.name}
                  </h3>

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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-background/80 hover:text-background transition-colors z-10"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt="Article de presse"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Press;
