<template>
  <button
    :class="name ? `${name}` : 'button primary-button'"
    @click.prevent="save"
  >
    <span class="self-center">{{ title }}</span>
    <i v-if="faIcon" :class="faIcon"></i>
    <img v-if="icon" class="w-5 h-5 self-center" :src="icon" alt="icon" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: String,
    icon: String,
    title: String,
    faIcon: String,
    path_name: String,
  },
  setup(props, context) {
    function save() {
      context.emit("myEvent");
    }
    return {
      save,
    };
  },
});
</script>

<style scoped>
.button {
  border: 1px solid;
  height: 45px;
  min-width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  border-radius: 25px;
  padding: 1px 2px;
  transition: 0.15s ease-in-out;
}
.tag-button {
  font-size: 0.8rem;
  background-color: #055ca8;
  padding: 0.2rem 0.7rem;
  border: 1px solid #055ca8;
  margin-right: 0.5rem;
  color: white;
  border-radius: 5px;
  margin-top: 0.5rem;
  display: inline-block;
}
</style>
