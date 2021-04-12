import React from 'react'
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'
import PostContent from '../../components/post-page/postcontent'
import * as apiService from '../../api/ghost-api'
import Loading from '../../components/loading/loading';
import Mainsection404 from '../../components/notfound-page/mainsection404';
export const getStaticProps = async ({ params }) => {
    const { post, error } = await apiService.getPost(params.slug);
    return {
        props: {
            post: post ? post : null,
            error: error ? error : null
        },
        revalidate: 10
    };
}
export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true,
    }
}
const Post = (props) => {
    const { post, error } = props;
    const router = useRouter();
    if (router.isFallback) {
        return <Loading />
    }
    if (error) {
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
                title={`${post.title} | Colectivo Místico`}
                description={post.custom_excerpt ? post.custom_excerpt : 'Articulo de Colectivo Místico'}
            />
            <Layout>
                <PostContent content={post}></PostContent>
            </Layout>
        </>
    )
}

export default Post
