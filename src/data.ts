import { i, link } from "framer-motion/client";
import java from "../public/LOGOS/JAVA.png";
import python from "../public/LOGOS/Python.jpeg";
import c from "../public/LOGOS/C.png";
import sql from "../public/LOGOS/Sql.png";
import html from "../public/LOGOS/HTML.png";
import css from "../public/LOGOS/css.png";
import javascript from "../public/LOGOS/JAVAscript.png";
import git from "../public/LOGOS/git.png";
import github from "../public/LOGOS/github.png";
import vscode from "../public/LOGOS/vs.jpeg";
import postman from "../public/LOGOS/postman.png";
import mongodb from "../public/LOGOS/mongodb.png";
import mysql from "../public/LOGOS/mysql.png";
import react from "../public/LOGOS/reactjs.png";
import nextjs from "../public/LOGOS/nextjs.png";
import express from "../public/LOGOS/expressjs.png";
import nodejs from "../public/LOGOS/nodejs.jpeg";
import firebase from "../public/LOGOS/firebase.png";
import fastapi from "../public/LOGOS/fastapi.png";
export const projects = [
  {
    title: "Wellness-Fusion",
    description: "A front-end web application integrating AI-driven mental health support and personalized yoga recommendations",
    image: "/wellness-fusion.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "NLP"],
    points: [
      "Developed a front-end  web application integrating AI-driven mental health support for mental wellness and personalized yoga recommendations for physical wellness",
      "Built an interactive chatbot using NLP to provide real-time mental wellness assistance",
      "Integrated an interactive yoga module that suggests asanas based on age and fitness level",
      "Designed a responsive and user-friendly UI ensuring accessibility for users across different age groups"
    ],
    link: "https://wellness-fusion.vercel.app/"
  },
  {
    title: "Forest Wildfire Detection",
    description: "Developed a deep learning model to detect forest wildfires from images as part of a Machine Vision course project. The system helps identify fire-prone areas early using image analysis techniques",
    technologies: ["Neural Network", "Deep Learning", "Python","Computer Vision","FastAPI", "Data Visualization"],
    points: [
      "Designed and trained a deep convolutional neural network (CNN) incorporating transfer learning (ResNet50 and EfficientNet architectures) to detect wildfire patterns in diverse forest images.",
      "Implemented multi-stage image preprocessing and augmentation, including histogram equalization, denoising, rotation, scaling, and brightness normalization, to enhance model generalization.",
      "Incorporated semantic segmentation using U-Net to highlight affected regions, enabling more precise localization of wildfires beyond simple classification.",
       "Evaluated model performance using advanced metrics like IoU (Intersection over Union), F1-score, precision-recall curves, and confusion matrices to ensure high reliability in real-world scenarios"
    ],
    link: "https://forest-wildfire-detection.vercel.app/"
  },
  {
    title: "Skincare-Recommendation-System",
    description: "A web application that recommends skincare products based on user skin type and concerns using a machine learning model",
    // image: "",
    technologies: ["React.js", "OpenCv", "Flask", "Python"],
    points: [
      "Uses Computer Vision and CNN models to automatically detect skin tone, skin type, and acne level from a selfie",
      "Ensures proper lighting and single-face detection using face-api.js before capturing the image for better accuracy.",
      "Applies transfer learning (EfficientNet-B0) to classify skin type and acne severity with good accuracy.",
      "Built with React (frontend) and Flask (backend), providing smooth navigation from selfie capture to personalized recommendations."
    ],
    link: "https://github.com/PranavSriram39/Skincare-Recommendation-System/"
  },
  {
    title: "StudySphere",
    description: "StudySphere is a full-stack virtual group study platform designed for students, by students, enabling seamless collaboration between institutions, teachers, and learners through interactive learning, assessments, and discussion channels, including private and anonymous study groups.",
    // image: "",
    technologies: ["Next.js","Socket","Node.js","Mongo.DB",],
    points: [
      "Designed and developed a full-stack virtual group study platform enabling real-time collaboration between students and teachers with organization-based access, dynamic channel creation (Discord-like), and role-based interactions",
      "Added real-time chat using WebSockets, allowing users to send messages and share files like PDFs, images, and documents using Cloudinary",
      "Created organization-based channels, including general channels for everyone and private groups for focused or anonymous study",
      "Developed assessments, leaderboards, and progress charts so students can track their learning and stay motivated"
    ],
    link:"https://studysphere39.vercel.app/"
  },
    {
     title: "BigOone",
     description: "Built an AI chatbot that can answer health-related questions using both a trained language model and documents like PDFs. Focused on generating accurate responses and evaluating model performance.",
     // image: "/wellness-fusion.jpg",
     technologies: ["Next.js","Socket","Node.js","Mongo.DB",],
     points: [
       "Built a chatbot using PyTorch: Created an AI chatbot that can understand and reply to health questions using a transformer model.",
       "Tested different models: Tried out Hugging Face models like Falcon, Bloom, and Llama2 to see which one gives the best answers.",
       "Used PDFs for answers: Implemented RAG so the chatbot can read PDF documents and answer questions from them.",
       "Checked chatbot quality: Measured how good the chatbot’s answers were using evaluation metrics, achieving a BLEU score of 0.4."
     ],
     link:"https://github.com/PranavSriram39/Healthcare-Chatbot"
   }
];

