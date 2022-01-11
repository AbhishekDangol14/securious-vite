<template>
    <div class="pt-8 pl-4 pb-2">
      <li :class="{'p-3': isChild}" v-if="item.items">
        <a href="#" v-text="item.label"></a>
        <Menu v-for="itemm in item.items" :item="itemm" v-bind:key="itemm.label" :is-child="true" />
      </li>
      <li v-else :class="{'p-3': isChild}">
        <div class="flex space-x-2 text-sm pb-3"><img src="../assets/components/alarm.svg"/><router-link :to="item.link" v-text="item.label"></router-link></div>
      </li> 
    </div>
    <div>
      <hr>
      <div class="pt-4 pl-4 pb-2">
        <div class="flex space-x-2 text-sm pb-3"><img src="../assets/components/user.svg"/><router-link to="/">Users</router-link></div>
        <div class="flex space-x-2 text-sm pb-3"><img src="../assets/components/setting.svg"/><router-link to="/">Setting</router-link></div>
        <button class="flex space-x-2 text-sm pb-3" @click="logout"><img src="../assets/components/logout.svg"/><div>Logout</div></button>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
import { useStore } from 'vuex'
import router from '../router'

export default defineComponent({
  name: 'Menu',
  props: {
    item: Object,
    isChild: Boolean
  },
    setup(props) {
      const store = useStore()
      
      function logout() {
          localStorage.removeItem('ID_TOKEN_KEY')
          localStorage.removeItem('USER')
          router.push('/login')
      }
      return { 
        logout,
        user_type: computed(() => store.state.auth.state.user.role[0].role),
      }
    },
})
</script>

<style scoped>
  img {
    height: 17px;
    width: 15px;
  }
</style>
