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
import ApiService from "@/common/api.service";

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
      ApiService.get("/sanctum/csrf-cookie").then(() => {
        ApiService.post("/login", {
          email: this.email,
          password: this.password
        }).then(() => {
          ApiService.get("/api/user").then(response => {
            console.log(response);
          });
        });
      });
    }
  }
};
</script>
