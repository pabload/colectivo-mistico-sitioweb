import React from 'react'
import Brandssectionabout from '../components/about-page/brandssectionabout/brandssectionabout'
import Infosectionabout from '../components/about-page/infosectionabout/infosectionabout'
import Maintsectionabout from '../components/about-page/mainsectionabout/maintsectionabout'
import Layout from '../components/layout/layout'
import { NextSeo } from 'next-seo';
const SobreNosotros = () => {
  return (
    <>
      <NextSeo
        title="Tienda de regalos, productos artesanales, obras de arte, joyería de acero inoxidable | Colectivo místico "
        description="Comprometidos con promover el talento sinaloense , traemos en un solo lugar diferentes propuestas de productos desde el año de 2019"
      />
      <Layout>
        <Maintsectionabout />
        <Infosectionabout />
        <Brandssectionabout />
      </Layout>
    </>
  )
}

export default SobreNosotros