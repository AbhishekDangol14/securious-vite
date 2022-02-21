import { reactive } from 'vue'

export default function questionService() {
    const question = reactive({
        company_size: [0,0],
        assets: [],
        industries: [],
        question_type: "radio",
        details_level: "low",
        show_if_using_assets: false,
        display_if_conditions: false,
        automation_conditions: false,
        question_order: 0,
        video_link: "https://",
        show_if_industry: false,
        show_if_company_size: false,
        friendlyTranslations: {
          EN: {
            title: "hello",
            description: "hello there",
            explanation: "no explanation"
          },
          DE: {
            title: "hola",
            description: "holla there",
            explanation: "nei explanation"
          }
        },
        answers: [{
            id: '',
            name: ''
        }],
        recommendation: { }
    })

    return {
        question
    }
}