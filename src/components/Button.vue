<template>
  <router-link
    v-if="route_id"
    :class="name ? `${name + ' button'}` : 'button primary-button'"
    :to="{ name: path_name, params: { id: route_id } }"
  >
  <span class="self-center">{{ title }}</span>
    <i v-if="faIcon" :class="faIcon"></i>
    <img v-if="icon" class="w-5 h-5 self-center" :src="icon" alt="icon" />
  </router-link>
 
  <router-link
    v-else-if="path_name"
    :class="name ? `${name + ' button'}` : 'button primary-button'"
    :to="{ name: path_name }"
  >
    <span class="self-center">{{ title }}</span>
    <i v-if="faIcon" :class="faIcon"></i>
    <img v-if="icon" class="w-5 h-5 self-center" :src="icon" alt="icon" />
  </router-link>
  
  <button
    v-else
    :class="name ? `${name + ' button'}` : 'button primary-button'"
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
    route_id: Number,
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
  padding: 11px 20px;
  transition: 0.15s ease-in-out;
}
.edit-button {
  border: 1px solid;
  height: 45px;
  min-width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  border-radius: 25px;
  padding: 11px 35px;
  transition: 0.15s ease-in-out;
}
.primary-button {
  color: white;
  background-color: #055ca8;
}
.button img,
svg {
  fill: red;
}
.primary-button:hover {
  background-color: white;
  color: #055ca8;
  border: 1px solid #055ca8;
}
.secondary-button {
  color: white;
  border: 1px solid #707070;
  background-color: #707070;
}

.secondary-button:hover {
  background-color: white;
  color: #707070;
}

.ternary-button {
  color: #055ca8;
  background-color: none;
  background: transparent;
  border: 1px solid #055ca8;
}
.ternary-button:hover {
  color: #707070;
  border: 1px solid #707070;
  background-color: white;
}
.tertiary-button {
  color: #055ca8;
  background-color: none;
  background: transparent;
  border: 1px solid #055ca8;
  height: 30px;
  line-height: 16px;
}

.deletion-button {
  color: #707070;
  background-color: none;
  background: transparent;
  border: 1px solid #707070;
}
.deletion-button:hover {
  color: #055ca8;
  border: 1px solid #055ca8;
  background-color: white;
}
</style>
