import axios from "axios";
import { ref } from "vue";
import API_URL from "../common/config";

export default function newsService() {
  const news = ref({});

  const getNews = async () => {
    const response = await axios.get(API_URL + "/admin/news");
    news.value = response.data;
  };

  return {
    news,
    getNews,
  };
}
