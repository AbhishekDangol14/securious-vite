import { createStore } from 'vuex'
import { auth_module } from './modules/auth.module'
import { industry_module } from './modules/industry.module'
import { news_module } from './modules/news.module'
import { question_module } from './modules/question.module'
import { recommendation_module } from './modules/recommendation.module'
import { settings_module } from './modules/settings.module'
import { threat_module } from './modules/threat.module'
import { solutionPartner_module } from './modules/solutionPartner.module'

export default createStore({
  state: {
    auth: auth_module,
    industry: industry_module,
    news: news_module,
    settings: settings_module,
    threat: threat_module,
    question: question_module,
    recommendation: recommendation_module,
    solutionPartner: solutionPartner_module
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth_module,
    industry_module,
    news_module,
    settings_module,    
    solutionPartner_module,
    threat_module,
    question_module,
    recommendation_module

  }
})
