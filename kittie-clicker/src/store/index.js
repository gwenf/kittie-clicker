import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state: {
    kittenName: '',
    kittenUrl: '',
    kittens: [
      'https://placekitten.com/300/303',
      'https://placekitten.com/300/304',
      'https://placekitten.com/300/305',
    ]
  },
  mutations: {
    updateKittenInfo (state, { field, value }) {
      state[field] = value
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
