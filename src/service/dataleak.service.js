import axios from "axios";
import { ref } from "vue";
import API_URL from "../common/config";
export default function dataleakService() {
  const emails = ref([]);
  let isBreached = ref(false);

  const getEmails = async () => {
    const response = await axios.get(API_URL + "/customer/data_leak");
    emails.value = response.data.data;
    emails.value.forEach((email) => {
      if (email.breaches.length > 0) isBreached.value = true;
    });
  };

  const addEmail = async (email) => {
    const response = await axios.post(API_URL + "/customer/data_leak", {
      email: email,
    });
  };

  const deleteEmail = async (id) => {
    await axios.delete(API_URL + "/customer/data_leak/" + id);
  };

  return {
    emails,
    isBreached,
    getEmails,
    addEmail,
    deleteEmail,
  };
}
