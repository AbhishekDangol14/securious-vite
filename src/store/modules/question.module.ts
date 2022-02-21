import { ADD_ANSWER } from "./mutations.type";
import router from '@/router'
import axios from 'axios'

export const question_module = {
  state: {
      question: {
          threat_id: 0,
          company_size: [0,0],
          assets: [],
          industries: [],
          question_type: "",
          details_level: "",
          show_if_using_assets: false,
          display_if_conditions: false,
          automation_conditions: false,
          question_order: 0,
          video_link: "",
          show_if_industry: false,
          show_if_company_size: false,
          friendlyTranslations: {
            EN: {
              title: "",
              description: "",
              explanation: ""
            },
            DE: {
              title: "",
              description: "",
              explanation: ""
            }
          },
          answers: [],
          recommendation: []
      }
  },
  actions: {
    async store_question ({state}){
      state.question.threat_id = router.currentRoute.value.params.id
      state.question.status = 'publish'
      await axios.post('http://127.0.0.1:8000/api/admin/analysis_question',state.question).then()
    }
  },
  mutations: {
    [ADD_ANSWER] (state,answer){
      state.question.answers.push(answer)
    }
  }
  
}