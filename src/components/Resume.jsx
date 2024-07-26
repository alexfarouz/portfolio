import { motion } from "framer-motion";
import resume from '../assets/Alexander Farouz Resume.pdf';

const Resume = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Resume
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center">
            <iframe
            src={resume}
            style={{ width: '60%', height: '1125px' }}
            frameBorder="0"
            ></iframe>
      
      </motion.div>
    </div>
    );
};

export default Resume;