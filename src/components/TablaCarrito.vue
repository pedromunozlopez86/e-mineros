<template>
  <v-data-table
    :headers="headers"
    :items="carrito"
    class="elevation-1 mx-5"
    hide-default-footer
  >
    <template v-slot:[`item.actions`]="{ item }">
      <div class="d-flex">
        <v-icon class="mx-1 success--text" @click="addOneMore(item)"
          >mdi-plus-circle</v-icon
        >
        <v-icon fab class="mx-1 error--text " @click="eliminar(item)"
          >mdi-minus-circle</v-icon
        >
        <v-icon class="mx-1 primary--text  " @click="testeo(item)"
          >mdi-eye
        </v-icon>

        <v-icon class="ml-2 warning--text">
          mdi-trash-can
        </v-icon>
      </div>
    </template>

    <h1 class="primary--text">hola</h1>
  </v-data-table>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      cabeceras: [
        { text: "Repuesto", value: "nombre" },
        { text: "Marca", value: "marca" },
        { text: "Cantidad", value: "cantidad" },
        { text: "Acción", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    ...mapState(["carrito","repuestos"]),
    ...mapGetters(["repuestosFiltradosPorOption", "totalItems"]),
    repuestosFiltradosPorCategoria() {
      return this.$store.getters.repuestosFiltradosPorOption({
        clave: this.clave,
        option: this.option,
      });
    },
  },

  // created: {
  //   created() {
  //   this.getRepuestos();
  //   }
  // },

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

    testeo(i) {
      alert(JSON.stringify(i));
    },

    addCart(item) {
      alert(JSON.stringify(item.data));

      if (item.data.cantidad > 0) {
        let repu = item.data;
        repu.cantidad++;
      } else {
        let repu = item.data;
        repu.cantidad++;
        this.add_to_cart(repu);
      }
    },
    addOneMore(i) {
      this.carrito[i].cantidad++;
      this.add_One_More(this.repuestos[i]);
      // alert(JSON.stringify(this.repuestos[i]))
    },

    eliminar(i) {
      // alert(this.carrito[i].cantidad)
      if (this.carrito[i].cantidad === 1) {
        this.remove_One(i);
      } else {
        this.carrito[i].cantidad--;
      }
    },

    vaciar() {
      // this.carrito[i].cantidad = 0
      this.carrito.forEach((r) => {
        r.cantidad = 0;
      });
      this.clear_cart();

      console.log(this.carrito);
    },
  }
};
</script>
