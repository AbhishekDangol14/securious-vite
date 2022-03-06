import axios from "axios";
import {
  GET_INDUSTRIES,
  NEW_INDUSTRY,
  DELETE_INDUSTRY,
  STORE_INDUSTRY,
} from "./actions.type";
import {
  SET_INDUSTRIES,
  ADD_INDUSTRIES,
  REMOVE_INDUSTRY,
  SAVE_INDUSTRY,
} from "./mutations.type";

export const industry_module = {
  state: {
    industries: [],
  },
  actions: {
    [GET_INDUSTRIES](context, state) {
      axios
        .get("http://127.0.0.1:8000/api/admin/industries")
        .then((response) => {
          context.commit(SET_INDUSTRIES, response);
        });
    },
    actions: {
        [GET_INDUSTRIES] (context, state){
            axios.get('http://127.0.0.1:8000/api/admin/industries').then((response) => {
                context.commit(SET_INDUSTRIES,response)
            })
        },
        [STORE_INDUSTRY] (context, industry){
            if(industry.id)  
                axios.put('http://127.0.0.1:8000/api/admin/industries/'+industry.id, industry).then((response) => {
                    console.log(response)
                })
            else    
                axios.post('http://127.0.0.1:8000/api/admin/industries', industry).then((response) => {
                    console.log(response)
                })
        },
        [NEW_INDUSTRY] (context, data){
            context.commit(ADD_INDUSTRIES, data)
        },
        async [DELETE_INDUSTRY] (context, { id,index }){
            if(id)
                await axios.delete('http://127.0.0.1:8000/api/admin/industries/'+id)
            context.commit(REMOVE_INDUSTRY,index)
        }
    },
    mutations: {
        [SET_INDUSTRIES](state, response){
            state.industries = response.data.data.items
            
        },
        [ADD_INDUSTRIES] (state, data){
            state.industries.push(data)
        },
        [REMOVE_INDUSTRY] (state,index){
            state.industries.splice(index,1)
        }
    }
}
