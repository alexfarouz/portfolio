import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/image.png";
import kruskalExe from "../assets/projects/Kruskal's Simulator.exe";

export const BIO_CONTENT = `Hi! My name is Alex and I am a Software Engineer at Peraton. I recently graduated Summa Cum Laude
  from George Mason University with a Bachelor of Science in Computer and I now attend Georgia Tech pursuing a Masters in Computer Science.
  With 3 years of hands-on experience, I have honed my skills in languages such as Java, Python, C/C++, JavaScript and TypeScript,
  front-end technologies such as React and Next.js, as well as back-end technologies like AWS, Node.js, Postgres, Mongo and more. I've recently
  been diving into the world of AI experimenting with Langchain, Pinecone and various OpenAI applications. I enjoy taking ownership on projects,
  starting from scratch all the way to deployment and maintenance.`;

export const ABOUT_TEXT = `At my core, I’m a builder. I enjoy taking ideas from zero to production — designing the architecture, writing clean
and scalable code, and iterating until the system feels right. I’m energized by solving complex problems, especially when they require balancing 
performance, reliability, and user experience.

I’m particularly drawn to systems that demand thoughtful design and long-term maintainability, where small technical decisions can have meaningful 
downstream impact. Whether working independently or within a team, I value ownership, clarity, and delivering work that I’m genuinely proud of. 
For me, engineering is not just about shipping features, it’s about building solutions that are resilient, elegant, and built to last.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - Present",
    role: "Software Engineer",
    company: "Peraton",
    location: "Herndon, VA",
    description: [
      `Engineered and maintained secure Django-based backend services deployed across Oracle Linux 
    environments, implementing RESTful APIs, reverse proxy architecture (Nginx), and Gunicorn service orchestration 
    for mission-critical applications.`,
      `Automated multi-VM configuration and deployment workflows using Bash, Docker, and systemd, standardizing 
    environments across distributed infrastructure and improving deployment reliability and consistency.`,
      `Led production troubleshooting and performance optimization efforts, resolving networking, TLS, firewall, and 
    authentication issues to ensure high availability and secure system operation`,
    ],
    technologies: [],
  },
  {
    year: "August 2024 - January 2025",
    role: "Software Engineering Intern",
    company: "Horizon Labs",
    location: "Remote",
    description: [
      `Worked in SCRUM team producing 10+ APIs and creating landing, information and dashboard pages from scratch increasing user base by 100%
      Designed and implemented backend API integrations using FastAPI, streamlining communication between frontend and Azure 
      services.`,
      `Developed server-side logic and managed databases with Azure SQL and Blob Storage, optimizing storage and retrieval 
      for improved performance. Collaborated with cross-functional Scrum teams to integrate LLM processing using Langchain, leveraging FastAPI 
      libraries to enhance natural language understanding capabilities.`,
    ],
    technologies: ["Azure Services", "FastAPI", "Langchain", "TypeScript"],
  },
  {
    year: "July 2024 - September 2024",
    role: "Software Engineering Fellow",
    company: "Headstarter AI",
    location: "Remote",
    description: [
      `Building 5+ AI apps and API’s using NextJS, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users.`,
      `Developing projects from design to deployment leading 3 engineering fellows using MVC design pattern.`,
      `Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns`,
    ],
    technologies: ["Langchain", "Pinecone", "Next.js", "OpenAI"],
  },
  {
    year: "May 2024 - November 2024",
    role: "Software Engineering Intern",
    company: "CloudStation",
    location: "Los Angeles, CA",
    description: [
      // `Developed the frontend and backend from scratch using React and JavaScript, resulting in a 100% increase in engagement.`,
      // `Achieved a 70% increase in interest across ventures such as clients, business owners, and investors, as seen by over 5000 viewers.`,
      // `Increased revenue by 45%, generating over $10,000, and facilitated positive reviews and interest from multi-millionaire investors.`,
    ],
    technologies: ["React", "JavaScript", "Vercel", "Node.js"],
  },
  {
    year: "January 2023 - May 2025",
    role: "Computer Science Teaching Assistant",
    company: "George Mason University",
    location: "Fairfax, VA",
    description: [
      `Assisted with various George Mason CS courses such as Data Structures and Algorithms (CS310, current) 
      Object-Oriented Programming (CS 211) and Introduction to Programming (CS 112).`,
      `Answered student questions on projects and miscellaneous questions on online forum (Piazza).`,
      `Instructed students regarding lab assignments during lab periods as well as proctoring tests.`,
      `Aided over 3000 George Mason computer science students in total time as teaching assistant.`,
    ],
    technologies: ["Java", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "Viewee",
    image: project9,
    description: `Created a conversational voice AI interviewer for technical SWE interviews with 75+ coding problems and real time feedback.
    Utilized WebSockets and chunking to achieve <1000 ms response time with a RAG pipeline on user solutions for accurate interviewer responses.
    Implemented a TypeScript and Next.js frontend with a Python backend supporting STT and TTS APIs from Deepgram with GPT-4o for feedback. `,
    technologies: ["OpenAI", "Deepgram", "TypeScript", "Next.js", "Python"],
    websiteLink: "https://github.com/viewee-ai",
  },
  {
    title: "Pam Playground",
    image: project8,
    description: `Created an AI customer support agent for car dealerships to take customer calls, schedule appointments, inquire inventory and more.
      Utilized WebSockets and streaming techniques to achieve sub 1000ms latency complete with live transcriptions updating as the customer is talking.
      Built the frontend with TypeScript, Next.js and shadcn with a JavaScript and Node.js backend with Deepgrams' Nova-2 STT and Aura TTS models using Llama3 via groq.
      Headstarter Hiring Hackathon Finalist. `,
    technologies: ["Groq", "Llama3", "Deepgram", "TypeScript", "Next.js"],
    websiteLink: "https://pam-voicechat.vercel.app/",
  },
  {
    title: "RecMyProfessors",
    image: project7,
    description: `Developed a RateMyProfessors web-scraper chatbot to recommend professors to users based on certain attributes, classes, ratings, etc. with 100% professor
      data accuracy. Built a web scraping serve using Python, Selenium and BeautifulSoup to gather data on professors from 100+ universities.
      Frontend build with Next.js, React, TailwindCSS and shadcn while backend implemented in JavaScript and the OpenAI API as the LLM with Firebase 
      for user storage and Clerk for user authentication. `,
    technologies: ["Python", "Selenium", "BeatifulSoup", "Next.js", "React"],
    websiteLink: "https://rec-my-professors.vercel.app/",
  },
  {
    title: "Notefy",
    image: project6,
    description: `Created an AI powered flashcard generator which allows users to input text, pdfs and YouTube videos as context for the OpenAI API. Built the frontend using
      React, Next.js and TailwindCSS; the backend was built using Python and Flask with Firebase for storage, Clerk for user authentication and Stripe for payments. Currently holds 
      60+ users including 10+ premium members and an average rating of 4.5 stars across given reviews. `,
    technologies: ["Python", "OpenAI", "Firebase", "React", "Next.js"],
    websiteLink: "https://notefy.up.railway.app/",
  },
  {
    title: "AI Assistant",
    image: project1,
    description: `Constructed a Next.js RAG AI chatbot to help users with general purpose questions, but more specifically help aspiring SWEs break into tech.
      The frontend was built with React, Next.js and TailwindCSS, while the backend was built using Python and Langchain for the RAG. Leveraged JWT token generation
      from the Clerk API with a Firebase integration to store data. Utilized Langchain and Pinecone's vector database to allow for OpenAI GPT-4o-mini to provide more accurate
      answers based on the given context.`,
    technologies: ["Langchain", "Pinecone", "Firebase", "OpenAI", "Next.js"],
    //websiteLink: "https://ai-customer-support-three-phi.vercel.app/",
  },

  {
    title: "Pantry Tracker",
    image: project2,
    description: `Built a Next.js pantry tracker app to track a user's pantry inventory. Features the react-camera module to 
      take a picture of a pantry item which is sent to the OpenAI GPT-4o-mini model to analyze the image and add it to the users inventory. Based on a users inventory, the
      same OpenAI model generates a recipe with detailed duration, ingredients and instructions. Frontend built with Next.js + React and backend built with Firebase,
      Javascript. Utilized RESTful API's from OpenAI, Clerk for user login and Unsplash for image fetching. Holds 100+ users. `,
    technologies: ["Next.js", "React", "Firebase", "Javascript", "OpenAI"],
    websiteLink: "https://pantry-tracker-henna-sigma.vercel.app/",
  },

  {
    title: "Sorting Visualizer",
    image: project3,
    description: `A fully functional website used to visualize sorting algorithms such as merge sort, quick sort, heap sort and bubble sort. Allows for 
      adjustable number of data and adjustable sorting speed. Holds 200+ users composed of fellow George Mason University students from Data Structures and Algorithms course
      I assisted in. `,
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    websiteLink: "https://alexfarouz.github.io/sorting-visualizer/",
  },

  {
    title: "Kruskal's Algorithm Simulator",
    image: project4,
    description: `A visual simulator for Kruskal's Minimum Spanning Tree Algorithm fully implemented in Java. Includes a Swing GUI with editable
      graph nodes and graph edges to customize simulation for added capability. Utilized several self-implemented data structures such as graph, 
      binary search tree, set, map. `,
    technologies: ["Java", "Java Swing", "JUnit"],
    downloadLink: kruskalExe,
  },
  {
    title: "Minesweeper Game",
    image: project5,
    description:
      "A comprehensive Minesweeper Game complete with varying sizes and difficulties. Fully implemented in Java with a GUI using Java AWT and JUnit testing. ",
    technologies: ["Java", "Java AWT", "JUnit"],
    websiteLink: "https://github.com/alexfarouz/minesweeper",
  },
];

export const COURSES = ` Data Structures and Algorithms, Object Oriented Programming, Operating Systems, Low-level Programming, Software Engineering, 
  Analysis of Algorithms, Computer Systems and Programming, Quantum Algorithms, Introduction to AI`;

export const COURSES2 = ` Machine Learning for Trading, Knowledge-Based AI, Network Science, Database System Implementation`;

export const CONTACT = {
  address: "Sterling, Virginia",
  phoneNo: "+1 703 939 4983",
  email: "alexfarouz@gmail.com",
};
