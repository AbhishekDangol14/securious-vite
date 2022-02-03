<template>
    <div class="pt-3 pl-4 pb-2">
      <div :class="{'p-3': isChild}" v-if="item.items">
        <a href="#" v-text="item.label"></a>
        <Menu v-for="itemm in item.items" :item="itemm" v-bind:key="itemm.label" :is-child="true" />
      </div>
      <div v-else :class="{'p-3': isChild}">
        <div class="flex space-x-2 text-sm pb-3"><img src="../assets/components/alarm.svg"/><router-link :to="{ name: item.link }" v-text="item.label"></router-link></div>
      </div> 
    </div>
</template>

<script lang="ts">
import { LOGOUT } from '@/store/modules/actions.type'
import { defineComponent,computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Menu',
  props: {
    item: Object,
    isChild: Boolean
  },
    setup(props) {
      return { 
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
