import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg"
import project6 from "../assets/projects/project-6.jpg"
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
    year: "July 2024 - Present",
    role: "Software Engineering Fellow",
    company: "Headstarter AI",
    location: "Washington, DC - Remote",
    description: `Building 5+ AI apps and API’s using NextJS, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users. 
      Developing projects from design to deployment leading 3 engineering fellows using MVC design pattern. 
      Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns`,
    technologies: ["Javascript", "React.js", "Next.js", "OpenAI"],
  },
  {
    year: "May 2024 - Present",
    role: "Website Administrator",
    company: "CloudStation",
    location: "Los Angeles, CA - Remote",
    description: `Engineered fully functional website for CloudStation using React.js, HTML, CSS, and JavaScript.
      Features comprehensive forms to allow for business inquiries and other interests between client and vendors.
      Over 1000 visits by venue owners/managers, business owners and potential clients. See at `,
    link: 'https://cloudstationusa.com',
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
  },
  {
    year: "December 2023 - Present",
    role: "Website Administrator",
    company: "Rise-Up Kenya",
    location: "Salgaa, Kenya - Remote",
    description: `Constructed website (hosted via shopify) for donations for the community in Salgaa, Kenya through Non-Profit Rise-Up Kenya. 
      Raised $7000+ (Increasing monthly) for those in need. Working on migrating to a full stack website with the StripeAPI to minimize cost
      and improve website quality. See at `,
    link: 'https://riseupkenya.org/',
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
    title: "AI Assistant",
    image: project1,
    description: `Constructed a Next.js RAG AI chatbot to help users with general purpose questions, but more specifically help aspiring SWEs break into tech.
      The frontend was built with React, Next.js and TailwindCSS, while the backend was built using Python and Langchain for the RAG. Leveraged JWT token generation
      from the Clerk API with a Firebase integration to store data. Utilized Langchain and Pinecone's vector database to allow for OpenAI GPT-4o-mini to provide more accurate
      answers based on the given context. `,
    technologies: ["Langchain", "Pinecone", "Firebase", "OpenAI", "Next.js"],
    websiteLink: "https://ai-customer-support-three-phi.vercel.app/"
  },

  {
    title: "Pantry Tracker",
    image: project2,
    description: `Built a Next.js pantry tracker app to track a user's pantry inventory. Features the react-camera module to 
      take a picture of a pantry item which is sent to the OpenAI GPT-4o-mini model to analyze the image and add it to the users inventory. Based on a users inventory, the
      same OpenAI model generates a recipe with detailed duration, ingredients and instructions. Frontend built with Next.js + React and backend built with Firebase,
      Javascript. Utilized RESTful API's from OpenAI, Clerk for user login and Unsplash for image fetching. Holds 100+ users. `,
    technologies: ["Next.js", "React", "Firebase", "Javascript", "OpenAI"],
    websiteLink: "https://pantry-tracker-henna-sigma.vercel.app/"
  },

  {
    title: "Sorting Visualizer",
    image: project3,
    description:
      `A fully functional website used to visualize sorting algorithms such as merge sort, quick sort, heap sort and bubble sort. Allows for 
      adjustable number of data and adjustable sorting speed. Holds 200+ users composed of fellow George Mason University students from Data Structures and Algorithms course
      I assisted in. `,
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    websiteLink: "https://alexfarouz.github.io/sorting-visualizer/",
  },
  
  {
    title: "Kruskal's Algorithm Simulator",
    image: project4,
    description:
      `A visual simulator for Kruskal's Minimum Spanning Tree Algorithm fully implemented in Java. Includes a Swing GUI with editable
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
  {
    title: "Heart Disease Detector",
    image: project6,
    description: `Created an interactive web-app to detect heart disease based on 13 different parameters such as age, gender, cholesterol levels and more.
      Implemented K Nearest Neighboors (KNN) machine learning algorithm by referencing 5000+ cases of heart disease by a csv file from kaggle.`,
    technologies: ["Python", "HTML", "CSS", "JavaScript", "Flask"],
  },
];

export const COURSES = ` Data Structures and Algorithms (Java), Object Oriented Programming (Java), 
  Low-level Programming (C), Quantum Algorithms, Formal Methods and Models, Linear Algebra, Numerical Analysis.`

export const CONTACT = {
  address: "Sterling, Virginia",
  phoneNo: "+1 703 939 4983",
  email: "alexfarouz@gmail.com",
};
