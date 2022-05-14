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

      <div></div>
    </aside>
  </div>
</template>

<script>
import Logo from "@/components/elements/Logo";
import { TOGGLE_SIDEBAR } from "@/core/store/actions.type";

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
  },

  methods: {
    toggleSidebar() {
      this.$store.dispatch(TOGGLE_SIDEBAR);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/layout/sidebar";
</style>
