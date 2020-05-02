<template>
  <div class="login">
    <h1>Login</h1>

    <form @submit.prevent="login">
      <input type="email" placeholder="Adresse e-mail" v-model="email" />
      <input type="password" placeholder="Mot de passe" v-model="password" />
      <button type="submit">Connexion</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000";

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
      axios.get("/sanctum/csrf-cookie").then(() => {
        axios
          .post("/login", {
            email: this.email,
            password: this.password
          })
          .then(() => {
            axios.get("/api/user").then(response => {
              console.log(response);
            });
          });
      });
    }
  }
};
</script>
