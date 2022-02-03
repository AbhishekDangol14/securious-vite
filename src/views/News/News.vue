<template>
    <Layout Title="NEWS">
        <AddButton path="news/create">Add new news</AddButton>
        <div class="grid grid-cols-3 ml-4">
            <NewsCard v-for="(item,index) in news" :item="item" :index="index" :selectedLanguage="selectedLanguage" v-bind:key="item.id"></NewsCard>
        </div>
    </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import Layout from '@/components/Main.vue';
import NewsCard from '@/components/NewsCard.vue';
import AddButton from '@/components/AddButton.vue';
import { useStore } from 'vuex';
import { GET_NEWS } from '@/store/modules/actions.type';

export default defineComponent({
    components: {
        Layout,
        NewsCard,
        AddButton
    },
    setup() {
        const store = useStore()

        const user = localStorage.getItem("USER")
        const selectedLanguage = user ? JSON.parse(user).selected_language : ""
        
        store.dispatch(GET_NEWS)

        return {
            news: computed(() => store.state.news.state.news),
            selectedLanguage
        }
    },
})
</script>
