<template>
  <div class="sidebar bg-white shadow-sidebar-shadow h-screen" v-if="menu">
    <div class="logo pt-4 w-56 pl-3 pb-3">
      <img src="../assets/views/securious-logo.svg" />
    </div>
    <div class="border-b border-grey-grey border-opacity-20 my-6"></div>
    <Menu v-for="item in menu" :item="item" v-bind:key="item" />
    <div v-if="role == 'Admin'">
      <div class="border-b border-grey-grey border-opacity-20 pt-4"></div>
      <div class="pt-4 pl-6 flex-cols space-y-4">
        <div class="flex text-grey-grey space-x-2 pb-3 text-base">
          <img src="../assets/components/user.svg" /><router-link
            :to="{ name: 'users' }"
            >Users</router-link
          >
        </div>
        <div class="flex text-grey-grey space-x-2 text-base pb-3">
          <img src="../assets/components/setting.svg" /><router-link
            :to="{ name: 'settings' }"
            >Setting</router-link
          >
        </div>
        <button
          class="flex text-grey-grey space-x-2 text-base pb-3"
          @click="logout"
        >
          <img src="../assets/components/logout.svg" />
          <div>Logout</div>
        </button>
      </div>
    </div>
    <div v-show="token">
      <hr />
      <div
        class="cursor-pointer flex space-x-2 pt-4 pl-4"
        @click="stopImpersonating"
      >
        <i class="fa fa-stop-circle" aria-hidden="true"></i>
        <div class="text-sm font-normal">Stop Impersonating</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { LOGOUT } from "@/store/modules/actions.type";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import Menu from "../components/Menu.vue";

export default defineComponent({
  components: {
    Menu,
  },
  setup() {
    const store = useStore();
    let user = localStorage.getItem("USER");
    let menu = ref([]);
    let role = ref();

    const token = localStorage.getItem("IMPERSONATOR_TOKEN");

    if (user) {
      menu.value = JSON.parse(user).menus;
      role.value = JSON.parse(user).role[0].role;
    }

    function logout() {
      store.dispatch(LOGOUT);
    }

    function stopImpersonating() {
      const user = localStorage.getItem("IMPERSONATOR_USER");
      token ? localStorage.setItem("ID_TOKEN_KEY", token) : null;
      user ? localStorage.setItem("USER", user) : null;
      localStorage.removeItem("IMPERSONATOR_TOKEN");
      localStorage.removeItem("IMPERSONATOR_USER");
      router.push({ name: "users" });
    }

    return {
      menu,
      role,
      logout,
      stopImpersonating,
      token,
    };
  },
});
</script>
<style scoped>
.sidebar {
  width: 244px;
}
</style>
