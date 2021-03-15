import React from 'react'
import Mainsectioncontact from '../components/contact-page/mainsectioncontact/mainsectioncontact'
import Layout from '../components/layout/layout'
import { NextSeo } from 'next-seo';
const Contacto = () => {
  return (
    <>
      <NextSeo
        title="Tienda de regalos, productos artesanales, obras de arte, joyería de acero inoxidable | Colectivo místico "
        description="Únete y forma parte de un grupo de personas apasionadas a sus ideas y proyectos"
      />
      <Layout>
        <Mainsectioncontact />
      </Layout>
    </>
  )
}

export default Contacto

