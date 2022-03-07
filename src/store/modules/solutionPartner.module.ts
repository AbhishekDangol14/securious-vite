import axios from "axios";
import { computed } from "vue";
import { EDIT_SOLUTION_PARTNER, GET_SOLUTION_PARTNER } from "./actions.type";
import {
  ADD_ASSET_ALERT,
  ADD_EDIT_SOLUTION_PARTNER,
  ADD_PRODUCT_LIST,
  DELETE_ASSET_ALERT,
  DELETE_PRODUCT_LIST,
  SET_EDIT_SOLUTION_PARTNER,
  SET_SOLUTION_PARTNER,
} from "./mutations.type";
import API_URL from "../../common/config";

export const solutionPartner_module = {
  state: {
    solutionPartner: {
      image: "",
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
      solution_partner_products: [],
    },
    solutionPartners: [],
    editSolutionPartner: [],
  },
  actions: {
    async [GET_SOLUTION_PARTNER](context) {
      await axios.get(API_URL + "/admin/solution_partners").then((response) => {
        context.commit(SET_SOLUTION_PARTNER, response.data.data.items);
      });
    },
    store_solutionPartner({ state }) {
      state.solutionPartner.status = "publish";
      axios.post(API_URL + "/admin/solution_partners", state.solutionPartner);
    },
    update_solutionPartner({ state }) {
      axios
        .put(
          API_URL + "/admin/solution_partners/" + state.editSolutionPartner.id,
          state.editSolutionPartner
        )
        .then((response) => {
          console.log(response);
        });
    },
    async [EDIT_SOLUTION_PARTNER](context, id) {
      await axios
        .get(API_URL + "/admin/solution_partners/" + id + "/edit")
        .then((response) => {
          context.commit(SET_EDIT_SOLUTION_PARTNER, response.data.data);
        });
    },
  },
  mutations: {
    [ADD_PRODUCT_LIST](state, data) {
      state.solutionPartner.solution_partner_products.push(data);
    },
    [ADD_EDIT_SOLUTION_PARTNER](state, data) {
      state.editSolutionPartner.solutionPartnersProducts.push(data);
    },
    [DELETE_PRODUCT_LIST](state, index) {
      state.solutionPartner.solution_partner_products.splice(index, 1);
    },
    [ADD_ASSET_ALERT](state, { asset, index, edit = null }) {
      if (edit)
        state.editSolutionPartner.solutionPartnersProducts[
          index
        ].asset_alert.push(asset);
      else
        state.solutionPartner.solution_partner_products[index].asset_alert.push(
          asset
        );
    },
    [DELETE_ASSET_ALERT](state, index) {
      state.solutionPartner.solution_partner_products[index].asset_alert.splice(
        index,
        1
      );
    },
    [SET_SOLUTION_PARTNER](state, data) {
      state.solutionPartners = data;
    },
    [SET_EDIT_SOLUTION_PARTNER](state, data) {
      state.editSolutionPartner = data;
    },
  },
};
