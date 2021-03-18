import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import IntroContainer from "../components/introContainer"
import AboutMe from "../components/aboutMeContainer"
import ProjectBox from "../components/projectContainer"
import ResumeBox from "../components/resumeContainer"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
  <Header />
  <Layout>
    <IntroContainer />
    <AboutMe />
    <ProjectBox />
    <ResumeBox />
    <Footer />
  </Layout>
  </>
)

export default IndexPage
