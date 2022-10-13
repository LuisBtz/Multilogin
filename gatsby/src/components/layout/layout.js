import React from "react";
import '../styles/styles.scss'
import Header from "./header";
import Footer from "./footer";


const Layout = ({children}) => {
    return(
        <>
            <div className="container">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>

    )
}

export default Layout