import axios from 'axios'
import { GET_SOLUTION_PARTNER } from './actions.type'
import { ADD_ASSET_ALERT, ADD_PRODUCT_LIST, DELETE_ASSET_ALERT, DELETE_PRODUCT_LIST, SET_SOLUTION_PARTNER } from './mutations.type'

export const solutionPartner_module = {
    state: {
        solutionPartner : {
            image: '',
            status: '',
            friendlyTranslations : {
                EN: {
                    title: "",
                    description: ""
                },
                DE: {
                    title: "",
                    description: ""
                }
            },
            solution_partner_products : []
        },
        solutionPartners: []
    },
    actions: {
        async [GET_SOLUTION_PARTNER] (context){
            await axios.get('http://127.0.0.1:8000/api/admin/solution_partners').then((response) => {
                context.commit(SET_SOLUTION_PARTNER,response.data.data.items)
            })
        },
        store_solutionPartner({state}) {
            state.solutionPartner.status = 'publish'
            axios.post('http://127.0.0.1:8000/api/admin/solution_partners',state.solutionPartner)
        }

    },
    mutations: {
        [ADD_PRODUCT_LIST] (state,data) {
            state.solutionPartner.solution_partner_products.push(data)
        },
        [DELETE_PRODUCT_LIST] (state,index) {
            state.solutionPartner.solution_partner_products.splice(index,1)
        },
        [ADD_ASSET_ALERT] (state, {asset,index}) {
            state.solutionPartner.solution_partner_products[index].asset_alert.push(asset)
        },
        [DELETE_ASSET_ALERT] (state,index) {
            state.solutionPartner.solution_partner_products[index].asset_alert.splice(index,1)
        },
        [SET_SOLUTION_PARTNER] (state, data) {
            state.solutionPartners = data
        }
    }
}