<template>
  <div>
      <v-footer class="grey darken-3 py-15">

        <v-col cols="12" class="d-flex justify-center align-center mb-5">
        <hr class="white px-16 mr-5 d-none d-md-block">
        <img src="@/assets/logo-equiposmineros.svg" alt="logo-em" height="25px">
        <hr class="white px-16 ml-5 d-none d-md-block">
        </v-col>
        
        <v-row class="white--text text-center">

          <v-col cols="12" md="4"  class="d-flex justify-center align-center">
            <a href="https://goo.gl/maps/68tEsS4uTn2N6YhH6" target="_blank">
            <div class="d-flex align-center white--text">
            <v-icon color="white">mdi-map-marker</v-icon>
            <h5 class="ml-2">Independencia , Región Metropolitana</h5>
                </div>
            </a>
          </v-col>

          <v-col cols="12" md="4" >

            <a href="tel:+5627376418">
            <div class="d-flex justify-center">
            <v-icon color="white"> mdi-phone</v-icon>
            <h5 class="ml-2 white--text">(+56 2) 737 64 18</h5>
            </div>
            </a>

            <a href="tel:+5627376419">
            <div class="d-flex justify-center mt-2 pl-2">
            <v-icon color="white"> mdi-phone</v-icon>
            <h5 class="ml-2 white--text">(+56 2) 737 64 19</h5>
            </div>
            </a>

          </v-col>
          <v-col cols="12" md="4"  class="white--text">

            <a href="mailto:emsa@equiposmineros.cl">
            <div class="d-flex justify-center white--text">
            <v-icon color="white"> mdi-email</v-icon>
            <h5 class="ml-2">emsa@equiposmineros.cl</h5>
            </div>
            </a>
            <a href="mailto:comex@equiposmineros.cl">
            <div class="d-flex justify-center mt-2 pl-2 white--text">
            <v-icon color="white"> mdi-email</v-icon>
            <h5 class="ml-2">comex@equiposmineros.cl</h5>
            </div>
            </a>
          </v-col>
        </v-row>
      </v-footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scooped>
a{
    text-decoration: none;
    text-decoration-color: none;
}
</style>