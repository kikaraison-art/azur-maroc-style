import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formType, setFormType] = useState<"consultation" | "project">(
    "consultation"
  );

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-widest mb-6">
              Contact
            </h2>
            <p className="font-sans text-sm text-muted-foreground max-w-md mx-auto">
              Partagez votre vision. Créons ensemble un espace qui vous
              ressemble.
            </p>
          </motion.div>

          {/* Form Type Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setFormType("consultation")}
              className={`btn-minimal text-xs ${
                formType === "consultation"
                  ? "bg-foreground text-background"
                  : ""
              }`}
            >
              Prendre rendez-vous
            </button>
            <button
              onClick={() => setFormType("project")}
              className={`btn-minimal text-xs ${
                formType === "project" ? "bg-foreground text-background" : ""
              }`}
            >
              Soumettre un projet
            </button>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Prénom"
                className="input-minimal"
              />
              <input type="text" placeholder="Nom" className="input-minimal" />
            </div>

            <input type="email" placeholder="Email" className="input-minimal" />

            <input
              type="tel"
              placeholder="Téléphone"
              className="input-minimal"
            />

            {formType === "project" && (
              <>
                <select className="input-minimal bg-transparent cursor-pointer">
                  <option value="">Type de projet</option>
                  <option value="villa">Villa privée</option>
                  <option value="apartment">Appartement</option>
                  <option value="hotel">Hôtel / Restaurant</option>
                  <option value="boutique">Boutique / Commerce</option>
                </select>

                <input
                  type="text"
                  placeholder="Localisation du projet"
                  className="input-minimal"
                />
              </>
            )}

            <textarea
              placeholder={
                formType === "consultation"
                  ? "Dites-nous en plus sur vos envies..."
                  : "Décrivez votre projet..."
              }
              rows={4}
              className="input-minimal resize-none"
            />

            <div className="text-center pt-4">
              <button type="submit" className="btn-minimal">
                {formType === "consultation" ? "Demander un rendez-vous" : "Envoyer ma demande"}
              </button>
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-12 border-t border-thin border-foreground/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Location */}
              <div>
                <h4 className="font-serif text-sm tracking-wider mb-2">
                  Atelier
                </h4>
                <p className="font-sans text-xs text-muted-foreground">
                  Marrakech, Maroc
                </p>
              </div>

              {/* Email */}
              <div>
                <h4 className="font-serif text-sm tracking-wider mb-2">
                  Email
                </h4>
                <a
                  href="mailto:contact@severinepillot.com"
                  className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@severinepillot.com
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <h4 className="font-serif text-sm tracking-wider mb-3">
                  WhatsApp
                </h4>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://wa.me/33600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span className="w-4 h-4">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    France
                  </a>
                  <a
                    href="https://wa.me/212600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span className="w-4 h-4">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    Maroc
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
