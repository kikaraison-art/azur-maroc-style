import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-sm tracking-widest uppercase"
          >
            Séverine Pillot
          </motion.a>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-8"
          >
            <a
              href="#projets"
              className="font-sans text-xs tracking-wider uppercase opacity-60 hover:opacity-100 transition-opacity"
            >
              Projets
            </a>
            <a
              href="#services"
              className="font-sans text-xs tracking-wider uppercase opacity-60 hover:opacity-100 transition-opacity"
            >
              Services
            </a>
            <a
              href="#contact"
              className="font-sans text-xs tracking-wider uppercase opacity-60 hover:opacity-100 transition-opacity"
            >
              Contact
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs tracking-wider opacity-40"
          >
            © 2024 Séverine Pillot
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
