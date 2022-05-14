<template>
  <div
    class="sidebar-wrapper"
    :class="{ 'is-visible': visible }"
    @click.self="toggleSidebar"
  >
    <aside class="sidebar">
      <logo color="primary" size="small"></logo>

      <ul class="nav">
        <li class="nav-item" v-for="(route, index) in routes" :key="index">
          <router-link :to="{ name: route.name }" class="nav-link">
            <span class="nav-icon">
              <font-awesome-icon :icon="route.meta.icon" />
            </span>

            <span class="nav-text">{{ route.meta.title }}</span>
          </router-link>

          <ul class="dropdown-menu" v-if="route.children">
            <li v-for="(child, childIndex) in route.children" :key="childIndex">
              <router-link :to="{ name: child.name }" class="dropdown-item">{{
                child.meta.title
              }}</router-link>
            </li>
          </ul>
        </li>
      </ul>

      <div class="user">
        <div class="user-avatar">
          <img src="@/assets/images/avatar.svg" alt="John Doe" />
        </div>

        <div class="user-info">
          <span class="user-name">{{ $store.getters.fullName }}</span>
          <span class="user-role">{{ roles }}</span>
        </div>

        <ul class="user-nav">
          <li class="user-item">
            <a href="#" class="user-link">
              <font-awesome-icon icon="gear" />
            </a>
          </li>

          <li class="user-item">
            <a href="#" class="user-link" @click.prevent="logout">
              <font-awesome-icon icon="right-from-bracket" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import Logo from "@/components/elements/Logo";
import { TOGGLE_SIDEBAR } from "@/core/store/actions.type";
import { LOGOUT } from "@/modules/auth/store/actions.type";

export default {
  components: {
    Logo,
  },

  computed: {
    visible() {
      return this.$store.getters.sidebarOpen;
    },

    routes() {
      return this.$router.options.routes[0].children;
    },

    roles() {
      return this.$store.state.auth.user?.roles
        ?.map((r) => r.display_name)
        .join("/");
    },
  },

  methods: {
    toggleSidebar() {
      this.$store.dispatch(TOGGLE_SIDEBAR);
    },

    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/layout/sidebar";
</style>
