import {
  DELETE_THREAT,
  EDIT_THREAT,
  GET_THREATS,
  STORE_THREAT,
} from "./actions.type";
import axios from "axios";
import {
  SET_EDIT_THREAT,
  SET_QUESTION_LIST,
  SET_RECOMMENDATION_LIST,
  SET_THREATS,
} from "./mutations.type";
import API_URL from "../../common/config";

export const threat_module = {
  state: {
    threat: {
      image: "",
      category_id: [],
      estimated_time_in_minutes: "",
      video_link: "",
      is_always_important: false,
      important_if_industry_id: false,
      important_if_company_size: false,
      is_display_active_always: false,
      show_if_industry: false,
      show_if_company_size: false,
      show_if_using_asset: false,
      status: "",
      friendlyTranslations: {
        EN: {
          title: "",
          description: "",
        },
        DE: {
          title: "",
          description: "",
        },
      },
      important_company_size: [0, 0],
      company_size: [0, 0],
      assets: [],
      industries: [],
      important_industry: [],
    },
    threats: [],
    editThreat: [],
  },
  actions: {
    store_threat({ commit, state }) {
      state.threat.status = "publish";
      axios.post(API_URL + "/admin/threat", state.threat).then((response) => {
        console.log(response.data);
      });
    },
    update_threat({ state }) {
      axios
        .put(API_URL + "/admin/threat/" + state.editThreat.id, state.editThreat)
        .then((response) => {
          console.log(response.data);
        });
    },
    [GET_THREATS](context) {
      axios.get(API_URL + "/admin/threat").then((response) => {
        context.commit(SET_THREATS, response.data.data.items);
      });
    },
    async [EDIT_THREAT](context, id) {
      await axios
        .get(API_URL + "/admin/threat/" + id + "/edit")
        .then((response) => {
          context.commit(SET_EDIT_THREAT, response.data.data);
        });
    },
    [DELETE_THREAT](context, id) {
      axios.delete(API_URL + "/admin/threat/" + id);
    },
  },
  mutations: {
    [SET_THREATS](state, data) {
      state.threats = data;
    },
    [SET_EDIT_THREAT](state, data) {
      state.editThreat = data;
    },
    [SET_QUESTION_LIST](state, data) {
      state.editThreat.analysisQuestion = data;
    },
    [SET_RECOMMENDATION_LIST](state, data) {
      state.editThreat.recommendation = data;
    },
  },
};
