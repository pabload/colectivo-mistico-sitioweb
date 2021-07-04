const blogUrl = process.env.BLOG_URL;
const contentApikey = process.env.CONTENT_API_KEY;
const postsQuery = 'reading_time,title,slug,feature_image,created_at,custom_excerpt,html';
import GhostContentAPI from '@tryghost/content-api'
const api = new GhostContentAPI({
    url: blogUrl,
    key: contentApikey,
    version: "v3"
});
export const getPosts = async (page) => {
    const pageNumber = parseInt(page);
    if (isNaN(page)) {
        return {
            contentError: 'no page found'
        }
    }
    const res = await api.posts.browse({ page: pageNumber, fields: [postsQuery],include:['authors'] })
    if (page > res.meta.pagination.pages || page == 0||res.length==0) {
        return {
            contentError: 'no page found'
        }
    }
    return {
        posts: res,
        numPages: res.meta.pagination.pages,
        contentError: null
    };
}
export const getPost = async (slug) => {
    try {
        const res = await api.posts.read({slug: slug },{include:'authors'})
        return {
            post: res
        }
    } catch (error) {
        return {
            error: true
        }
    }
}
