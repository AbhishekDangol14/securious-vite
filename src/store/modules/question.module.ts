import { ADD_ANSWER, ADD_EDIT_ANSWER, SET_ANSWER_LIST, SET_EDIT_QUESTION, SET_RECOMMENDATION_LIST } from "./mutations.type";
import router from '@/router'
import axios from 'axios'
import { EDIT_QUESTION } from "./actions.type";

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
          order: 0,
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
      },
      editQuestion: [],
  },
  actions: {
    async store_question ({state}){
      state.question.threat_id = router.currentRoute.value.params.id
      state.question.status = 'publish'
      await axios.post('http://127.0.0.1:8000/api/admin/analysis_question',state.question).then()
    },
    async update_question ({state}){
      await axios.put('http://127.0.0.1:8000/api/admin/analysis_question/'+state.editQuestion.id,state.editQuestion).then()
    },
    async [EDIT_QUESTION] (context,id){
      await axios.get('http://127.0.0.1:8000/api/admin/analysis_question/'+id+'/edit').then((response)=> {
        console.log(response.data.data)
        context.commit(SET_EDIT_QUESTION,response.data.data)
      })
    }
  },
  mutations: {
    [ADD_ANSWER] (state,answer){
      state.question.answers.push(answer)
    },
    [ADD_EDIT_ANSWER] (state,answer){
      state.editQuestion.answers.push(answer)
    },
    [SET_ANSWER_LIST] (state, data) {
      if (router.currentRoute.value.params.id)
        state.editQuestion.answers = data
      else 
        state.question.answers = data
    },
    [SET_RECOMMENDATION_LIST] (state,data){
      if (router.currentRoute.value.params.id)
        state.editQuestion.recommendation = data
      else 
        state.question.recommendation = data
    },
    [SET_EDIT_QUESTION] (state, data) {
      state.editQuestion = data
    }
  }
  
}