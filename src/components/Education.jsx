import { motion } from "framer-motion";
import mason from "../assets/Mason_Photo.jpg";
import { COURSES } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/4 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={mason} alt="about" className="w-3/4 h-auto rounded" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-3/4 lg:pl-20"
        >
          <div className="ml-auto mr-20">
            <p className="mt-2 max-w-xl py-6 text-2xl">
              George Mason University
            </p>

            <div className="flex justify-between max-w-3xl py-4">
              <p>College of Computing and Engineering | Honors College</p>
              <p className="text-purple-100">August 2022 - May 2025</p>
            </div>
            <div className="flex justify-between max-w-3xl py-4">
              <p>Bachelor of Science - Computer Science</p>
              <p className="text-purple-100">GPA: 3.95/4.00</p>
            </div>
            <div className="flex max-w-3xl py-4 text-neutral-400">
              <p>
                <span className="font-bold text-purple-100">
                  Relevant Coursework:
                </span>
                {COURSES}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;

/*
    className="w-full lg:w-2/3 lg:pl-8">
    <div className="text-left">
        <p className="my-6 text-2xl font-bold">George Mason University</p>
        <p className="text-xl italic">College of Computing and Engineering | Honors College</p>
        <p className="text-xl">Expected Graduation: May 2025</p>
        <p className="text-xl font-bold">GPA: 3.94/4.00</p>
        <p className="my-8 text-lg">Bachelor of Science in Computer Science</p>
        <p className="mt-2 text-lg">
            <span className="font-bold">
                Relevant Coursework:
            </span>
            Data Structures and Algorithms (Java), Object Oriented Programming (Java), Low-level Programming (C), Quantum Algorithms, Formal Methods and Models, Linear Algebra, Numerical Analysis.
        </p>
    </div>
*/
