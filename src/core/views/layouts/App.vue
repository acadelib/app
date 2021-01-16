<template>
  <div>
    <app-header></app-header>
    <app-sidebar></app-sidebar>

    <main>
      <page-header></page-header>
      <router-view />
    </main>
  </div>
</template>

<script>
import AppHeader from "@/core/views/layouts/Header";
import AppSidebar from "@/core/views/layouts/Sidebar";
import PageHeader from "@/core/views/layouts/PageHeader";

export default {
  components: {
    AppHeader,
    AppSidebar,
    PageHeader,
  },
};
</script>
