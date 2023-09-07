import React from "react";
import { motion } from "framer-motion";
import { ListGroup } from "react-bootstrap";


const Contact = () => {
  
  return (
    <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      
    >
      <h2>Contact</h2>

      
          <div className="contact-data">
            
            <p>
            For inquiries or need to get in touch with me, please don't hesitate
             to email me at <font> marysanni01@gmail.com</font> I am interested
              in roles related to product design, Front-end development, 
              freelance work, apprenticeships, or any job opportunities.
               I am presently based in Richmond, Texas and I am available 
               for both on-site and remote work.
            </p>
           
          
              <ListGroup horizontal>
                <ListGroup.Item>
                  <a href="https://www.linkedin.com/in/misanni/" target='_blank' rel="noreferrer" >Linkedin</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://github.com/misanni/" target='_blank' rel="noreferrer" >Github</a>
                </ListGroup.Item>
            </ListGroup>
            
          </div>
        
    </motion.div>
  );
};

export default Contact;