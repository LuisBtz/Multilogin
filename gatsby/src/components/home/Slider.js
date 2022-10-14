import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { StaticImage } from "gatsby-plugin-image"
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

const Slider = () => {
    return(
        <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className='slider'
      >
            <Carousel
                autoPlay={false}
                controls={true}
                indicators={false}
            >
                <Carousel.Item>
                    <div className="item">
                        <div className="image">
                            <StaticImage
                                style={{ height: "100%", width: "100%" }}
                                src="img/review1.jpg"
                                alt="Multilogin Logo"
                                placeholder="tracedSVG"
                                layout="fullWidth"
                            />
                        </div>
                        <div className="text">
                            <p>“Virtual machines just weren't feasible. The process was 'hope and pray' they don't ban you. So I realized I needed something to protect us.”</p>
                            <strong>Adam, Owner, Rocket 31</strong>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image">
                            <StaticImage
                                style={{ height: "100%", width: "100%" }}
                                src="img/review2.jpg"
                                alt="Multilogin Logo"
                                placeholder="tracedSVG"
                                layout="fullWidth"
                            />
                        </div>
                        <div className="text">
                            <p>“Virtual machines just weren't feasible. The process was 'hope and pray' they don't ban you. So I realized I needed something to protect us.”</p>
                            <strong>Adam, Owner, Rocket 31</strong>

                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="item">
                        <div className="image">
                            <StaticImage
                                style={{ height: "100%", width: "100%" }}
                                src="img/review2.jpg"
                                alt="Multilogin Logo"
                                placeholder="tracedSVG"
                                layout="fullWidth"
                            />
                        </div>
                        <div className="text">
                            <p>“Virtual machines just weren't feasible. The process was 'hope and pray' they don't ban you. So I realized I needed something to protect us.”</p>
                            <strong>Adam, Owner, Rocket 31</strong>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image">
                            <StaticImage
                                style={{ height: "100%", width: "100%" }}
                                src="img/review1.jpg"
                                alt="Multilogin Logo"
                                placeholder="tracedSVG"
                                layout="fullWidth"
                            />
                        </div>
                        <div className="text">
                            <p>“Virtual machines just weren't feasible. The process was 'hope and pray' they don't ban you. So I realized I needed something to protect us.”</p>
                            <strong>Adam, Owner, Rocket 31</strong>

                        </div>
                    </div>
                </Carousel.Item>


                
            </Carousel>
        </motion.div>
    )
}

export default Slider