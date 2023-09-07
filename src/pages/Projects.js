import React from 'react';
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';


const Projects = () => {
   const ProjectList = [{
    id:1,
    name: "Student Database App",
    imageUrl: p2,
    projectUrl:'https://project-2-1940.onrender.com/'
   },
   {
    id:1,
    name: "Bookmark App",
    imageUrl: p3,
    projectUrl:'https://melodious-cupcake-9295ad.netlify.app/'
   },
   {
    id:1,
    name: "interDecor Blog App",
    imageUrl: p4,
    projectUrl:'https://illustrious-tanuki-5c7ded.netlify.app/#/'
   },
   

];
return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {ProjectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title><a href= {item.projectUrl}target='_blank' rel="noreferrer" >{item.name}</a></Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
