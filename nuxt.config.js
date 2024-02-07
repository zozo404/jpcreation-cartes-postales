export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'JP CREATION - cartes postales',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Création de cartes postales. Jeune, je dessinais naturellement bien et mes dessins ou caricatures de profs plaisaient à mes camarades de classe. Mes parents, persuadés d’héberger le futur Picasso, m’ont payé des cours de dessin par correspondance. Trop difficiles pour l’enfant que j’étais, j’ai troqué mon pinceau contre la pratique de nombreux sports et ceci pendant plusieurs décennies; si bien que pendant 41 ans je n’ai pas touché un crayon. Pas le moindre dessin !' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/jp.png' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Italianno&family=Lexend:wght@300&display=swap"
      },
    ]
  },
  script: [
    {
      src: "https://kit.fontawesome.com/5d5fd51001.js",
      crossorigin: "anonymous"
    },
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // font-awesome
    "@plugins/font-awesome"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // nuxt-image
    "@nuxt/image"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    '@nuxt/image',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  sanity: {
    projectId: "vjs2pfjl",
    minimal: true
  },
  image: {
    sanity: {
      projectId: "vjs2pfjl"
    }
  },
  // important for generating error pages
  generate: {
    fallback: true,
  },
}
