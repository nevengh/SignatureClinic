import './Preloader.css';
import { motion, AnimatePresence } from 'framer-motion';
// 👇 تعريف نوع الـ props
interface PreloaderProps {
    fadeOut: boolean;
  }
const Preloader: React.FC<PreloaderProps> = ({ fadeOut })=> {
  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="spinner">
            <div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
          <div className="text">
            <p>On your way...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
