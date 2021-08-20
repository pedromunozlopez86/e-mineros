<template>
  <v-sheet height="100%" class="" style="position: relative ;" dark>
    <v-container class="mt-16">
      <div class="mt-16 d-flex justify-center">
        <v-card class=" " height="auto" width="90vw" dark>
          <v-row>
            <v-col cols="12" md="6">
              <v-card-title class="">
                <h3 class="font-weight-bold pt-2 display-5">
                  Buscar Repuestos:
                </h3>
              </v-card-title>
              <!-- <v-select
                hint="Selecciona un filtro"
                full-width
                dark
                value="nombre"
                :items="busqueda"
                v-model="option"
                validate-on-blur
                shaped
                append-icon="mdi-menu-down-outline"
                autofocus
                eager
                item-color="red"
                prepend-inner-icon="mdi-tools"
                menu-props="dark"
                class="mx-16 mx-md-8 red--text">
              </v-select> -->
            </v-col>
            <v-col></v-col>
            <!-- <v-col cols="12" md="4">
              <v-select
                hint="Selecciona un filtro"
                full-width
                dark
                :items="busqueda"
                v-model="option"
                validate-on-blur
                shaped
                append-icon="mdi-menu-down-outline"
                autofocus
                eager
                item-color="red"
                prepend-inner-icon="mdi-tools"
                menu-props="dark"
                class="mx-16 mx-md-8 red--text"
              >
              </v-select>
            </v-col> -->

            <v-col cols="12" md="">
              <v-btn
                id="btn-coti"
                color="error"
                @click.stop="drawer = !drawer"
                class=" py-6 ml-16"
              >
                <v-icon class="mr-5">mdi-cart</v-icon>
                Ver Cotización
                <v-btn
                  class="ml-4 red--text"
                  color="white"
                  small
                  elevation="7"
                  fab
                >
                  {{ totalItems }}</v-btn
                >
              </v-btn>
            </v-col>
          </v-row>

          <div class="col-12 col-sm-10 col-md-4"></div>

          <v-text-field
            v-model="clave"
            label="Buscar"
            single-line
            hide-details
            hint="Descripción"
            prepend-inner-icon="mdi-nut"
            clearable
            color="secondary"
            width="auto"
            background-color="red"
            height="2.5rem"
          ></v-text-field>

          <template>
            <div class="text-center mt-16" v-if="!repuestos">
              <v-progress-circular
                indeterminate
                color="red"
              ></v-progress-circular>
            </div>
          </template>

          <v-data-table
            single-select
            :headers="headers"
            :items="repuestosFiltradosPorCategoria"
            no-data-text="No hay productos con ese filtro"
            :items-per-page="5"
            :footer-props="{
              showFirstLastPage: true,
              'items-per-page-text': 'Repuestos por página',
              'items-per-page-all-text': 'todos',
              showCurrentPage: true,
              'page-text': 'página ->',
            }"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <div @click="addCart(item)">
                <v-col cols="auto">
                  <v-dialog
                    transition="dialog-bottom-transition"
                    max-width="600"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn plain v-bind="attrs" v-on="on">
                        Añadir al carro
                        <v-icon small class="ml-2">
                          mdi-cart
                        </v-icon>
                      </v-btn>
                    </template>
                    <template v-slot:default="modalAdd">
                      <v-card>
                        <v-toolbar color="error" dark
                          >Agregar repuesto {{ item.data.nombre }}</v-toolbar
                        >
                        <v-card-text>
                          <div class="mt-5 py-5">
                            <h3>Nombre : {{ item.data.nombre }}</h3>
                          </div>
                          <div class="">
                            <h3>
                              Cantidad:<input
                                type="number"
                                name="numerito"
                                id="input-modal-add"
                                v-model="form.age"
                                class="pl-5 ml-3"
                              />
                            </h3>

                            <v-slider
                              v-model="form.age"
                              :rules="rules.age"
                              color="error"
                              label=""
                              hint="Desliza para seleccionar la cantidad"
                              min="1"
                              max="10"
                              thumb-label
                            ></v-slider>
                          </div>
                          <div>
                            <v-img
                              :src="item.data.img"
                              height="150px"
                              contain
                            ></v-img>
                          </div>
                        </v-card-text>
                        <v-card-actions class="justify-center text-center">
                          <div class="col-12">
                            <v-btn
                              text
                              class="primary mt-3"
                              @click="addCart(item), (modalAdd.value = false)"
                              >Agregar {{ form.age }} item(s)</v-btn
                            >
                            <v-btn
                              text
                              class="error ml-2 mt-3"
                              @click="modalAdd.value = false"
                              >Cerrar</v-btn
                            >
                          </div>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </div>

      <!-- </v-col> -->
      <!-- </v-row> -->
    </v-container>

    <!-- Step 1-->
    <v-navigation-drawer
      mobile-break-point="768"
      v-model="drawer"
      fixed
      right
      light
      width="auto"
      class="col-12"
    >
      <div class="d-flex justify-end">
        <v-icon class="red--text" large @click="drawer = false"
          >mdi-close
        </v-icon>
      </div>

      <v-list-item class="mt-3">
        <div class="d-flex secondary--text">
          <v-icon large class="error--text mr-3">mdi-cart</v-icon>
          <h2>Cotización {{ totalItems }} Ítem(s)</h2>
        </div>
      </v-list-item>

      <div class="d-flex justify-end mr-3 my-3">
        <v-btn
          @click="vaciar(i)"
          depressed
          small
          class="grey lighten-1 white--text">
          <v-icon small class="red--text mr-3">mdi-cart-remove</v-icon>
          Vaciar carro
        </v-btn>
      </div>
      <v-divider></v-divider>

      <div>
        <v-card elevation-5>
          <v-list subheader>
            <v-subheader class="mt-5"> <h2>Items:</h2> </v-subheader>
            <v-container  v-if="repuestos">
              <v-list-item v-for="(repuesto, i) in carrito" :key="i">
                <v-list-item-content >
                  <v-row>
                    <v-col cols="12" sm="5">
                    <div class="d-flex align-center">
                      <li id="item-lista-carrito">
                        <p class="pt-2 pt-md-3 pl-5">
                         <b> {{ getRepuestoInfo(repuesto.id).data.nombre }}</b>
                        </p>
                      </li>
                    </div>
                    </v-col>

                    <v-col class="d-block d-md-none" cols="4" md="0">
                      <v-img :src="testeo(i).data.img" height="50px" width="100px" contain ></v-img>
                    </v-col>

                    <v-col cols="8" sm="6" class="align-center mt-1">
                    <div class="d-flex justify-center align-center pr-0 pr-md-5">
                      <v-btn
                        small
                        depressed
                        class="secondary white--text ml-md-10 ml-0 pa-6"
                        color="white"
                        elevation="4"
                        fab> 
                        <v-icon class="red--text">mdi-nut</v-icon> {{ repuesto.cantidad }} 
                        </v-btn>

                      <v-btn icon>
                        <v-icon class=" success--text" @click="addOneMore(i)"
                          >mdi-plus-circle</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon fab class="error--text " @click="eliminar(i)">mdi-minus-circle</v-icon>
                      </v-btn>

                      <!--card modal-->
                      <div class="text-center">
                        <v-dialog
                          width="500"
                          v-show="infoRep"
                          transition="fade-transition"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn icon>
                              <v-icon
                                fab
                                v-bind="attrs"
                                v-on="on"
                                class="primary--text"
                                @click="testeo(i)"
                                >mdi-magnify</v-icon
                              ></v-btn
                            >
                          </template>

                          <v-card>
                            <v-card-title class="text-h5 grey lighten-2">
                              Detalle de Repuesto:
                              {{ testeo(i).id }}
                            </v-card-title>
                            <v-card-text class="d-flex justify-space-between">
                              <div>
                                <ul class="mt-4">
                                  <li>Nombre: {{ testeo(i).data.nombre }}</li>
                                  <li>Marca: {{ testeo(i).data.marca }}</li>
                                  <li>
                                    Categoría: {{ testeo(i).data.categoria }}
                                  </li>
                                  <li>Maquina:{{ testeo(i).data.maquina }}</li>
                                  <li>Stock:{{ testeo(i).data.stock }}</li>
                                </ul>
                              </div>

                              <div>
                                <img
                                  width="100px"
                                  class="mr-16 mt-5"
                                  :src="testeo(i).data.img"
                                />
                              </div>
                            </v-card-text>
                            <v-divider></v-divider>
                            <!-- <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="error"
                                text
                                @click.stop="infoRep=false">
                                Cerrar
                              </v-btn>
                            </v-card-actions> -->
                          </v-card>
                        </v-dialog>
                      </div>
                    </div>
                    </v-col>

                  </v-row>
                <hr>
                </v-list-item-content>
              </v-list-item>
            </v-container>
            <v-container v-else>
              <div class="text-center">
                <!-- <v-btn
                color="deep-purple accent-4"
                class="white--text"
                @click="overlay = !overlay"
              >
                Launch Application
                <v-icon right>
                  mdi-open-in-new
                </v-icon>
              </v-btn> -->

                <v-overlay :value="overlay">
                  <v-progress-circular
                    indeterminate
                    size="64"
                  ></v-progress-circular>
                </v-overlay>
              </div>
            </v-container>
          </v-list>
        </v-card>
      </div>

      <v-divider></v-divider>

      <div class="d-flex justify-center align-bottom">
        <v-btn
          class="red white--text mt-16 text-center"
          @click="showFormu"
          @click.stop="formu = !formu"
        >
          <v-icon>mdi-cart</v-icon> Solicitar Cotización
        </v-btn>
      </div>
    </v-navigation-drawer>

    <!-- Step 2!-->

    <v-navigation-drawer
      touchless
      id="formulario"
      v-model="formu"
      fixed
      temporary
      right
      light
      width="auto"
    >
      <div class="">
        <div class="d-flex justify-space-between">
          <v-icon class="warning--text" large @click="formu = false"
            >mdi-arrow-left
          </v-icon>
          <v-icon
            class="red--text"
            large
            @click="(formu = false), (drawer = false)"
            >mdi-close
          </v-icon>
        </div>
      </div>

      <v-list-item class="mt-3">
        <div class="d-flex">
          <v-icon large class="black--text mr-3">mdi-account</v-icon>
          <h2>Información de contacto</h2>
        </div>
      </v-list-item>
      <v-divider></v-divider>
      <FormularioCarro />
    </v-navigation-drawer>
    <Footer />
  </v-sheet>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import FormularioCarro from "../components/FormularioCarro.vue";
