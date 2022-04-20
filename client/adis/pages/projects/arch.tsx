import type { NextPage } from 'next'
import Hero from '../../components/hero/hero'
import Footer from '../../components/footer/footer'
import ProjectPageTemplate from '../../components/projectPage/projectPageTemplate'
import data from '../../data.json'

const Arch: NextPage = () => {

    return (
      <>
      <Hero 
        video={data.projects.arch.video}
      />
      <ProjectPageTemplate
        introHeading={data.projects.arch.intro.heading}
        introExcerpt={data.projects.arch.intro.excerpt}
        button1={data.projects.arch.intro.button1}
        button2={data.projects.arch.intro.button2}
        bodyHeading={data.projects.arch.body.heading}
        bodyExcerpt={data.projects.arch.body.excerpt}




      />
      <Footer />
      </>
    )
  }
  
  export default Arch