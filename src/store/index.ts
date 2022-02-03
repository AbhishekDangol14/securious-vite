import { createStore } from 'vuex'
import { auth_module } from './modules/auth.module'
import { industry_module } from './modules/industry.module'
import { news_module } from './modules/news.module'
import { settings_module } from './modules/settings.module'

export default createStore({
  state: {
    auth: auth_module,
    industry: industry_module,
    news: news_module,
    settings: settings_module
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth_module,
    industry_module,
    news_module,
    settings_module
  }
})
