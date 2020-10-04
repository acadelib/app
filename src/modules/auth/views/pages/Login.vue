<template>
  <div>
    <form @submit.prevent="login">
      <input type="email" placeholder="Adresse e-mail" v-model="email" />
      <input type="password" placeholder="Mot de passe" v-model="password" />
      <button type="submit">Connexion</button>
    </form>
  </div>
</template>

<script>
import { LOGIN } from "@/modules/auth/store/actions.type";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch(LOGIN, {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        });
    }
  }
};
</script>
