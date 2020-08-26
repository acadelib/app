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

    <div class="l-container">
      <div class="l-grid is-centered">
        <div class="l-grid__column is-xs-12 is-sm-8 is-md-6 is-lg-5 is-xl-4">
          <router-view />
        </div>
      </div>
    </div>

    <footer class="l-auth__footer"></footer>
  </div>
</template>

<style lang="scss">
@import "~@/styles/layout/auth";
</style>
