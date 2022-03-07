<template>
  <div class="pt-2 pl-4" :class="{ 'menu-item': $route.name == item.link }">
    <div :class="{ 'p-3': isChild }" v-if="item.items">
      <a href="#" v-text="item.label"></a>
      <Menu
        v-for="itemm in item.items"
        :item="itemm"
        v-bind:key="itemm.label"
        :is-child="true"
      />
    </div>
    <div v-else :class="{ 'p-3': isChild }" class="pb-2">
      <div class="flex text-grey-grey text-15 items-center pl-2">
        <div class="pr-2">
          <img class="" src="../assets/components/alarm.svg" />
        </div>
        <router-link
          :to="{ name: item.link }"
          v-text="item.label"
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { LOGOUT } from "@/store/modules/actions.type";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Menu",
  props: {
    item: Object,
    isChild: Boolean,
  },
  setup(props) {
    return {};
  },
});
</script>

<style scoped>
img {
  height: 17px;
  width: 15px;
}
</style>
