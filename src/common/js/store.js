
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin: false
  },
  mutation: {
    savelogin (state) {
      state.islogin = true
    }
  }
})
