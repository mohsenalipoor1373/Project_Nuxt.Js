import Vuex from 'vuex'
import data from '@/api/data.json'

export default () => {
  return new Vuex.Store({
    state: {
      loadedCards: [],
      loadedGetCards: [],
    },
    mutations: {
      setPosts(state, cards) {
        state.loadedCards = cards;
      },
      getPosts(state, cards) {
        state.loadedGetCards = cards;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        console.log('nuxtServerInit');
        return new Promise((resolve) => {
          vuexContext.commit('setPosts', data)
          resolve()
        })
      },

      setPosts(context) {
        context.commit('setPosts', data)
      },


      async getPosts({commit}) {
        const Card = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts/')
        commit('getPosts', Card)
      }


    },
    getters: {
      loadedCards(state) {
        return state.loadedCards
      },
      loadedGetCards(state) {
        return state.loadedGetCards
      },
    },
  })
}
