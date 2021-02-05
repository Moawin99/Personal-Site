import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import IntroContainer from "../components/introContainer"
import AboutMe from "../components/aboutMeContainer"

const IndexPage = () => (
  <>
  <Header />
  <Layout>
    <IntroContainer />
    <AboutMe />
  </Layout>
  </>
)

export default IndexPage
