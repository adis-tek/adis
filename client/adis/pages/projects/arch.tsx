import type { NextPage } from 'next'
import Hero from '../../components/hero/hero'
import Footer from '../../components/footer/footer'
import ProjectPageTemplate from '../../components/projectPage/projectPageTemplate'
import data from '../../data.json'

const Arch: NextPage = () => {

    return (
      <>
      <Hero 
        video={data.video}
      />
      <ProjectPageTemplate />
      <Footer />
      </>
    )
  }
  
  export default Arch