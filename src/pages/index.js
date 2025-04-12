import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import IntroContainer from "../components/introContainer"
import AboutMe from "../components/aboutMeContainer"
import ProjectBox from "../components/projectContainer"
import ResumeBox from "../components/resumeContainer"
import Footer from "../components/footer"
import RecordBox from "../components/recordContainer"

const IndexPage = () => (
  <>
  <Layout>
    <Header />
    <IntroContainer />
    <AboutMe />
    <ProjectBox />
    <ResumeBox />
    <RecordBox />
    <Footer />
  </Layout>
  </>
)

export default IndexPage
