import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
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


const Header = () => {
    return(
        <motion.header 
            variants={container}
            initial="hidden"
            animate="show"
        >
            <Link to='/' className="logo">
                <StaticImage
                    src="img/logo.png"
                    alt="Multilogin Logo"
                    placeholder="tracedSVG"
                    layout="fullWidth"
                />
            </Link>
        </motion.header>
    )
}

export default Header