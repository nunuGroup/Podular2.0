import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeSection: 1
  },
  mutations: {
    updateActiveSection(state, index) {
      state.activeSection = index;
    }
  },
  actions: {

  },
  modules: {
  }
})
