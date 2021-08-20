<template>
<v-app id="id-app" >
  <Navbar/>
  <v-main color="black" >
    <v-container fluid >
  <!-- <v-fade-transition hide-on-leave > -->
      <router-view></router-view>
  <!-- </v-fade-transition> -->
    </v-container>
  <Whatsapp/>
  </v-main>
  <v-footer color="black d-flex justify-center" >
    <h5 class="white--text text-center pb-4 pt-3">www.equiposmineros.cl</h5>
  </v-footer>

</v-app>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Whatsapp from '@/components/Whatsapp.vue'
import {mapActions} from "vuex";


export default {
  components: { Navbar, Whatsapp},
  name: 'App',
  data(){
    return {
      dialog: false
    }
  },

  methods: {
    ...mapActions(['authStateChange']),
    
  },
  mounted() {
    this.authStateChange();
  },
};
</script>

<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
    font-family: 'Roboto', sans-serif;

    margin: 0px;
    border: 0;
    padding: 0;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  html {
  scroll-behavior: smooth !important;
  margin: 0;
  border: 0;
  padding: 0;
}

  #modal-form{
    z-index: 3
  }
  #id-app{
  background: black;
  /* width: 100%; */
   top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  #nav{ 
    background: black;
    opacity: 0.8;
    z-index: 2;
    margin:0;
    width: 100vw;
    }

  ul {
    list-style-type: none;
    }
    a{
      text-decoration: none;
    }

    .hr-1 {
      background: red;
      height: 3px;
      position: relative;
      width: 50px;
      display: flex;
      align-items: flex-end;

    }
</style>
