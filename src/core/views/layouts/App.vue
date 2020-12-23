<template>
  <div>
    <app-header></app-header>

    <main>
      <page-header></page-header>
      <router-view />
    </main>
  </div>
</template>

<script>
import AppHeader from "@/core/views/layouts/Header";
import PageHeader from "@/core/views/layouts/PageHeader";

export default {
  components: {
    AppHeader,
    PageHeader,
  },
};
</script>
