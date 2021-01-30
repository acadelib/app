<template>
  <main>
    <page-header></page-header>

    <container class="content" fluid>
      <router-view />
    </container>
  </main>
</template>

<script>
import PageHeader from "@/core/views/layouts/PageHeader";
import Container from "@/components/grid/Container";

export default {
  components: {
    PageHeader,
    Container,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/layout/content";
</style>
