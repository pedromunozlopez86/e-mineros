<template>
<div class="black--background">
  <v-card class="col-6 ">
    <v-card-title class="" dark>
      <v-text-field
        label="Buscar"
        single-line
        hide-details
        hint="Descripción" 
        prepend-inner-icon="mdi-nut"
        clearable
        color="red"
        width="auto"
        background-color="red"
      ></v-text-field>
    </v-card-title>
    <v-data-table
    dark
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>


      <!-- <v-container
      class="col-6 my-16 secondary white--text "
      elevation-10>
      <div class="mt-10 px-16">
        <h3 class="font-weight-bold ">Filtrar por:</h3>
        <v-select dark :items="busqueda" v-model="option"  color="red"  validate-on-blur shaped
        append-icon="mdi-menu-down-outline" autofocus eager
        item-color="red"
        prepend-inner-icon="mdi-tools"
        menu-props="dark" ></v-select>

        <v-text-field
        hint="Descripción" 
        prepend-inner-icon="mdi-nut"
        clearable
        dark
        v-model="clave"
        color="red"
        item-color="white"
        width="auto"
        class="white--text text-center"
        ></v-text-field>
      </div>
    </v-container>

    <v-container>
      <v-row class="justify-center white--text mb-16">
        <v-col
          v-for="{ data } in repuestosFiltradosPorCategoria"
          :key="data"
          class="white--text"
          cols="8"
          md="4"
          lg="3"
        >
          <v-container class="grey lighten-3">
            <v-card class="mx-auto py-3 px-2" max-width="300">
              <v-card-title>
                <h3 class="font-weight-bold">
                  {{ data.nombre }}
                </h3>
              </v-card-title>
              <v-card-subtitle class="font-weight-bold">
                Marca: {{ data.marca }}
              </v-card-subtitle>
              <v-card-subtitle class="font-weight-bold">
                Categoria: {{ data.categoria }}
              </v-card-subtitle>
              <v-card-text class="font-weight-bold">
                Stock: {{ data.stock }}
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  class="ml-5 mt-3"
                  outlined
                  color="orange"
                  @click="addToCart(i)"
                  elevation="12"
                  >Añadir al carrito</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
        { text: "ID", align: "start", value: "data.id" },
        { text: "Categoría", value: "data.categoria" },
        { text: "Nombre", value: "data.nombre" },
        { text: "Tipo de Maquina", value: "data.maquina" },
        { text: "Marca", value: "data.marca" },
        { text: "Stock", value: "data.stock" },
        { text: "Acciones", value: "actions" },
      ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>