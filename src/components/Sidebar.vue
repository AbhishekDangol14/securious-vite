<template>
  <div
    class="sidebar bg-white shadow-sidebar-shadow h-screen fixed"
    v-if="menu"
  >
    <div class="logo pt-4 w-56 pl-3 pb-3">
      <img src="../assets/views/securious-logo.svg" />
    </div>
    <div class="border-b border-grey-grey border-opacity-20 my-6"></div>
    <Menu v-for="item in menu" :item="item" v-bind:key="item" />
    <div v-if="role == 'Admin'">
      <div class="border-b border-grey-grey border-opacity-20 pt-2"></div>
      <div :class="{ 'menu-item': $route.name == 'users' }">
        <div class="pt-2 pl-6 mt-1 pb-2 flex-cols space-y-2">
          <div class="flex text-grey-grey space-x-2 text-base items-center">
            <div>
              <img src="../assets/components/user.svg" />
            </div>
            <router-link :to="{ name: 'users' }">Users</router-link>
          </div>
        </div>
      </div>
      <div :class="{ 'menu-item': $route.name == 'settings' }">
        <div class="pt-2 pl-6 mt-1 pb-2 flex-cols space-y-2">
          <div class="flex text-grey-grey space-x-2 text-base items-center">
            <div>
              <img src="../assets/components/setting.svg" />
            </div>
            <router-link :to="{ name: 'settings' }">Setting</router-link>
          </div>
        </div>
      </div>
      <div class="pt-2 pl-6 flex-cols space-y-2">
        <button class="flex text-grey-grey space-x-2 text-base" @click="logout">
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
<style>
.sidebar {
  width: 244px;
}
.menu-item {
  color: #055ca8 !important;
  background-color: #e6eff6 !important;
  border-left: 4px solid #055ca8;
}

.menu-item > div > div > div > img {
  filter: invert(18%) sepia(70%) saturate(3298%) hue-rotate(195deg)
    brightness(100%) contrast(96%);
  height: 15px;
  width: 15px;
}
.menu-item > div > div {
  color: #055ca8 !important;
}
</style>
