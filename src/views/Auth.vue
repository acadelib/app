<template>
  <div class="l-auth">
    <header class="l-auth__header">
      <router-link
        class="l-auth__logo"
        title="Retourner à la page d'authentification"
        to="{ name: 'login' }"
        >Acadelib</router-link
      >
    </header>

    <router-view />

    <footer class="l-auth__footer"></footer>
  </div>
</template>

<style lang="scss">
@import "~@/styles/layout/auth";
</style>
