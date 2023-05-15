import { color } from "framer-motion";
import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    shopify,
    carrent,
    jobit,
    tripguide,
  threejs,
  rode,
  imdb,
  paytm,
  shop,
  ecommerce,
  lodgist,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    { 
      title: "FrontEnd Developer",
      icon: backend,
    },
    {
      title: "BackEnd Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "RPA Developer (Robotics Process Automation)",
      company_name: "Lauren Information Technology",
      icon: backend,
      iconBg: "#383E56",
      date: "Jan 2022 - May 2022",
      points: [
        " Utilized the latest software development tools, techniques, and approaches.",
        " Worked on internal projects with great care.",
        " Worked to solve complex problems using the latest Technologies such as AA360.",
        " Maintained up-to-date knowledge of all RPA new Technologies."
      ],
    },
    {
      title: "Mern Stack Internship Project",
      company_name: "iNeuron",
      icon: web,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - May 2023",
      points: [
        " Developing the Hotel Booking from scrach",
        " Using Reat, Tailwind, and database MonogDb",
        " Learned to solve complex problem"
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "MERN Hotel Booking App",
      description:
        "Web-based project in this project i have made a booking app, that allows user to book place, advertise the place",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "aws (amazon management system)",
          color: "blue-text-gradient"
        },
      ],
      image: lodgist,
      source_code_link: "https://github.com/YashKaskar/LodgistBookingApp.git",
    },
    {
      name: "E-Commerce",
      description:
        "Web application that enables users to search for products, view varitey ranges of product, and can buy them",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "chec/commerce.js",
          color: "green-text-gradient",
        },
        {
          name: "stripe/react-stripe-js",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/YashKaskar/e-commerce9.git",
    },
    {
      name: "IMDB",
      description:
        "A site where you can see latest movie upcoming movies and highrated, popular movies list with the details",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: imdb, 
      source_code_link: "https://github.com/YashKaskar/imdb.git",
    },
    {
      name: "Paytm Clone",
      description:
        "Paytm front end clone, using html and tailwind css",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
      ],
      image: paytm,
      source_code_link: "https://github.com/YashKaskar/Paytm-ui-clone--tailwind-css-.git",
    },
    {
      name: "Shopify Clone",
      description:
        "Shopify front end clone, using html and tailwind css",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
      ],
      image: shop,
      source_code_link: "https://github.com/YashKaskar/Shopify-ui-clone--tailwind-css-.git",
    },
    {
      name: "Rode Clone",
      description:
        "Rode front end clone, using html and tailwind css",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
      ],
      image: rode,
      source_code_link: "https://github.com/YashKaskar/Rode-ui-clone--tailwind-css-.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials,  projects };