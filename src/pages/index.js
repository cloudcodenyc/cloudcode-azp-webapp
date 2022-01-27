import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>cloudcodenyc-azp-webapp</h1>
    <p>Welcome to cloudcodenyc's React.js static-webapp built with Gatsby</p>
    <p>Now we wait for something great.</p>
    <StaticImage
      src="../images/cloudcode-script.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Blue Script"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to Projects</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
