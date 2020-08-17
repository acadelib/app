<template>
  <div class="login">
    <h1>Authentification</h1>

    <p class="l-auth__text">Bienvenue sur Acadelib !</p>
    <p class="l-auth__text">Veuillez vous authentifier pour continuer.</p>

    <form @submit.prevent="login(email, password)">
      <input type="email" placeholder="Adresse e-mail" v-model="email" />
      <input type="password" placeholder="Mot de passe" v-model="password" />

      <v-button type="submit" color="primary" block>Connexion</v-button>
    </form>
  </div>
</template>

<script>
import { LOGIN } from "@/store/actions.type";
import VButton from "@/components/Button";

export default {
  name: "Login",

  components: {
    VButton
  },

  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login(email, password) {
      this.$store.dispatch(LOGIN, { email, password }).then(() => {
        this.$router.push({ name: "dashboard" });
      });
    }
  }
};
</script>
