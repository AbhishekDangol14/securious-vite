<template>
    <Layout Title="NEWS">
        <div class="grid grid-cols-4 m-10">
            <div class="col-span-2">
                <Search type="text" name="Search" placeholder="Search..." />
            </div>
            <div class="col-start-4">
                <Button 
                    path_name="newsCreate"
                    name="primary-button"
                    title="Add new news"
                    :faIcon="'fa fa-plus'"
                />
            </div>
        </div>
        <div class="grid grid-cols-3 ml-4">
            <NewsCard v-for="(item,index) in news" :item="item" :index="index" :selectedLanguage="selectedLanguage" v-bind:key="item.id"></NewsCard>
        </div>
    </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import Layout from '@/components/Main.vue';
import NewsCard from '@/components/NewsCard.vue';
import Button from '@/components/Button.vue';
import Search from '@/components/Search.vue'
import { useStore } from 'vuex';
import { GET_NEWS } from '@/store/modules/actions.type';

export default defineComponent({
    components: {
        Layout,
        NewsCard,
        Button,
        Search
    },
    setup() {
        const store = useStore()
        const selectedLanguage = localStorage.getItem('LANGUAGE')
        
        store.dispatch(GET_NEWS)

        return {
            news: computed(() => store.state.news.state.getNews),
            selectedLanguage
        }
    },
})
</script>
