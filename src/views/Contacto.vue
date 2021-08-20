<template>
<div class="pt-9 d-flex justify-center">
    <v-col cols="12" sm="10" md="8" lg="8" xl="7" class="px-md-16 px-0">
      <div class="white mx-3 mx-md-10 px-5" id="formu2">
      <h1 class="black--text text-center my-16 pt-5">Formulario de Contacto</h1>
        <validation-observer
          ref="observer"
          v-slot="{ invalid }">
          <form @submit.prevent="submit" class="px-md-12 px-0 py-5 text-centern">

            <validation-provider
              v-slot="{ errors }"
              name="Nombre"
              rules="required|max:30">
              <v-text-field
                color="error"
                v-model="datos.name"
                :counter="30"
                :error-messages="errors"
                label="Nombre y Apellido"
                required
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="teléfono"
              :rules="{
                required: true,
                digits: 9,
                regex: /^[0-9]+$/}">
              <v-text-field
                color="error"
                v-model="datos.phoneNumber"
                :counter="9"
                :error-messages="errors"
                label="Teléfono"
                required
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="mail"
              rules="required|email">
              <v-text-field
                color="error"
                v-model="datos.email"
                :error-messages="errors"
                label="E-mail"
                required
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="asunto"
              rules="required">
              <v-select
                color="error"
                v-model="datos.select"
                :items="items"
                :error-messages="errors"
                label="Opción"
                data-vv-name="select"
                required
              ></v-select>
            </validation-provider>

            <v-textarea color="error" auto-grow filled class=" pr-0" v-model="datos.mensaje" name="mensaje">
              </v-textarea>

            <validation-provider
              v-slot="{ errors }"
              rules="required"
              name="este ítem">
            
              <v-checkbox
              color="error"
                v-model="datos.checkbox"
                :error-messages="errors"
                value="1"
                label="Acepto enviar mi información"
                type="checkbox"
                required
              ></v-checkbox>
            </validation-provider>
            
            <v-btn
              class="mr-4"
              type="submit"
              :disabled="invalid"
              color="error"
              @click="send"
            >
              Enviar
            </v-btn>
            <v-btn @click="clear" color="warning">
              Limpiar
            </v-btn>
          </form>
        </validation-observer>
      </div>
    </v-col>
</div>
</template>

<script>
import emailjs from "emailjs-com";
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} no puede estar vacío',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'La dirección de E-mail debe ser válida',
  })
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
   data: () => ({
      items: [
        'Solicitar Cotización',
        'Quiero que me contacten',
        'Reclamo',
      ],
      datos:{
        name:"",
        phoneNumber:"",
        email: "",
        select: null,
        mensaje: "",
        checkbox: null,
      },
    }),
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
     clear () {
        this.datos.name = ''
        this.datos.phoneNumber = ''
        this.datos.email = ''
        this.datos.select = null
        this.datos.checkbox = null
        this.datos.mensaje =''
        this.$refs.observer.reset()
      },

    async send() {
      alert(`${this.datos.name}! Gracias por contactarte con nosotros!`);
      await emailjs
        .send(
          "emineros",
          "template_hru4vgq",
          this.datos,
          "user_Fmab8GDJG04zyyeiq2Ika"
        )
        .then(
          (result) => {
            this.$router.push('/')
            console.log("EXITO!", result.status, result.text, result);
          },
          (error) => {
            console.log("ERROR...", error);
          }
        );
    },
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scooped>

</style>
