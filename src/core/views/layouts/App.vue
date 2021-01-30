<template>
  <div class="app">
    <app-sidebar></app-sidebar>

    <div class="page-container">
      <app-header></app-header>
      <app-content></app-content>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/core/views/layouts/Header";
import AppSidebar from "@/core/views/layouts/Sidebar";
import AppContent from "@/core/views/layouts/Content";

export default {
  components: {
    AppHeader,
    AppSidebar,
    AppContent,
  },
};
</script>

<style lang="scss">
@import "@/styles/layout/app";
@import "@/styles/layout/page-container";
</style>
