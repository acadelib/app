<template>
  <div class="login">
    <h1 class="l-auth__title o-h2">Authentification</h1>

    <p class="l-auth__text">Bienvenue sur Acadelib !</p>
    <p class="l-auth__text">Veuillez vous authentifier pour continuer.</p>

    <form @submit.prevent="login(email, password)">
      <v-input
        id="email"
        type="email"
        label="Adresse e-mail"
        placeholder="Saisissez votre adresse e-mail"
        v-model="email"
      ></v-input>

      <v-input
        id="password"
        type="password"
        label="Mot de passe"
        placeholder="Saisissez votre mot de passe"
        v-model="password"
      ></v-input>

      <v-button type="submit" color="primary" block>Connexion</v-button>
    </form>
  </div>
</template>

<script>
import { LOGIN } from "@/store/actions.type";
import VButton from "@/components/Button";
import VInput from "@/components/FormInput";

export default {
  name: "Login",

  components: {
    VButton,
    VInput
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
