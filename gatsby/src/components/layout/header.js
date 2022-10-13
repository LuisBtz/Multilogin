import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const Header = () => {
    return(
        <header>
            <Link to='/' className="logo">
                <StaticImage
                    src="img/logo.png"
                    alt="Multilogin Logo"
                    placeholder="tracedSVG"
                    layout="fullWidth"
                />
            </Link>
        </header>
    )
}

export default Header