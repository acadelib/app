<template>
  <div class="auth">
    <container>
      <row is-centered>
        <column tablet="6" desktop="4">
          <div class="text-center mb-2">
            <logo color="primary" size="large" />
            <h2 class="mt-1">Authentification</h2>
            <span class="text-gray is-headings">Bienvenue sur Acadelib</span>
          </div>

          <router-view />
        </column>
      </row>
    </container>
  </div>
</template>

<script>
import Container from "@/components/grid/Container";
import Row from "@/components/grid/Row";
import Column from "@/components/grid/Column";
import Logo from "@/components/elements/Logo";

export default {
  components: {
    Container,
    Row,
    Column,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/layout/auth";
</style>
