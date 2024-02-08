/* eslint-disable quotes */

// !! Exp for example, replace this with your data !!

// state
export const state = () => ({
    cartesPostales: [], 
    imageSite: [],
})

// getters
export const getters = {
    getCartesPostales(state) {
        return state.cartesPostales
    },
    getImageSite(state) {
        return state.imageSite
    },
}

// mutations
export const mutations = {
    SET_CARTESPOSTALES(state, cartesPostales) {
        state.cartesPostales = cartesPostales
    },
    SET_IMAGESITE(state, imageSite) {
        state.imageSite = imageSite
    },
}


export const actions = {
    async nuxtServerInit({ dispatch }, { $axios }) {
        // Change "id_address" to the id of your sanity
        // v2022-03-07 = version, you can change
        const cartesPostales = await $axios.$get('https://vjs2pfjl.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "cartesPostales"]{name, immanquables,"imageId":image{asset,alt}, stripeUrl}')

        const imageSite = await $axios.$get('https://vjs2pfjl.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "imageSite"]{name, "imageId":image{asset,alt}, stripeUrl, typesCartes}')


        await dispatch('setCartesPostales', cartesPostales.result)
        await dispatch('setImageSite', imageSite.result)
    },
    setCartesPostales({ commit }, cartesPostales) {
        commit('SET_CARTESPOSTALES', cartesPostales)
    },
    setImageSite({ commit }, imageSite) {
        commit('SET_IMAGESITE', imageSite)
    },
}
