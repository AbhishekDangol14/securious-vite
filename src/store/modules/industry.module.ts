import axios from 'axios'
import { GET_INDUSTRIES, NEW_INDUSTRY, DELETE_INDUSTRY, STORE_INDUSTRY } from './actions.type'
import { SET_INDUSTRIES,ADD_INDUSTRIES, REMOVE_INDUSTRY, SAVE_INDUSTRY } from './mutations.type'
import { computed } from 'vue'

export const industry_module = {
    state: {
        industries: []
    },
    actions: {
        [GET_INDUSTRIES] (context, state){
            axios.get('http://127.0.0.1:8000/api/admin/industries').then((response) => {
                context.commit(SET_INDUSTRIES,response)
            })
        },
        [STORE_INDUSTRY] (context, industry){
            industry.data.id ? axios.put('http://127.0.0.1:8000/api/admin/industries/'+industry.id, industry.data) : axios.post('http://127.0.0.1:8000/api/admin/industries', industry.data)
        },
        [NEW_INDUSTRY] (context, industry){
            context.commit(ADD_INDUSTRIES, industry)
        },
        [DELETE_INDUSTRY] (context, {industry, index}){
            if(industry.id)
                axios.delete('http://127.0.0.1:8000/api/admin/industries/'+industry.id, industry)
            
            context.commit(REMOVE_INDUSTRY, {industry, index})
        }
    },
    mutations: {
        [SET_INDUSTRIES](state, response){
            state.industries = response.data.data.items
            
        },
        [ADD_INDUSTRIES] (state, data){
            state.industries.push(data)
        },
        [REMOVE_INDUSTRY] (state, {industry, index}){
            state.industries.splice(index,1)
        }
    }
}