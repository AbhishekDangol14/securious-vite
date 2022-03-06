import axios from 'axios'
import { STORE_NEWS, GET_NEWS, EDIT_NEWS, UPDATE_NEWS, DELETE_NEWS } from './actions.type'
import { SET_NEWS } from './mutations.type'

export const news_module = {
    state: {
        news: {
            friendlyTranslations: {
                EN: {
                title: "",
                excerpt: "",
                description: "",
                },
                DE: {
                title: "",
                excerpt: "",
                description: "",
                },
            },
            news_category_id: "",
            is_active: false,
            image: "",
        },
        getNews: [],
        editNews: [],
    },
    actions: {
        [STORE_NEWS] ({state}){
            axios.post('http://127.0.0.1:8000/api/admin/news', state.news).then((response) => {
                console.log(response);
            })
        },

        [GET_NEWS] (context){
            axios.get('http://127.0.0.1:8000/api/admin/news').then((response) => {
                context.commit(SET_NEWS,response)
            })
        },

        [EDIT_NEWS] (context,id) {
            axios.get('http://127.0.0.1:8000/api/admin/news/'+id+'/edit').then((response) => {
                context.commit(EDIT_NEWS,response.data.data)
            })
        },
        [UPDATE_NEWS] ({state}) {
            axios.put('http://127.0.0.1:8000/api/admin/news/'+state.editNews.id, state.editNews).then((response) => {
                console.log(response);
            })
        },
        [DELETE_NEWS] (context, {id, index}) {
            axios.delete('http://127.0.0.1:8000/api/admin/news/'+id).then((response) => {
                context.commit(DELETE_NEWS, index)
            })
        }
    },
    mutations: {
        [SET_NEWS] (state, response) {
            state.getNews = response.data.data.items 
        },
        [EDIT_NEWS] (state, data) {
            state.editNews = data
        },
        [DELETE_NEWS] (state, index) {
            state.getNews.splice(index,1)
        }
    }
}