import React from 'react'
import Brandssectionabout from '../components/about-page/brandssectionabout/brandssectionabout'
import Infosectionabout from '../components/about-page/infosectionabout/infosectionabout'
import Maintsectionabout from '../components/about-page/mainsectionabout/maintsectionabout'
import Layout from '../components/layout/layout'
const SobreNosotros = () => {
  return (
    <Layout>
      <Maintsectionabout/>
      <Infosectionabout/>
      <Brandssectionabout/>
    </Layout>
  )
}

export default SobreNosotros