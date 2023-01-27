// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Global page headers: https://go.nuxtjs.dev/config-head
    app: {
        head: {
            title: 'Soprano Mar Morán',
            htmlAttrs: {
            lang: 'es',
            title: "Mar Morán Soprano"
            },
            meta: [
            { charset: 'utf-8' },
            {'http-equiv':"Content-Security-Policy", content:"default-src 'self';"},
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'The site of the Opera Singer, Mar Moran, a great Soprano of liryc world.' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'title', content: 'Mar Moran Soprano' },
            { name: 'keywords', content: 'Opera, Singer, Soprano, Opera World, Opera Singer, Bellcanto, Music, musica clasica, classic music'}
            ],
            link: [
            { rel:"preconnect", href:"https://fonts.googleapis.com"},
            { rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin: "anonymus"},
            { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&family=Signika:wght@300;400;500;600&display=swap"},
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        },
    },
    nitro: {
        compressPublicAssets: true,
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/global.css'
    ],
    buildModules: [
        '@nuxt/image',
    ],
    modules: ['@nuxt/image-edge',
    ['@storyblok/nuxt', { accessToken: 'ltDWjrIGO2PeJE1ovr5Dvwtt' }]],
    image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
    
  }
})
