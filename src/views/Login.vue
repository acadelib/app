<template>
  <div class="login">
    <h1>Login</h1>

    <form @submit.prevent="login(email, password)">
      <input type="email" placeholder="Adresse e-mail" v-model="email" />
      <input type="password" placeholder="Mot de passe" v-model="password" />
      <button type="submit">Connexion</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login(email, password) {
      this.$store.dispatch("user/login", { email, password }).then(user => {
        console.log(user);
      });
    }
  }
};
</script>
