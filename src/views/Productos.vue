<template>
  <div>
    <v-container fluid id="hero-productos"> </v-container>
    <v-container fluid class="" id="main">
      <v-row>
        <v-col cols="12" sm="4" md="4" lg="4">
          <template>
            <v-card
              class="mx-auto py-8"
              max-width="330"
              tile
              rounded
              id="barra-lateral"
            >
              <v-list class="ml-0 px-8" rounded tile dense>
                <v-divider class="mb-4"></v-divider>
                <v-list-item-group v-model="selectedItem" color="error">
                  <v-list-item v-for="(item, i) in items" :key="i" class=" ">
                    <v-list-item-content @click="listeylor(i)">
                      <v-list-item-title v-text="item.text" class="pl-4">
                      </v-list-item-title>
                      <hr class="error" />
                      <div></div>
                      <v-divider></v-divider>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </template>
        </v-col>

          <v-col cols="12" sm="7" md="8" lg="8">
            <div class="d-flex my-5 ml-5 ml-md-0">
              <h2 v-text="items[this.itemLista].text"></h2>
              <div class="rojito"></div>
            </div>
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="6" class="pr-16">
                <div>
                  <v-item-group mandatory>
                    <v-container>
                      <v-row>
                        <v-img v-bind:src="foto(x)" class="px-15"></v-img>

                        <v-col
                          v-for="(img, i) in items[this.itemLista].img"
                          :key="i"
                          cols="6"
                          md="6"
                          lg="4"
                        >
                          <v-card class="d-flex align-center ml-5 pl-5" dark>
                          </v-card>
                          <v-item v-slot="{ toggle }" class="pr-3">
                            <v-card
                              ripple
                              hover
                              rounded="true"
                              class="escondido"
                              @click="toggle, foto(i)"
                            >
                              <div class="d-flex justify-center">
                                <img :src="img" class="escondido" />
                              </div>
                            </v-card>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </div>
              </v-col>

              <v-col cols="12" sm="12" md="5" class="ml-4">
                <div class="pr-10  mr-sm-0 text-left">
                  <h2
                    class="ml-5 ml-md-5"
                    v-text="items[this.itemLista].subtitulo"
                  ></h2>
                  <br />
                  <ul
                    v-for="(item, i) in items[this.itemLista].vinetas"
                    :key="i"
                    class="mb-1"
                  >
                    <li class="text-left ml-4">{{ item }}</li>
                  </ul>
                </div>
                <div class="d-flex justify-start">
                  <v-btn class="red white--text px-16 my-5 ml-6" @click="toForm"
                    >Contacto</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      selectedItem: Number,
      itemLista: 0,
      x: 0,
      items: [
        {
          text: "Plataformas Hidraúlicas",
          subtitulo: "Emrock ag emo 104, diesel - electrohidráulica",
          vinetas: [
            "Controlado Directo",
            "Túneles hidraúlicos y minería",
            "Boom-ag 28 booms y Em 1838 perforadoras de roca",
          ],
          img: [
            require("../assets/B01-MINI.jpg"),
            require("../assets/B02-MINI.jpg"),
            require("../assets/B03-MINI.jpg"),
            require("../assets/B04-MINI.jpg"),
          ],
          fotos: [
            require("../assets/B01.jpg"),
            require("../assets/B02.jpg"),
            require("../assets/B03.jpg"),
            require("../assets/B04.jpg"),
          ],
        },

        {
          text: "Drifter",
          subtitulo: "Hydraulic Drifter EM 300 S",
          vinetas: [
            "Controlado Directo",
            "Túneles hidraúlicos y minería con uno",
            "Boom-ag 28 booms y Em 1838 perforadoras de roca",
          ],
          img: [
            require("../assets/P01-mini.jpg"),
            require("../assets/B03-MINI.jpg"),
          ],
          fotos: [require("../assets/P01.jpg"), require("../assets/B03.jpg")],
        },

        {
          text: "Reemplazo deriva Hidraúlica",
          subtitulo: "Hydraulic Drifter EM 300 S",
          vinetas: [
            "Controlado Directo",
            "Túneles hidraúlicos y minería con uno",
            "Boom-ag 28 booms y Em 1838 perforadoras de roca",
          ],
          img: [
            require("../assets/P02-mini.jpg"),
            require("../assets/B04-MINI.jpg"),
          ],
          fotos: [require("../assets/P02.jpg"), require("../assets/B04.jpg")],
        },

        {
          text: "Reemplazo de alimento",
          subtitulo: "Hydraulic Drifter EM 300 S",
          vinetas: [
            "Controlado Directo",
            "Túneles hidraúlicos y minería con uno",
            "Boom-ag 28 booms y Em 1838 perforadoras de roca",
          ],
          img: [
            require("../assets/P03-mini.jpg"),
            require("../assets/B03-MINI.jpg"),
          ],
          fotos: [require("../assets/P03.jpg"), require("../assets/B03.jpg")],
        },
        {
          text: "Rompe rocas Hidraúlico",
          subtitulo: "Hydraulic Drifter EM 300 S",
          vinetas: [
            "Controlado Directo",
            "Túneles hidraúlicos y minería con uno",
            "Boom-ag 28 booms y Em 1838 perforadoras de roca",
          ],
          img: [
            require("../assets/P04-mini.jpg"),
            require("../assets/B03-MINI.jpg"),
          ],
          fotos: [require("../assets/P04.jpg"), require("../assets/B03.jpg")],
        },
        // { text: "Repuesto de martillo Hidraúlico", icon: "mdi-flag" },
      ],
    };
  },
  components: { Footer },
  methods: {
    toForm() {
      this.$router.push("/contacto");
    },
    listeylor(i) {
      this.itemLista = i;
      console.log(this.itemLista);
      this.x = 0;
      return this.itemLista;
    },

    foto(i) {
      let srcImg = this.items[this.itemLista].fotos[i];
      console.log(srcImg);
      this.x = i;
      return srcImg;
    },
  },
};
</script>

<style scooped>
#hero-productos {
  background-image: url("../assets/bg-producto.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 35vh;
  background-color: black;
  margin: 0;
}

#main {
  background-color: white;
}

template,
div {
  margin: 0;
  border: 0;
  padding: 0;
}
/* .rojito{
  height: 30px;
  width: 30px;
  padding: 2px 2px;
}

.rojito:hover{
  background-color: red;
} */

.hovers:hover {
  background-color: red;
}

#barra-lateral {
  margin-top: -70px;
  border-radius: 50% 20%;
  color: aqua !important;
}

.rojito {
  background-color: red;
  width: 80px;
  height: 2px;
  margin-top: 2rem;
  margin-left: 12px;
}

.escondido {
  overflow: hidden;
  object-fit: cover;
}
</style>
