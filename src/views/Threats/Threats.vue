<template>
  <Layout Title="Threat Library">
    <div>
      <div>
        <div class="grid grid-cols-6 gap-4">
          <div>
            <Input name="Search" placeholder="Search..." />
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </div>
      <div><AddButton path="threat/create">Add new threat</AddButton></div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Input from "@/components/Input.vue";
import { defineComponent } from "vue";
import Layout from "@/components/Main.vue";
import AddButton from "@/components/AddButton.vue";

export default defineComponent({
  components: {
    Layout,
    AddButton,
    Input,
  },
  setup() {
    return {};
  },
});
</script>
