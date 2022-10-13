import * as React from "react"
import Logo from "../components/home/Logo";
import Newsletter from "../components/home/Newsletter";
import Slider from "../components/home/Slider";
import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo"


const IndexPage = () => {
  return(
    <Layout >
        <Seo title='Claim the offer' description='To claim, simply fill in your email below and follow the instructions that appear.' image='./screenshot.png' />
        <div className="home">
          <Newsletter />
          <Logo />
          <Slider />
        </div>
    </Layout>
  )
}

export default IndexPage