<template>
    <li :class="{'p-3': isChild}" v-if="item.items">
        <a href="#" v-text="item.label"></a>
        <Menu v-for="itemm in item.items" :item="itemm" v-bind:key="itemm.label" :is-child="true" />
    </li>
    <li v-else :class="{'p-3': isChild}">
        <router-link :to="item.link" v-text="item.label"></router-link>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'menu',
  props: {
    item: {
      type: Object,
      default: {}
    },
    isChild: {
      type: Boolean,
      default: false
    }
  },
    setup(props) {

      return {
        props
      }
    },
})
</script>
