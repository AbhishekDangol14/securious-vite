import router from "../../router";
import axios from "axios";
import API_URL from "../../common/config";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  VERIFY,
  VERIFY_EMAIL_CODE,
} from "./actions.type";
import {
  SET_AUTH,
  PURGE_AUTH,
  SET_LOGINERROR,
  SET_REGISTERERROR,
} from "./mutations.type";
import popupService from "../../service/popup.service";
const { onError, onRegisterError } = popupService();
export const auth_module = {
  state: {
    user: {},
    error: [],
  },
  actions: {
    async [LOGIN](context, credentials) {
      await axios
        .post(API_URL + "/login", {
          email: credentials.email,
          password: credentials.password,
        })
        .then((response) => {
          console.log("response " + response);
          context.commit(SET_AUTH, response);
          router.push("/dashboard");
        })
        .catch((error) => {
          context.commit(SET_LOGINERROR, error);
        });
    },
    [LOGOUT](context) {
      context.commit(PURGE_AUTH);
    },
    [CHECK_AUTH]() {
      if (localStorage.getItem("ID_TOKEN_KEY")) return true;
      else return false;
    },
    async [REGISTER](context, { credentials, role }) {
      credentials.role = role.value;
      await axios
        .post(API_URL + "/register", credentials)
        .then((response) => {
          localStorage.setItem("USER", JSON.stringify(response.data.data));
          localStorage.setItem("ID_TOKEN_KEY", response.data.data.token);
          localStorage.setItem(
            "LANGUAGE",
            response.data.data.selected_language
          );
          router.push("/verify");
        })
        .catch((error) => {
          context.commit(SET_REGISTERERROR, error);
        });
    },
    async [VERIFY](context, code) {
      const user = localStorage.getItem("USER");
      const email = user ? JSON.parse(user).email : "";
      await axios
        .post(API_URL + "/verification", {
          email: email,
          code: code,
        })
        .then((response) => {
          localStorage.setItem("EMAIL_VERIFIED_AT", response.data);
          router.push("/dashboard");
        });
    },
  },
  mutations: {
    [SET_AUTH](state, user) {
      localStorage.setItem("USER", JSON.stringify(user.data.data.resource));
      localStorage.setItem("ID_TOKEN_KEY", user.data.data.resource.token);
      localStorage.setItem(
        "LANGUAGE",
        user.data.data.resource.selected_language
      );
      localStorage.setItem(
        "EMAIL2FA",
        user.data.data.resource.email_2fa_enabled
      );
      if (user.data.data.resource.email_verified_at)
        localStorage.setItem(
          "EMAIL_VERIFIED_AT",
          user.data.data.resource.email_verified_at
        );
    },
    [PURGE_AUTH](state) {
      localStorage.clear();
      router.push("/login");
    },
    [SET_REGISTERERROR](state, error) {
      onRegisterError(error);
      if (error.response) {
        state.error = error.response.data.errors;
      }
    },
    [SET_LOGINERROR](state, error) {
      if (error.response) {
        state.error = error.response.data.message;
      }
    },
  },
};
