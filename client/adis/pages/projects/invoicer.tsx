import type { NextPage } from 'next'
import ProjectPageTemplate from '../../components/projectPage/projectPageTemplate'
import data from '../../data.json'

const AboutPage: NextPage = () => {

    return (
      <>
      <ProjectPageTemplate
      name={data.name}
      photo={data.photo}
      />
      </>
    )
  }
  
  export default AboutPage