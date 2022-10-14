import { Link } from "gatsby";
import React from "react";
import { motion } from "framer-motion";


const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 2,
      }
    }
  }



const Footer = () => {
    return(
        <motion.footer 
        variants={container}
        initial="hidden"
        animate="show"
      >
            <h2>Multilogin</h2>
            <ul>
                <li><Link to='/'>Pricing</Link></li>
            </ul>
        </motion.footer>
    )
}

export default Footer