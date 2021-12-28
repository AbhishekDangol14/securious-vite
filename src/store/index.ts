import { createStore } from 'vuex'
import { auth_module } from './modules/auth.module'

export default createStore({
  state: {
    token: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth_module,
  }
})
