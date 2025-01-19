import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT ='Passionate and detail-oriented Software Developer with a strong foundation in data structures, algorithms, and problem-solving. Proficient in Java, Python, and front-end technologies, with experience in building scalable solutions. Enthusiastic about contributing to impactful projects in AI and full-stack development while growing in a collaborative environment.'
export const ABOUT_TEXT = '  My passion lies in harnessing the power of artificial intelligence to create innovative solutions that drive impactful result Whether it’s designing intelligent systems that enhance user experiences or building data-driven tools that solve real-world problems, I love taking ideas from concept to implementation and iteratively refining them to deliver excellence'
export const EXPERIENCES = [
  {
    year: "Aug 2024 - Sept 2024",
    role: "AI Intern",
    company: "Coincent",
    description: `Implemented end-to-end solutions for data-driven decision-making, utilizing libraries such as TensorFlow, NumPy, and Pandas to create impactful machine learning models.`,
    technologies: ["Python", "TensorFlow", "mongoDB","NumPy"],
  },
  {
    year: "June 2024 - July 2024",
    role: "Full Stack Developer - Intern",
    company: "TECHARDORS",
    description: `Completed an intensive internship in Full Stack Development, gaining hands-on experience in front-end and back-end technologies. Recognized for implementing automated solutions that reduced customer support tickets by 25%.`,
    technologies: ["HTML", "CSS","MERN Stack"],
  }
];

export const PROJECTS = [
  {
    title: "House Price Prediction",
    image: project1,
    description:
      "A House Price Prediction project leverages machine learning algorithms to predict the sale prices of residential homes based on various features.",
    technologies: [ "python", "typescript", "framer motion", "tailwindcss"],
  },
  
  {
    title: "Personalized Ai Search Assistant",
    image: project3,
    description:
      "The Personalized AI Search Engine is an advanced, AI-powered platform designed to deliver highly customized search results tailored to individual users' preferences, interests, and context.",
    technologies: ["React", "Flask", "javascript", "Tensorflow"],
  },
  {
    title: "Cold Mail Generator",
    image: project4,
    description:
      "Generates tailored email content based on recipient details such as name, company, industry, and specific pain points.",
    technologies: ["react", "react-router", "javascript", "tailwindcss","Python"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9385871997",
  email: "hariharasudhanga@gmail.com",
};
