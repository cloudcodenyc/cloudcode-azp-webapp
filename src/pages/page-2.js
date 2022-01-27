import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="cloudcodenyc: Projects" />
    <h1>Projects</h1>
    <p>Welcome to cloudcodenyc's Projects</p>
    <StaticImage
      src="../images/img_projects.jpg"
      width={1280}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Connecting"
      style={{ marginBottom: `1.45rem` }}
    />	
    <p><Link to="/">Go back to the homepage</Link></p>
  </Layout>
)

export default SecondPage
