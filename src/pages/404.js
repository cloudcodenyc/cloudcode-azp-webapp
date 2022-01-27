import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>	
    <StaticImage
      src="../images/404.jpg"
      width={1280}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="404 Error"
      style={{ marginBottom: `1.45rem` }}
    />		
  </Layout>
)

export default NotFoundPage
