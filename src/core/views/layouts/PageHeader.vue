<template>
  <div class="page-header">
    <container fluid>
      <h1 class="page-title">Tableau de bord</h1>
      <span class="page-subtitle">Lycée Saint Riquier</span>
    </container>
  </div>
</template>

<script>
import Container from "@/components/grid/Container";

export default {
  components: {
    Container,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/layout/page-header";
</style>
