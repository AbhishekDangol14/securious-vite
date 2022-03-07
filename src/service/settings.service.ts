import axios from "axios";
import { ref } from "vue";
import API_URL from "../common/config";

export default function settingsService() {
  const data = ref({});

  const getCode = async () => {
    const response = await axios.post(API_URL + "/admin/register/google2fa");
    data.value = response.data;
  };

  return {
    data,
    getCode,
  };
}
