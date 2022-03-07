import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import router from "./router";
import axios from "axios";

import "./css/index.scss";

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register", "/", "/verify", "/email2fa"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("ID_TOKEN_KEY");
  const email_verified = localStorage.getItem("EMAIL_VERIFIED_AT");
  const email2fa = localStorage.getItem("EMAIL2FA");

  if (authRequired && !loggedIn) {
    next("/login");
  } else if (email2fa == "1" && loggedIn) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + loggedIn;
    if (!authRequired) next();
    else next("/email2fa");
  } else if (!email_verified && loggedIn) {
    if (!authRequired) next();
    else next("/verify");
  } else if (!authRequired && loggedIn) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + loggedIn;
    next("/dashboard");
  } else {
    axios.defaults.headers.common["Authorization"] = "Bearer " + loggedIn;
    next();
  }
});

const app = createApp(App);

app.use(store).use(router);
app.mount("#app");
