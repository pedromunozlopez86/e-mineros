<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="envioInfo" class="ma-16" id="formu">
      <validation-provider
        v-slot="{ errors }"
        name="Nombre"
        rules="required|max:30"
      >
        <v-text-field
        color="error"
          v-model="name"
          :counter="30"
          :error-messages="errors"
          label="Nombre Completo"
          required
          name="from_name"
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Número de Teléfono"
        :rules="{
          required: true,
          digits: 9,
          regex: /^[0-9]+$/,
        }"
      >
        <v-text-field
        color="error"
          v-model="phoneNumber"
          :counter="9"
          :error-messages="errors"
          label="Número de Teléfono"
          required
          hint="+569 "
          name="number"
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
        color="error"
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
          name="mail"
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="select" rules="required">
        <v-select
        color="error"
          v-model="select"
          :items="items"
          :error-messages="errors"
          label="Selecciona"
          data-vv-name="select"
          required
          name="select"
        ></v-select>
      </validation-provider>

      <validation-provider v-slot="{ errors }" rules="required" name="checkbox">
        <v-checkbox
        color="error"
        @click="carritoFormulario()"
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="Quiero que me contacten"
          type="checkbox"
          required
        ></v-checkbox>
      </validation-provider>

      <div>
        <v-btn text >
          <h2 class="grey--text">Items totales: {{ totalItems }}</h2>
        </v-btn>
        <v-divider class="my-3"></v-divider>

        <v-container v-if="lista" name="items" v-show="escondido">
          <ul
            v-for="(repuesto, i) in carrito"
            :key="i"
            class="d-flex flex-column"
          >
            <li>
              <span>
                <p class="black--text" name="message">
                  {{ getRepuestoInfo(repuesto.id).data.nombre }} | Cantidad:
                  {{ repuesto.cantidad }}
                </p>
              </span>
            </li>
          </ul>
        </v-container>
      </div>

      <v-btn
      color="error"
        class="mr-4"
        :disabled="invalid"
        validate
        type="submit"
        @click="envioInfo()"
      >
        Enviar
      </v-btn>
      <v-btn color="warning" @click="clear"> Limpiar </v-btn>

      <validation-provider v-slot="{ errors }" name="RepuestosId">
        <v-text-field
          flat
          class="lista-ocultar"
          v-model="nuevoCarritoId"
          :error-messages="errors"
          required
          dark
          name="ids"
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="RepuestosCant">
        <v-text-field
          flat
          dark
          v-model="nuevoCarritoCant"
          :error-messages="errors"
          required
          name="cantidad"
        ></v-text-field>
      </validation-provider>
    </form>
  </validation-observer>
</template>

<style>
.lista-ocultar {
  color: white;
}
</style>

<script>
import emailjs from "emailjs-com";
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import { mapState, mapGetters } from "vuex";
// import { observable } from 'vue/types/umd';

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} tiene que tener {length} digitos. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} no puede estar vacío",
});

extend("max", {
  ...max,
  message: "{_field_} no puede tener mas de: {length} caracteres",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} no calza con{regex}",
});

extend("email", {
  ...email,
  message: "Debes ingresar una dirección de correo válida",
});

export default {
  name: "formulario",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    escondido:false,
    listaFinal: [],
    lista: null,
    name: "",
    phoneNumber: "",
    email: "",
    select: null,
    items: [
      "Cotización",
      "Cambio de item",
      "Ayuda!, no encuentro lo que busco",
    ],
    checkbox: null,
    nuevoCarritoId: [],
    nuevoCarritoCant: [],
  }),

  methods: {
    carritoFormulario() {
      this.carrito.forEach((repuesto) => {
        this.nuevoCarritoId.push(JSON.stringify(repuesto.id) + "<br>");
        this.nuevoCarritoCant.push(JSON.stringify(repuesto.cantidad) + "<br>");
      });
      return JSON.stringify(this.nuevoCarritoId, this.nuevoCarritoCant);

      // console.log(JSON.stringify(this.nuevoCarrito))
    },
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.nuevoCarritoId = [];
      this.nuevoCarritoCant = [];
      this.$refs.observer.reset();
    },

    async envioInfo(e){
     await emailjs
        .sendForm(
          "emineros",
          "template_fdvr0yj",
          e.target,
          "user_Fmab8GDJG04zyyeiq2Ika"
        )
        .then(
          (result) => {
            alert(
              `Gracias ${this.name}!,tu cotización ha sido enviada correctamente y nos contactaremos contigo al: ${this.phoneNumber}`
            );
            console.log(
              "SUCCESS!",
              result.status,
              result.text,
              result,
              e.target
            );
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },

    // envioInfo() {
    //   this.$refs.observer.validate();
    //   alert(
    //     `Gracias ${this.name},tu cotización ha sido enviada correctamente y nos contactaremos contigo al: ${this.phoneNumber}`
    //   );
    //   this.clear();
    //   this.$router.push("/");
    //   //
    //   emailjs.sendForm("emineros", "template_fdvr0yj", '#formu').then(
    //     function(response) {
    //       console.log("Exitoso!", response.status, response.text);
    //     },
    //     function(error) {
    //       console.log("Error...", error);
    //     }
    //   );
    // },

    getDataCard() {
      let infoRepuesto = this.carrito;
      let dataCard = this.getRepuestoInfo(infoRepuesto.id);
      return dataCard;
    },
  },
  computed: {
    ...mapGetters([
      "repuestosFiltradosPorOption",
      "totalItems",
      "getRepuestoInfo",
    ]),
    ...mapState(["carrito", "repuestos"]),
  },
};
</script>
