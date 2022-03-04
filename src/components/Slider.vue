<template>
  <div class="my-4 w-auto">
    <Slider v-model="val" :max="max" :min="min" :step="step" />
  </div>
</template>

<script lang="ts">
import Slider from "@vueform/slider";
import { computed, defineComponent } from "vue";
export default defineComponent({
  components: {
    Slider,
  },
  props: {
    id: String,
    valueOfSlider: Object,
    max: Number,
    min: Number,
    step: Number,
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    return {
      val: computed({
        get() {
          return props.valueOfSlider;
        },
        set(value) {
          context.emit("update:modelValue", value);
        },
      }),
    };
  },
});
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style>
.slider-base {
  height: 12px;
}
.slider-horizontal .slider-handle {
  top: -2px;
}
</style>
