<template>
  <form @submit.prevent="login">
    <form-input
      id="email"
      type="email"
      label="Adresse e-mail"
      placeholder="Saisissez votre adresse e-mail"
      required
      v-model="email"
    />

    <form-input
      id="password"
      type="password"
      label="Mot de passe"
      placeholder="Saisissez votre mot de passe"
      required
      v-model="password"
    />

    <v-button type="submit" color="primary">Connexion</v-button>
  </form>
</template>

<script>
import VButton from "@/components/elements/Button";
import FormInput from "@/components/form/Input";
import { LOGIN } from "@/modules/auth/store/actions.type";

export default {
  name: "Login",

  components: {
    VButton,
    FormInput,
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch(LOGIN, {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        });
    },
  },
};
</script>
