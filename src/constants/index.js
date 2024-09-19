import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import kruskalExe from "../assets/projects/Kruskal's Simulator.exe";

export const BIO_CONTENT = `Hi! My name is Alex and I am a third-year Computer Science student at George Mason University looking to break in to tech as a Software Engineer. 
  With 3 years of hands-on experience, I have honed my skills in languages such as Java, Python, C, HTML, JS and CSS, front-end technologies like 
  React and Next.js, as well as back-end technologies like Node.js, AWS, Firebase, SpringBoot and more. My goal is to leverage my expertise 
  to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `More than having a passion for coding, I am a dedicated and lifelong learner, constantly looking grow. 
  The moments in life where I have grown the most stem from failure. Without failiure there is no chance to learn, which is why I always try
  without fearing failure. For example, the first website I built was for a hackathon where my team and I tried to build a web app to
  detect heart disease based off inputted paramaters. We did not win, however the project taught us a lot about web development and machine learning.
  This was my first time using HTML, CSS and JS and also my first learning about machine learning algorithms like KNN and Random Forest.
  The project was not a success, but was still a great learning curve for me. I thrive in team-based environments and enjoy solving complex problems 
  to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "August 2024 - Present",
    role: "Software Engineer Intern",
    company: "Horizon Labs",
    location: "Remote",
    description: `Worked in SCRUM team producing 10+ APIs and creating landing, information and dashboard pages from scratch increasing user base by 100%
      Designed and implemented backend API integrations using FastAPI, streamlining communication between frontend and Azure 
      services. Developed server-side logic and managed databases with Azure SQL and Blob Storage, optimizing storage and retrieval 
      for improved performance. Collaborated with cross-functional Scrum teams to integrate LLM processing using Langchain, leveraging FastAPI 
      libraries to enhance natural language understanding capabilities. Experiences span full-stack development and scalable system design.`,
    technologies: ["Azure Services", "FastAPI", "Langchain", "TypeScript"],
  },
  {
    year: "July 2024 - Present",
    role: "Software Engineering Fellow",
    company: "Headstarter AI",
    location: "Remote",
    description: `Building 5+ AI apps and API’s using NextJS, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users. 
      Developing projects from design to deployment leading 3 engineering fellows using MVC design pattern. 
      Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns`,
    technologies: ["Langchain", "Pinecone", "Next.js", "OpenAI"],
  },
  {
    year: "May 2024 - Present",
    role: "Software Engineer Intern",
    company: "CloudStation",
    location: "Los Angeles, CA - Remote",
    description: `Developed the frontend and backend from scratch using React and JavaScript, resulting in a 100% increase in engagement.
      Achieved a 70% increase in interest across ventures such as clients, business owners, and investors, as seen by over 5000 viewers.
      Increased revenue by 45%, generating over $10,000, and facilitated positive reviews and interest from multi-millionaire investors. See at `,
    link: "https://cloudstationusa.com",
    technologies: ["React", "JavaScript", "Vercel", "Node.js"],
  },
  {
    year: "December 2023 - Present",
    role: "Website Administrator",
    company: "Rise-Up Kenya",
    location: "Salgaa, Kenya - Remote",
    description: `Constructed website (hosted via shopify) for donations for the community in Salgaa, Kenya through Non-Profit Rise-Up Kenya. 
      Raised $7000+ (Increasing monthly) for those in need. Working on migrating to a full stack website with the StripeAPI to minimize cost
      and improve website quality. See at `,
    link: "https://riseupkenya.org/",
    technologies: ["React", "Next.js", "SpringBoot", "Stripe"],
  },
  {
    year: "January 2023 - Present",
    role: "Computer Science Teaching Assistant",
    company: "George Mason University",
    location: "Fairfax, VA",
    description: `Assisted with various George Mason CS courses such as Data Structures and Algorithms (CS310, current) 
      Object-Oriented Programming (CS 211) and Introduction to Programming (CS 112). 
      Answered student questions on projects and miscellaneous questions on online forum (Piazza). 
      Instructed students regarding lab assignments during lab periods as well as proctoring tests.
      Aided over 3000 George Mason computer science students in total time as teaching assistant.`,
    technologies: ["Java", "Python"],
  },
];

export const PROJECTS = [
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
      answers based on the given context. `,
    technologies: ["Langchain", "Pinecone", "Firebase", "OpenAI", "Next.js"],
    websiteLink: "https://ai-customer-support-three-phi.vercel.app/",
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

export const COURSES = ` Data Structures and Algorithms, Object Oriented Programming, Low-level Programming, Software Engineering, 
  Analysis of Algorithms, Computer Systems and Programming, Quantum Algorithms, Introduction to AI`;

export const CONTACT = {
  address: "Sterling, Virginia",
  phoneNo: "+1 703 939 4983",
  email: "alexfarouz@gmail.com",
};
