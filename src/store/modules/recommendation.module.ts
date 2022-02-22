import axios from 'axios'
import router from '@/router'

export const recommendation_module = {
    state: {
        recommendation: {
            company_size: [0,0],
            assets: [],
            industries: [],
            is_automated: false,
            points: '',
            show_if_industry: false,
            show_if_company_size: false,
            display_if_conditions: false,
            threat_id: '',
            order: '0',
            status: '',
            friendlyTranslations: {
                EN: {
                    title: "",
                    one_sentence_recommendation: "",
                    description: ""
                },
                DE: {
                    title: "",
                    one_sentence_recommendation: "",
                    description: ""
                }
            },
            question_answer: {
                question_id: '',
                answers: []
            },
            questions:[]
        }
    },
    actions: {
        save_recommendation({state}) {
            state.recommendation.threat_id = router.currentRoute.value.params.id
            state.recommendation.status = 'publish'
            axios.post('http://127.0.0.1:8000/api/admin/recommendation',state.recommendation)
        }
    }
}