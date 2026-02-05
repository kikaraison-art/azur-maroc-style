import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Merci = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        <h1 className="font-serif text-3xl md:text-4xl tracking-widest mb-6">
          Merci
        </h1>
        <p className="font-sans text-sm text-muted-foreground mb-4">
          Votre message a bien été envoyé.
        </p>
        <p className="font-sans text-sm text-muted-foreground mb-12">
          Nous vous répondrons dans les plus brefs délais.
        </p>
        <Link
          to="/"
          className="btn-minimal inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
      </motion.div>
    </div>
  );
};

export default Merci;
