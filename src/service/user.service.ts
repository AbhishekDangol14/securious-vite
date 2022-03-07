import axios from "axios";
import { ref } from "vue";
import API_URL from "../common/config";

export default function userService() {
  const users = ref({});

  const getUsers = async () => {
    const response = await axios.get(API_URL + "/admin/users");
    users.value = response.data;
  };

  return {
    users,
    getUsers,
  };
}
