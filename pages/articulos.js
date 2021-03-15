import React from 'react'
import Mainsectionarticles from '../components/articles-page/mainsectionarticles'
import Layout from '../components/layout/layout'
import { NextSeo } from 'next-seo';
const Articulos = () => {
  return (
    <>
      <NextSeo
        title="Tienda de regalos, productos artesanales, obras de arte, joyería de acero inoxidable | Colectivo místico "
        description="Comprometidos con promover el talento sinaloense , traemos en un solo lugar diferentes propuestas de productos desde el año de 2019"
      />
      <Layout>
        <Mainsectionarticles />
      </Layout>
    </>
  )
}

export default Articulos
