import React from 'react'
import { Cardssectionindex } from '../components/index-page/cardssectionindex/cardssectionindex'

import { Mainsectionindex } from '../components/index-page/mainsectionindex/mainsectionindex'
import { Productssectionindex } from '../components/index-page/productssectionindex/productssectionindex'
import Layout from '../components/layout/layout'

const Index = () => {
  return (
    <Layout>
      <Mainsectionindex />
      <Productssectionindex />
      <Cardssectionindex/>
    </Layout>
  )
}

export default Index

