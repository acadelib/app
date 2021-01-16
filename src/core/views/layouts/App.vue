<template>
  <div class="app">
    <app-sidebar></app-sidebar>

    <div class="page-container">
      <app-header></app-header>

      <main class="content">
        <page-header></page-header>

        <container>
          <router-view />
        </container>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/core/views/layouts/Header";
import AppSidebar from "@/core/views/layouts/Sidebar";
import PageHeader from "@/core/views/layouts/PageHeader";
import Container from "@/components/grid/Container";

export default {
  components: {
    AppHeader,
    AppSidebar,
    PageHeader,
    Container,
  },
};
</script>

<style lang="scss">
@import "@/styles/layout/app";
@import "@/styles/layout/page-container";
</style>
