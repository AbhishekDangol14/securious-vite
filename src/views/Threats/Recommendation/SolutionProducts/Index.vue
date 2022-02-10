<template>
  <div class="flex flex-col gap-y-10 my-5">
    <div class="text-blue-blue ml-1">
      <h class="text-lg font-bold ml-2 text-blue-blue cursor-pointer">
        Possible Solution Products
      </h>
    </div>

    <transition-group>
      <draggable
        class="dragArea grid grid-cols-4"
        handle=".handle"
        :list="list"
      >
        <div
          class="list-group-item p-3 text-center"
          v-for="element in list"
          :key="element.name"
        >
          <component :item="element" v-bind:is="'SolutionProduct'" />
        </div>
      </draggable>
    </transition-group>
    <div class="text-blue-blue mr-0 flex justify-end">
      <Button
        name="ternary-button"
        title="Select existing service"
        :faIcon="'fa fa-check'"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { VueDraggableNext } from "vue-draggable-next";
import SolutionProduct from "@/views/Threats/Recommendation/SolutionProducts/SolutionProduct.vue";
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "Product 1",
        },
        {
          id: 2,
          name: "Product 2",
        },
      ],
    };
  },
  components: {
    Button,
    SolutionProduct,
    draggable: VueDraggableNext,
  },
};
</script>

<style></style>