export const skillCategories = {
  languages: [
    {
      
      data:"Java",
      image:java,
      link:"https://www.oracle.com/java/"
    },
    {
      data:"Python",
      image:python,
      link:"https://www.python.org/"
    },
    {
      data:"C",
      image:c,
      link:"https://en.cppreference.com/w/c"
    },
    {
      data:"SQL",
      image:sql,
      link:"https://www.mysql.com/"
    }
  ],
  technologies: [
    {
      data: "HTML",
      image:html,
      link:"https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      data: "CSS",
      image:css,
      link:"https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      data: "JavaScript",
      image:javascript,
      link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    }
  ],
  tools: [
    {
      data: "Git",
      image:git,
      link:"https://git-scm.com/"
    },
    {
      data: "GitHub",
      image:github,
      link:"#"
    },
    {
      data: "VS Code",
      image:vscode,
      link:"https://code.visualstudio.com/"
    },
    {
      data: "Postman",
      image:postman,
      link:"https://www.postman.com/"
    }
    
  ],
  DataBases: [
    {
      data: "MongoDB",
      image:mongodb,
      link:"https://www.mongodb.com/"
    },
    {
      data:"MySQL" ,
      image:mysql,
      link:"https://www.mysql.com/"
    },
    {
      data:"Firebase",
      image:firebase,
      link:"https://firebase.google.com/"
    }
  ],
  Frameworks: [
    {
      data: "React.js",
      image:react,
      link:"https://react.dev/"
    },
    {
      data: "Next.js",
      image:nextjs,
      link:"https://nextjs.org/" 
     },
     {
      data: "Express.js",
      image:express,
      link:"https://expressjs.com/"
     },
     {
      data:"Node.js",
      image:nodejs,
      link:"https://nodejs.org/en/"
     },
     {
      data: "FastAPI",
      image:fastapi,
      link:"https://fastapi.tiangolo.com/"
     }
  ]
};

export const certifications = [
  {
    title: "Programming Essentials in Python",
    issuer: "CISCO",
    link: "https://drive.google.com/file/d/1Pi4c8C5V7NsrQMIjPq59O1w9uV-ILuK2/view?usp=sharing"
  },
  {
    title: "Programming  in JAVA",
    issuer: "INFOSYS",
    link: "https://drive.google.com/file/d/13UwkrtyIRfaM5e7kAQAODIu1vhAJBKpD/view?usp=sharing"
  },
  {
    title: "Basics of Networking",
    issuer: "CISCO",
    link: "https://drive.google.com/file/d/1KmS59dHP5MiIKNxWTzar8RhFealF94z9/view?usp=sharing"
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    link: "https://drive.google.com/file/d/1ebn6NNp4DhrMgY-vDx5NRai2TNuV1o-X/view?usp=sharing"
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "J.P. Morgan Chase & Co",
    link: "https://drive.google.com/file/d/1GPzMi_bY_TozbKsYm773afIkyTWPdePJ/view?usp=sharing"
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "CISCO",
    link: ""
  },
  {
    title: "CCNA Introduction to Networks",
    issuer: "CISCO",
    link: ""
  }
  
];

// export const experience = [
//    {
//     title:"Software Development Intern",
//     organization: "Pragament Tech Solutions Pvt Ltd",
//     period: "April,2025-July,2025",
//     description: "Built a scalable web application using Flask and MongoDB. Collaborated with team members in an agile environment,participating in regular planning and execution of tasks."
//   },
//   {
//     title: "Event Manager",
//     organization: "Data Science Visionary Hub BVRIT",
//     period: "2022 - Present",
//     description: "Led the coordination and execution of various technical events, including workshops and seminars, attracting participation from diverse groups of enthusiasts and professionals"
//   }
 
// ];