<template>
  <Layout Title="NEWS">
    <div class="m-11">
      <div>
        <div class="flex justify-between">
          <div class="news-search">
            <Search type="text" name="Search" placeholder="Search" />
          </div>
          <div class="text-center m-auto mr-0">
            <Button
              path_name="newsCreate"
              name="primary-button"
              :faIcon="'fa fa-plus'"
              title="Add new news"
            ></Button>
          </div>
        </div>
        <div>
          <div class="my-4">
            <div class="flex gap-4">
              <span class="mr-auto text-base"
                ><b class="text-grey-grey">Show</b>&nbsp;<b
                  class="text-blue-blue"
                  >3</b
                >
                <b class="text-grey-grey">&nbsp;out of 3</b></span
              >
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 ml-4">
          <NewsCard
            v-for="(item, index) in news"
            :item="item"
            :index="index"
            :selectedLanguage="selectedLanguage"
            v-bind:key="item.id"
          ></NewsCard>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import Layout from "@/components/Main.vue";
import Search from "@/components/Search.vue";
import NewsCard from "@/components/NewsCard.vue";
import Button from "@/components/Button.vue";
import { useStore } from "vuex";
import { GET_NEWS } from "@/store/modules/actions.type";

export default defineComponent({
  components: {
    Layout,
    NewsCard,
    Button,
    Search,
  },
  setup() {
    const store = useStore();

    const user = localStorage.getItem("USER");
    const selectedLanguage = user ? JSON.parse(user).selected_language : "";

    store.dispatch(GET_NEWS);

    return {
      news: computed(() => store.state.news.state.news),
      selectedLanguage,
    };
  },
});
</script>

<style scoped>
.news-search {
  width: 570px;
}
</style>
