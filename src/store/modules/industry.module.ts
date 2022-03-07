import axios from "axios";
import {
  GET_INDUSTRIES,
  NEW_INDUSTRY,
  DELETE_INDUSTRY,
  STORE_INDUSTRY,
} from "./actions.type";
import API_URL from "../../common/config";
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
      axios.get(API_URL + "/admin/industries").then((response) => {
        context.commit(SET_INDUSTRIES, response);
      });
    },
    [STORE_INDUSTRY](context, industry) {
      if (industry.id)
        axios
          .put(API_URL + "/admin/industries/" + industry.id, industry)
          .then((response) => {
            console.log(response);
          });
      else
        axios.post(API_URL + "/admin/industries", industry).then((response) => {
          console.log(response);
        });
    },
    [NEW_INDUSTRY](context, industry) {
      context.commit(ADD_INDUSTRIES, industry);
    },
    [DELETE_INDUSTRY](context, { industry, index }) {
      if (industry.id)
        axios.delete(API_URL + "/admin/industries/" + industry.id).then(() => {
          context.commit(REMOVE_INDUSTRY, index);
        });
      context.commit(REMOVE_INDUSTRY, index);
    },
  },
  mutations: {
    [SET_INDUSTRIES](state, response) {
      if (!response.data.data) {
        state.industries = response.data.data.items;
      } else {
        state.industries = [];
      }
      console.log(state.industries);
    },
    [ADD_INDUSTRIES](state, data) {
      console.log(state.industries);
      state.industries.push(data);
    },
    [REMOVE_INDUSTRY](state, ind) {
      alert(ind);
      console.log(state.industries);
      state.industries = state.industries.filter(
        (industry, index) => index != ind
      );
      console.log(state.industries);
    },
  },
};
