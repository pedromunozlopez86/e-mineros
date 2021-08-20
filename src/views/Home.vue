<template>
  <div>
    <v-container fluid class="black">
      <div class="d-flex-row">
        <v-img
          src="@/assets/logo-32.png"
          max-width="22vw"
          contain
          id="img-32"
          class="d-none d-md-block"
        >
        </v-img>
        <v-img
          src="@/assets/logo-32.png"
          max-width="50vw"
          contain
          id="img-32-mobile"
          class="d-block d-md-none"
        >
        </v-img>

        <div id="carrusel-top">
          <v-carousel
            cycle
            show-arrows-on-hover
            hide-delimiters
            height="80vh"
            class="p-0"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              leave-absolute
            >
            </v-carousel-item>
          </v-carousel>
        </div>

        <div>
          <v-img
            src="@/assets/rocas.png"
            alt=""
            id="img-rocas"
            class=""
          ></v-img>
        </div>
      </div>
    </v-container>
    <v-spacer></v-spacer>

    <v-container color="black" class="mt-15 d-none d-md-block" id="left">
      <v-row dense class="white--text">
        <v-col no-gutters cols="12" sm="6" md="6" lg="6">
          <div class="pa-10"> 
            <v-row dense>
              <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                <v-card light hover ripple>
                  <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                  >
                    <v-card-title v-text="card.title"></v-card-title>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="6" lg="5" class="">
          <div class="d-flex my-8 align-end text--light px-15 px-md-0">
            <h2 class="display-1">Nosotros</h2>
            <hr class="red px-6 mb-2 ml-2" />
          </div>
          <h4 class="pr-md-16 px-15 pl-md-0 mb-5">
            Más de 32 años de experiencia en el manejo de equipos de perforación
            de rocas.
          </h4>
          <h4 class="pr-10 px-15 pl-md-0">
            Nuestras instalaciiones estan bien equipadas con maquinaria
            computarizada , planta de tratamiento térmico propia y un
            laboratorio metalúrgico
          </h4>
          <div class="d-flex mt-10 pl-12 pl-md-8">
            <v-img src="@/assets/icon-minero-1.svg" contain></v-img>
            <h4 class="px-15 mr-5 text-justify">
              Todo esto se complementa con personal altamente calificado con un
              Staff compuesto por 10 ingenieros de diferentes especialidades más
              operadores, mecánicos y técnicos
            </h4>
          </div>
          <div class="d-flex mt-5 pl-12 pl-md-8">
            <v-img
              src="@/assets/icon-minero-2.svg"
              max-height="100px"
              max-width="100px"
              contain
              class="align-start"
            ></v-img>
            <h4 class="px-15">
              Estamos ubicados en la comuna de Recoleta, como también Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora
              cum ex distinctio, ipsam quod fugit, blanditiis harum, voluptates
              voluptatum odio? Soluta labore accusantium modi, libero maiores
              cumque dolor nisi.
            </h4>
          </div>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>

      <div class="d-flex mt-15 align-end white--text">
        <h2 class="display-1">Productos</h2>
        <hr class="red px-6 mb-2 ml-2" />
      </div>

      <div class="mt-5">
        <Carrusel />
      </div>
    </v-container>
    <v-container class="d-block d-md-none my-16">
      <h2 class="text-center white--text mb-3 font--bold"><b>Productos</b></h2>
      <hr class="red mx-16 my-5" />
      <CarruMobile />
    </v-container>
    <Footer />
  </div>
</template>

<style scoped>
#id-app {
  color: white;
  background: black;
}

.container {
  padding: 0;
}
#img-rocas {
  position: relative;
  padding: 0;
  border: 0;
  z-index: 1;
  width: 100%;
  margin-top: -10%;
  /* background-color: red; */
  /* display: block */
  /* align-content: center; */
  /* align-items: center; */
}
#img-32 {
  /* position: absolute; */
  /* background-color: blue; */
  /* width: 30vw; */
  margin-top: -10%;
  top: 25vw;
  left: 70%;
  z-index: 1;
}

#img-32-mobile {
  z-index: 1;
  top: 55vw;
  left: 25%;
}
</style>

<script>
import Carrusel from "@/components/Carrusel.vue";
import CarruMobile from "@/components/CarruMobile.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Carrusel,
    Footer,
    CarruMobile,
  },
  metaInfo:{
    title: 'Equipos Mineros EMSA Ltda.⛏',
     meta: [{ name: 'description', content: 'Repuestos para maquinas de minería'},]
  },
  data() {
    return {
      items: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/equipos-mineros-1.appspot.com/o/banner-01.jpg?alt=media&token=3988acc2-9db9-4e53-9473-4191423bf296",
        },
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/equipos-mineros-1.appspot.com/o/banner-02.jpg?alt=media&token=31d076a9-419f-49ed-939e-4ef29d975a48",
        },
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/equipos-mineros-1.appspot.com/o/banner-03.jpg?alt=media&token=c790e795-65c9-4486-acea-11f320b422e5",
        },
      ],
      cards: [
        { title: "Repuestos", src: require("../assets/foto-01.png"), flex: 12 },
        {
          title: "Servicio Técnico",
          src: require("../assets/foto-02.png"),
          flex: 6,
        },
        { title: "Maquinas", src: require("../assets/foto-03.png"), flex: 6 },
      ],
    };
  },
};
</script>