import Carrito from "../components/Carrito.vue";
import TablaCarrito from "../components/TablaCarrito.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Repuestos",
  data() {
    const defaultForm = Object.freeze({ age: null });
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        age: [(val) => val < 2 || `¿Estás seguro?`],
      },
      cantidad: Number,
      modalAdd: false,
      overlay: false,
      infoRep: false,
      drawer: false,
      formu: null,
      notifications: false,
      sound: true,
      widgets: false,
      i: Number,
      clave: "",
      option: "nombre",
      busqueda: ["Nombre", "Categoria", "Marca", "Maquina"],
      loading: false,
      dataCard: {},
      headers: [
        { text: "ID", align: "start", value: "data.id" },
        { text: "Nombre", value: "data.nombre" },
        { text: "Categoría", value: "data.categoria" },
        { text: "Tipo de Maquina", value: "data.maquina" },
        { text: "Marca", value: "data.marca" },
        { text: "Stock", value: "data.stock" },
        { text: "Cotizar", value: "actions" },
      ],
      cabeceras: [
        { text: "Repuesto", value: "nombre" },
        { text: "Marca", value: "marca" },
        { text: "Cantidad", value: "cantidad" },
        { text: "Acción", value: "actions", sortable: false },
      ],
      tarjeta: {},
      dataParaCard: {},
    };
  },
  components: { FormularioCarro, Carrito, TablaCarrito, Footer },

  // watch: {
  //   overlay(val) {
  //     val &&
  //       setTimeout(() => {
  //         this.overlay = false;
  //       }, 3000);
  //   },
  // },

  computed: {
    ...mapGetters([
      "repuestosFiltradosPorOption",
      "totalItems",
      "getRepuestoInfo",
    ]),
    ...mapState(["repuestos", "carrito"]),

    repuestosFiltradosPorCategoria() {
      return this.$store.getters.repuestosFiltradosPorOption({
        clave: this.clave,
        busqueda: this.option,
      });
    },
  },
  methods: {
    ...mapActions([
      "add_to_cart",
      "getRepuestos",
      "clear_cart",
      "add_One_More",
      "remove_One",
    ]),
    ...mapMutations([
      "ADD_TO_CART",
      "CLEAR_CART",
      "ADD_ONE_MORE",
      "REMOVE_ONE",
    ]),

    showFormu() {
      const formulario = document.getElementById("formulario").style;
      formulario.display = "initial";
    },
    backFormu() {
      const formulario = document.getElementById("formulario").style;
      formulario.display = "none";
      this.drawer = true;
      this.formu = false;
      console.log(this.formu, this.drawer);
      // const btn = document.getElementById("btn-coti")
    },

    getDataCard(i) {
      // this.infoRep = true;
      let infoRepuesto = this.carrito[i];
      let dataCard = this.getRepuestoInfo(infoRepuesto.id);
      return dataCard;
    },

    addCart(item) {
      // alert("Agregando: " + JSON.stringify(item.data.nombre));
      let cantidad = this.form.age;
      let numId = item.id;
      const nuevoItem = { cantidad, id: numId };
      console.log(nuevoItem);
      this.add_to_cart(nuevoItem);
      this.form.age = 1;
    },

    addOneMore(item) {
      this.carrito[item].cantidad++;
    },

    eliminar(item) {
      if (this.carrito[item].cantidad === 1) {
        this.remove_One(item);
      } else {
        this.carrito[item].cantidad--;
      }
    },

    testeo(i) {
      let tarjeta = this.carrito[i].id;
      // console.log(tarjeta)
      let dataParaCard = this.$store.getters.getRepuestoInfo(tarjeta);
      // dataParaCard = this.dataParaCard
      // console.log(this.infoRep)
      return dataParaCard;
    },

    vaciar() {
      // this.carrito[i].cantidad = 0
      this.carrito.forEach((r) => {
        r.cantidad = 0;
      });
      this.clear_cart();
      console.log(this.carrito);
    },
  },

  updated() {
    // this.getRepuestos();
  },
  created() {
    // this.$store.getRepuestos()
    this.getRepuestos();
  },
};
</script>

<style scoped>
#item-lista-carrito {
  margin-left: 7px;
  padding: 0px 0 0px 30px;
  list-style: none;
  background-image: url("../assets/li.png");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 30px;
}

#input-modal-add {
  width: 70px !important;
  height: 2rem !important;
  color: black;
  border: 2px solid grey;
  font-weight: bold;
}
</style>
