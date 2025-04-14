import './Preloader.css';
import { motion, AnimatePresence } from 'framer-motion';
import video from '../../assets/outro (1) (1).mp4'
// 👇 تعريف نوع الـ props
interface PreloaderProps {
  fadeOut: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ fadeOut }) => {
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
          {/* ✅ هنا مكان الفيديو */}
          <video 
            className="preloader-video"
            src={video} 
            autoPlay 
            loop 
            muted 
            playsInline 
          />


        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
