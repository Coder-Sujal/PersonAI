import { motion, AnimatePresence } from "framer-motion";

const Welcome = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <AnimatePresence>
        <motion.div
          key="welcome-text"
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: -20 }}   // Start slightly above and invisible
          animate={{ opacity: 1, y: 0 }}     // Animate to visible and original position
          exit={{ opacity: 0, y: 20 }}       // Exit slightly below and fade out
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.p
            className="text-3xl font-semibold md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Good Morning, <span className="text-[#D781FF]">Sujal</span>
          </motion.p>

          <motion.p
            className="text-2xl font-semibold md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How Can I <span className="text-[#97A5FF]">Assist You Today ?</span>
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Welcome;
