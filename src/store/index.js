import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'
import record from './record'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    async fetchCurrency() {
      let res = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
      res = await res.json()
      return res
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info, category, record
  }
})
