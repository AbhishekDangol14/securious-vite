import { DELETE_THREAT, EDIT_THREAT, GET_DROPDOWN, GET_THREATS, DROPDOWN, STORE_THREAT, SEARCH_THREAT } from "./actions.type";
import axios from 'axios'
import { SET_DROPDOWN, SET_EDIT_THREAT, SET_DROPDOWN_FORMAT, SET_QUESTION_LIST, SET_RECOMMENDATION_LIST, SET_THREATS, SET_SEARCH_THREAT } from "./mutations.type";

export const threat_module = {
  state: {
    threat: {
      image: '',
      category_id: [],
      estimated_time_in_minutes: '',
      video_link: '',
      is_always_important: false,
      important_if_industry_id: false,
      important_if_company_size: false,
      is_display_active_always: false,
      show_if_industry: false,
      show_if_company_size: false,
      show_if_using_asset: false,
      status: '',  
      friendlyTranslations: {
        EN: {
          title: "",
          description: ""
        },
        DE: {
          title: "",
          description: ""
        }
      },
      important_company_size: [0,0],
      company_size: [0,0],
      assets: [],
      industries: [],
      important_industry: []
    },
    threats: [],
    searchThreats: [],
    editThreat: [],
    industries: [],
    assets: [],
    getIndustries: [],
    getAssets: [],
  },
  actions: {
    store_threat ({commit,state}) {
      state.threat.status = 'publish'
      axios.post('http://127.0.0.1:8000/api/admin/threat',state.threat).then((response) => {
        console.log(response.data)
      })
    },
    update_threat ({state}) {
      axios.put('http://127.0.0.1:8000/api/admin/threat/'+state.editThreat.id,state.editThreat).then((response) => {
        console.log(response.data)
      })
    },
    [GET_THREATS] (context) {
      axios.get('http://127.0.0.1:8000/api/admin/threat').then((response) => {
        context.commit(SET_THREATS,response.data.data.items)
      })
    },
    [DROPDOWN] (context,language) {
      context.commit(SET_DROPDOWN_FORMAT,language)
    },
    async [EDIT_THREAT] (context,id) {
      await axios.get('http://127.0.0.1:8000/api/admin/threat/'+id+'/edit').then((response) => {
        context.commit(SET_EDIT_THREAT,response.data.data)
      })
    },
    [DELETE_THREAT] (context,id){
      axios.delete('http://127.0.0.1:8000/api/admin/threat/'+id)
    },
    async [GET_DROPDOWN] (context){
      await axios.get('http://127.0.0.1:8000/api/admin/threat/create').then((response) => {
        context.commit(SET_DROPDOWN,response.data.data)
      })
    },
    [SEARCH_THREAT] (context, {searchQuery,language}){
      context.commit(SET_SEARCH_THREAT,{searchQuery,language})
    }
  },
  mutations: {
    [SET_THREATS] (state,data) {
      state.searchThreats = data
      state.threats = data
    },
    [SET_EDIT_THREAT] (state,data) {
      state.editThreat = data
    },
    [SET_QUESTION_LIST] (state,data) {
      state.editThreat.analysisQuestion = data
    },
    [SET_RECOMMENDATION_LIST] (state,data) {
      state.editThreat.recommendation = data
    },
    [SET_DROPDOWN] (state,data) {
      state.industries = data[0].items
      state.assets = data[1].items
    },
    [SET_DROPDOWN_FORMAT] (state,language) {
      state.getIndustries = state.industries.map((industry) => {
        return {
          id: industry['id'],
          name: industry['friendlyTranslations'][language+'.title']['value']
        }
      })
      state.getAssets = state.assets.map((asset) => {
        return {
          id: asset['id'],
          name: asset['friendlyTranslations'][language+'.title']['value']
        }
      })
      console.log(state.industries)
    },
    [SET_SEARCH_THREAT] (state,{searchQuery,language}) {
      state.searchThreats = state.threats.filter((threat) => {
        return (
          threat.friendlyTranslations[language.value+'.title'].value
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
    }
  }
}
