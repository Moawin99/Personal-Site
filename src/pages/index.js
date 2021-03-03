import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import IntroContainer from "../components/introContainer"
import AboutMe from "../components/aboutMeContainer"
import ProjectBox from "../components/projectContainer"

const IndexPage = () => (
  <>
  <Header />
  <Layout>
    <IntroContainer />
    <AboutMe />
    <ProjectBox />
  </Layout>
  </>
)

export default IndexPage
