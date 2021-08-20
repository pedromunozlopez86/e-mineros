<template>
  <v-container fluid class="d-flex justify-center text-center mt-10">
    <form class="grey col-10 col-md-6 col-lg-4 mt-16">
      <v-img src="@/assets/logo-equiposmineros.svg"></v-img>
      <h3 class="white--text py-5">Login portal privado</h3>
      <v-text-field
        color="red"
        v-model="email"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        color="red"
        v-model="password"
        label="Password"
        required
        type="password"
      ></v-text-field>

      <v-alert color="red" type="error" v-if="errorLogin" v-model="mjsError"
        >{{ this.msjError }}
      </v-alert>
      <v-btn class="mr-4" @click="newLogin">
        Ingresar
      </v-btn>
      <v-btn @click="clear">
        Limpiar
      </v-btn>
    </form>
  </v-container>
</template>

<script>

import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      msjError: "",
      errorLogin: false,

    };
  },

  computed: {
    ...mapState(["userCredential", "repuestos"]),
  },

  methods: {
    async newLogin() {
      try {
        const { email, password } = this;
        await this.login({ email, password });
        this.$router.push("admin");
      } catch (e) {
        this.errorLogin=true
        this.msjError = e.message
      }
    },
    clear() {
      this.password = "";
      this.email = "";
      this.msjError = "";
    },

    ...mapMutations(["LOGIN", "LOGOUT"]),
    ...mapActions(["authStateChange", "login", "logOut"]),
  },
};
</script>
