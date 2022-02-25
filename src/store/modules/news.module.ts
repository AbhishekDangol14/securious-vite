import axios from 'axios'
import { STORE_NEWS, GET_NEWS, EDIT_NEWS, UPDATE_NEWS, DELETE_NEWS } from './actions.type'
import { SET_NEWS } from './mutations.type'

export const news_module = {
    state: {
        news: {
        },
        item: null
    },
    actions: {
        [STORE_NEWS] (context, news){
            const data = new FormData();
            data.append('image',news.news.image)
            data.append('is_active',news.news.is_active ? '1' : '0')
            data.append('news_category_id',news.news.news_category_id)
            data.append('friendlyTranslations',JSON.stringify(news.news.friendlyTranslations))
            axios.post('http://127.0.0.1:8000/api/admin/news', data).then((response) => {
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
                context.commit(EDIT_NEWS,response)
            })
        },
        [UPDATE_NEWS] (context, news) {
            const data = new FormData();
            data.append('id',news.id)
            data.append('image',news.image)
            data.append('is_active',news.is_active ? '1' : '0')
            data.append('news_category_id',news.news_category_id)
            data.append('friendlyTranslations',JSON.stringify(news.friendlyTranslations))
            data.append('_method','PUT')
            axios.post('http://127.0.0.1:8000/api/admin/news/'+news.id, data).then((response) => {
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
            state.news = response.data.data.items 
        },
        [EDIT_NEWS] (state, response) {
            state.item = response.data
        },
        [DELETE_NEWS] (state, index) {
            state.news.splice(index,1)
        }
    }
}