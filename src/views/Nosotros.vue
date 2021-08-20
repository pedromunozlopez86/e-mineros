<template>
  <div class="white">
    <v-container fluid id="hero-nosotros">
      <v-row class="mt-6">
        <v-col
        cols="12" sm="7"
        md="6" lg="4" class="mt-16">
        <v-img src="@/assets/logo-32.png" aspect-ratio="3.2"
        class="mt-md-16 ml-md-16 mt-16"
        ></v-img>

        </v-col>
      </v-row>

    </v-container>

    <v-container  class="mt-16 white" id="main">
      <v-row>
        <v-col cols="12" md="6">
          <v-img src="@/assets/img_somos.png"></v-img>
        </v-col>
        <v-col cols="12" md="6" class="pt-10 pr-md-16 px-16">

          <h2 class="pr-md-10">
            <b>Más de 32 Años </b>de experiencia en el manejo de equipos de perforación de rocas. 
          <div class="rojito"></div>
          </h2>
          <p class="mt-12 mr-0 mr-lg-10 pr-md-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure reprehenderit molestiae aliquid dolor voluptates aperiam quod, unde at quia eum voluptatem ducimus assumenda dolorem ipsa ratione sit. Consectetur, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit itaque quod id excepturi deserunt harum, molestiae soluta tenetur asperiores, expedita qui consequatur quibusdam voluptate ullam ipsam? Voluptatibus facere recusandae iste?</p>
          <v-spacer></v-spacer>
          <div class="d-flex justify-center">

          <v-btn class="error white--text px-16 my-7 " @click="toForm">Contacto</v-btn>
          </div>
        </v-col>
      </v-row>

    </v-container>
      <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"

export default {
  components:{Footer},
  methods:{
    toForm(){this.$router.push('/contacto')}
  }
};
</script>

<style scoped>



template {
  font-family: 'Roboto';
}

#texto {
  padding: 2rem 5rem;
}

#main {
  background-color: white;
}

#hero-nosotros {
  background-image: url("../assets/bg-somos.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  background-color: black;
  margin: 0;
}
</style>