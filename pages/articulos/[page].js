import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Mainsectionarticles from '../../components/articles-page/mainsectionarticles'
import Layout from '../../components/layout/layout'
import { NextSeo } from 'next-seo';
import * as apiService from '../../api/ghost-api';
import Loading from '../../components/loading/loading'
import Mainsection404 from '../../components/notfound-page/mainsection404'
export const getStaticProps = async ({ params }) => {
  const { page } = params;
  const { posts, numPages, contentError } = await apiService.getPosts(page);
  return {
    props: {
      posts: posts ? posts : null,
      numPages: numPages ? numPages : null,
      contentError: contentError,
      currentPage: page ? page : null
    },
    revalidate: 1
  };
}
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  }
}
const Articulos = (props) => {
  const { posts, numPages, contentError, currentPage } = props;
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />
  }
  if (contentError) {
    return <>
      <NextSeo
        title='¡Oops pagina no encontrada !'
        description='No se encontró la pagina solicitada '
        
      />
      <Mainsection404 />
    </>
  }
  return (
    <>
      <NextSeo
        title="Tienda de regalos, productos artesanales, obras de arte, joyería de acero inoxidable | Colectivo místico "
        description="Comprometidos con promover el talento sinaloense , traemos en un solo lugar diferentes propuestas de productos desde el año de 2019"
      />
      <Layout>
        <Mainsectionarticles posts={posts} numPages={numPages} currentPage={currentPage} />
      </Layout>
    </>
  )
}

export default Articulos
