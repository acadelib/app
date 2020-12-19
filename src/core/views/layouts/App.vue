<template>
  <div>
    <app-header></app-header>
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/core/views/layouts/Header";

export default {
  components: {
    AppHeader,
  },
};
</script>
