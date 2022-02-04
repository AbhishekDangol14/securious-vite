<template>
  <div class="grid grid-cols-2 mx-5 space-x-8 p-5">
    <div>
      <Switch name="Active" />
      <Switch name="Show if industry is:" />
      <Input placeholder="Multi select" />
    </div>
    <div>
      <div>
        <Switch name="Show if company size is:" />
        <div class="my-3">
          <Slider v-model="valueOfOptions" :max="500" :min="0" :step="1" />
        </div>
        <Switch name="Show if using the following asset(s):" />
        <Input placeholder="Multi select" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Switch from "@/components/Switch.vue";
import Slider from "@vueform/slider";
export default {
  data() {
    return {
      valueOfOptions: [20, 40],
    };
  },
  components: {
    Input,
    Switch,
    Slider,
  },
};
</script>

<style></style>
