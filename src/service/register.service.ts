import axios from "axios";
import { ref } from "vue";
import API_URL from "../common/config";

export default function registerService() {
  const role = ref("");

  async function getRole(slug = null) {
    await axios
      .post(API_URL + "/register/show_registration_form", slug)
      .then((response) => {
        role.value = response.data.data;
      })
      .catch();
  }

  return {
    role,
    getRole,
  };
}
