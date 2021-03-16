import React from 'react'
import { Cardssectionindex } from '../components/index-page/cardssectionindex/cardssectionindex'
import { NextSeo } from 'next-seo';
import { Mainsectionindex } from '../components/index-page/mainsectionindex/mainsectionindex'
import { Productssectionindex } from '../components/index-page/productssectionindex/productssectionindex'
import Layout from '../components/layout/layout'

const Index = () => {
  return (
    <>
      <NextSeo
        title="Tienda de regalos, productos artesanales, obras de arte, joyería de acero inoxidable | Colectivo místico "
        description="Visita la tienda con los mejores regalos,obras de arte, cerámica, joyería de acero inoxidable y mas– en Colectivo místico encontraras las mejores propuestas de los mejores talentos de Sinaloa "
      />
      <Layout>
        <Mainsectionindex />
        <Productssectionindex />
        <Cardssectionindex />
      </Layout>
    </>
  )
}

export default Index

