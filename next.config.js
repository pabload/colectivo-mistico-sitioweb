module.exports = {
    generateEtags: false,
    images: {
        domains: [
            'assets.example.com'
            , 'cdn.pixabay.com',
            'static.ghost.org',
            'res-5.cloudinary.com',
            'res-4.cloudinary.com',
            'res-3.cloudinary.com',
            'res-2.cloudinary.com',
            'res-1.cloudinary.com',
            'images.unsplash.com'
        ],
    },
    async redirects() {
        return [
            {
                source: '/articulos',
                destination: '/articulos/1',
                permanent: true,
            },
        ]
    },
}