import { useMemo, useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const HIDDEN_COUNT = 4;
  const [showAll, setShowAll] = useState(false);

  const { visibleProjects, hiddenProjects, hasHidden } = useMemo(() => {
    const hasHidden = PROJECTS.length > HIDDEN_COUNT;
    if (!hasHidden) {
      return {
        visibleProjects: PROJECTS,
        hiddenProjects: [],
        hasHidden: false,
      };
    }
    return {
      visibleProjects: PROJECTS.slice(0, PROJECTS.length - HIDDEN_COUNT),
      hiddenProjects: PROJECTS.slice(PROJECTS.length - HIDDEN_COUNT),
      hasHidden: true,
    };
  }, []);

  const renderProject = (project, index) => (
    <div
      key={`${project.title}-${index}`}
      className="mb-8 flex flex-wrap lg:justify-center"
    >
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-1/4"
      >
        <img
          src={project.image}
          width={150}
          height={150}
          alt={project.title}
          className="mb-6 rounded"
        />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-xl lg:w-3/4"
      >
        <h6 className="mb-2 font-semibold">{project.title}</h6>

        <p className="mb-4 text-neutral-400">
          {project.description}{" "}
          {project.downloadLink && (
            <a
              href={project.downloadLink}
              download
              className="ml-1 text-sky-400 hover:text-gray-200"
            >
              Download Executable
            </a>
          )}
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-sky-400 hover:text-blue-500"
            >
              See More
            </a>
          )}
        </p>

        {project.technologies.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        // viewport={{ once: true, amount: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      {/* Always-visible projects */}
      <div>{visibleProjects.map(renderProject)}</div>

      {/* Hidden projects (toggle) */}
      <AnimatePresence initial={false}>
        {showAll && (
          <motion.div
            key="hidden-projects"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            {hiddenProjects.map(renderProject)}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      {hasHidden && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/40 px-5 py-2 text-sm text-neutral-200 backdrop-blur transition hover:border-neutral-700 hover:bg-neutral-950/60"
          >
            <span className="text-purple-100">
              {showAll ? "Show less" : "Show more"}
            </span>

            {/* sleek chevron */}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="opacity-90 transition group-hover:opacity-100"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
