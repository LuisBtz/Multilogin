import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { StaticImage } from "gatsby-plugin-image"

const Slider = () => {
    return(
        <div className="slider">
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
                            <strong>Nulla vitae elit libero, a pharetra augue mollis interdum.</strong>
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
                            <strong>Nulla vitae elit libero, a pharetra augue mollis interdum.</strong>

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
                            <strong>Nulla vitae elit libero, a pharetra augue mollis interdum.</strong>
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
                            <strong>Nulla vitae elit libero, a pharetra augue mollis interdum.</strong>

                        </div>
                    </div>
                </Carousel.Item>


                
            </Carousel>
        </div>
    )
}

export default Slider