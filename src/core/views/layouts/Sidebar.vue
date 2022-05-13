<template>
  <div
    class="sidebar-wrapper"
    :class="{ 'is-visible': visible }"
    @click.self="toggleSidebar"
  >
    <aside class="sidebar">
      <logo color="primary" size="small"></logo>

      <ul class="nav">
        <li class="nav-item">
          <a href="#" class="nav-link is-active">
            <span class="nav-icon"></span>
            <span class="nav-text">Tableau de bord</span>
          </a>

          <ul class="dropdown-menu">
            <li><a href="#" class="dropdown-item is-active">Absences</a></li>
            <li><a href="#" class="dropdown-item">Retards</a></li>
            <li><a href="#" class="dropdown-item">Punitions</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon"></span>
            <span class="nav-text">Emploi du temps</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon"></span>
            <span class="nav-text">Messagerie</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon"></span>
            <span class="nav-text">Vie scolaire</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon"></span>
            <span class="nav-text">Comptabilité</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="nav-icon"></span>
            <span class="nav-text">Administration</span>
          </a>
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
