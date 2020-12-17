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

    <button type="submit" class="button is-primary">Connexion</button>
  </form>
</template>

<script>
import FormInput from "@/components/form/Input";
import { LOGIN } from "@/modules/auth/store/actions.type";

export default {
  name: "Login",

  components: {
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
