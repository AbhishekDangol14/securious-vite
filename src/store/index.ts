import { createStore } from 'vuex'
import { auth_module } from './modules/auth.module'
import { industry_module } from './modules/industry.module'

export default createStore({
  state: {
    auth: auth_module,
    industry: industry_module
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth_module,
    industry_module
  }
})
