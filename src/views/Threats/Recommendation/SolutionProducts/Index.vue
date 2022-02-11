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
        :list="selectedProducts"
      >
        <div
          class="list-group-item p-3 text-center"
          v-for="element in selectedProducts"
          :key="element.name"
        >
          <component
            :item="element"
            :removeThisProduct="removeProduct"
            v-bind:is="'SolutionProduct'"
          />
        </div>
      </draggable>
    </transition-group>

    <div class="text-blue-blue mr-0 flex justify-end">
      <Button
        @click="openModal()"
        name="ternary-button"
        title="Select existing service"
        :faIcon="'fa fa-check'"
      />
    </div>
    <div>
      <SolutionServicePicker
        v-if="showModal"
        :closeModalBox="closeModal"
        :products="items"
        :selectThisProduct="toggleSelection"
        :isSelected="checkIfSelected"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { VueDraggableNext } from "vue-draggable-next";
import SolutionProduct from "@/views/Threats/Recommendation/SolutionProducts/SolutionProduct.vue";
import SolutionServicePicker from "@/views/Threats/Recommendation/SolutionProducts/SolutionServicePicker.vue";

export default {
  data() {
    return {
      showModal: false,
      selectedProducts: [],
      items: [
        {
          id: 1,
          name: "Product 1",
        },
        {
          id: 2,
          name: "Product 2",
        },
        {
          id: 3,
          name: "Product 3",
        },
        {
          id: 4,
          name: "Product 4",
        },
        {
          id: 5,
          name: "Product 5",
        },
        {
          id: 6,
          name: "Product 6",
        },
        {
          id: 7,
          name: "Product 7",
        },
        {
          id: 8,
          name: "Product 8",
        },
        {
          id: 9,
          name: "Product 9",
        },
        {
          id: 10,
          name: "Product 10",
        },
      ],
    };
  },
  components: {
    Button,
    SolutionProduct,
    draggable: VueDraggableNext,
    SolutionServicePicker,
  },
  methods: {
    openModal: function () {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    toggleSelection(product) {
      let listItem = this.selectedProducts.find(
        (item) => item.id == product.id
      );

      if (!listItem) {
        this.selectedProducts.push(product);
      } else {
        let removeIndex = this.selectedProducts
          .map(function (item) {
            return item.id;
          })
          .indexOf(product.id);
        this.selectedProducts.splice(removeIndex, 1);
      }
    },
    removeProduct(product) {
      let removeIndex = this.selectedProducts
        .map(function (item) {
          return item.id;
        })
        .indexOf(product.id);
      this.selectedProducts.splice(removeIndex, 1);
    },
    checkIfSelected(product) {
      let item = this.selectedProducts.find((item) => item.id == product.id);
      if (item) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style></style>
