<template>
  <v-container class="mt-16 black" id="hero">
  <div class="mt-16" id="contenedor" >
    <h1 class="transparent text-center white--text pt-16">
      Error 404, página no encontrada!
    </h1>
    <br>
    <div class="text-center">
    <router-link to="/">
    <v-btn
    class="white--text"
      color="red"
      elevation="5"
      large>Regresar al Inicio</v-btn>
    </router-link>

    </div>
  </div>
     <!-- <v-footer class="grey darken-3 py-15">
        <v-col cols="12" class="d-flex justify-center align-center mb-5">
        <hr class="white px-16 mr-5">
        <img src="@/assets/logo-equiposmineros.svg" alt="logo-em" height="25px">
        <hr class="white px-16 ml-5">
        </v-col>
        <v-row class="white--text text-center">
          <v-col cols="4" class="d-flex justify-center align-center">
            <v-icon color="white">mdi-map-marker</v-icon>
            <h5 class="ml-2">Independencia , Región Metropolitana</h5>
          </v-col>
          <v-col cols="4">
            <div class="d-flex justify-center">
            <v-icon color="white"> mdi-phone</v-icon>
            <h5 class="ml-2">(+56 2) 737 64 18</h5>
            </div>
            <div class="d-flex justify-center mt-2 pl-2">
            <v-icon color="white"> mdi-phone</v-icon>
            <h5 class="ml-2">(+56 2) 737 64 19</h5>
            </div>
          </v-col>
          <v-col cols="4" class="">
            <div class="d-flex justify-center">
            <v-icon color="white"> mdi-email</v-icon>
            <h5 class="ml-2">emsa@equiposmineros.cl</h5>
            </div>
            <div class="d-flex justify-center mt-2 pl-2">
            <v-icon color="white"> mdi-email</v-icon>
            <h5 class="ml-2">comex@equiposmineros.cl</h5>
            </div>
          </v-col>
        </v-row>
      </v-footer> -->
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
  #hero{
    background-image: url("../assets/banner-04.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    width: 100vw;
  }

</style>