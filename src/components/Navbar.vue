<template>
  <v-container fluid>

    <v-card class="" height="auto">
      <v-app-bar dense fixed prominent dark id="nav" class=" pt-3">
        <v-app-bar-nav-icon
          @click="drawer = true"
          class="mt-2 error--text"
        ></v-app-bar-nav-icon>
        <router-link to="/">
        <v-col cols="10" sm="12">
            <v-img src="@/assets/logo-equiposmineros.svg" class="mt-2"></v-img>
        </v-col>
        </router-link>
        <v-spacer></v-spacer>

        <div class="mt-2 d-none d-lg-block ml-auto">
          <router-link to="/">
            <v-btn color="red" elevation="2"  large plain text>Inicio</v-btn>
          </router-link>

          <router-link to="/nosotros">
            <v-btn color="red" elevation="2"  large plain text>Nosotros</v-btn>
          </router-link>

          <router-link to="/productos">
            <v-btn color="red" elevation="2" large plain text>Productos</v-btn>
          </router-link>

          <router-link to="/repuestos">
            <v-btn color="red" elevation="2" large plain text>Repuestos</v-btn>
          </router-link>

          <v-btn
            @click="dialog = true"
            color="red"
            elevation="2"
            large
            plain
            text
            >Contacto</v-btn
          >

          <router-link to="/login">
            <v-btn elevation="2" icon fab>
              <v-icon>mdi-account-lock-outline</v-icon></v-btn
            >
          </router-link>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed temporary dark>
        <v-list nav dense dark rounded>
          <v-list-item class="ml-4 pb-5">
            <img src="@/assets/logo-equiposmineros.svg" alt="" width="180vw" />
          </v-list-item>
          <v-list-item v-for="(item, i) in items" :key="i" class="ml-7">
            <router-link :to="item.url">

              <v-row align="center" justify="space-around">
                <v-btn large plain class="jover" >
                  <v-icon left>
                    {{item.icon}}
                  </v-icon>
                  {{item.title}}
                </v-btn>
              </v-row>

            </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <!--Modal FOrmulario-->
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <form id="formulario" @submit.prevent="send">
            <v-card-title>
              <v-icon class="red--text px-2">mdi-email-variant</v-icon>
              <span class="text-h5">Contacto</span>
              <div class="hr-1 ml-2 mt-3 d-flex align-start"></div>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="datos.name"
                      label="Nombre y Apellido*"
                      required
                      color="red"
                      name="name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="datos.email"
                      label="Email*"
                      required
                      color="red"
                      name="email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="datos.phoneNumber"
                      label="Télefono*"
                      placeholder="+56 9"
                      type="phone"
                      required
                      color="red"
                      name="phoneNumber"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      color="error"
                      :items="[
                        'Solicitar Información',
                        'Repuestos',
                        'Reclamo',
                        'Ayuda con mi cotización',
                      ]"
                      label="Asunto*"
                      required
                      name="select"
                      v-model="datos.select"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      solo
                      v-model="datos.mensaje"
                      name="mensaje"
                      label="Mensaje"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <div class="text-center">
                  <v-btn class="text-center" color="error" @click="send">
                    Enviar Mensaje
                  </v-btn>
                </div>
              </v-container>
              <small>*Campos Obligatorios</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialog = false">
                Cerrar
              </v-btn>
            </v-card-actions>
          </form>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  components: {},
  data() {
    return {
      drawer: false,
      group: null,
      dialog: false,
      items: [
        { title: "Inicio", url: "/", icon: "mdi-home" },
        {
          title: "Nosotros",
          url: "/nosotros",
          icon: "mdi-information-variant",
        },
        { title: "Productos", url: "/productos", icon: "mdi-dump-truck" },
        { title: "Repuestos", url: "/repuestos", icon: "mdi-tools" },
        { title: "Contacto", url: "/contacto", icon: "mdi-email-variant" },
      ],
      datos: {
        name: "",
        phoneNumber: "",
        email: "",
        select: null,
        mensaje: "",
        checkbox: null,
      },
    };
  },
  methods: {
    //  sendMail(){
    //   alert("enviando mail")
    //     axios.post('http://localhost:3000/mail', {
    //       to: 'nodemailerADL@gmail.com',
    //       subject: 'Mail PM desde vue app',
    //       html: '<h1>Dale que puedeeee</h1>'
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },

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
            this.dialog = false;
            console.log("EXITO!", result.status, result.text, result);
          },
          (error) => {
            console.log("ERROR...", error);
          }
        );
    },
  },
};
</script>

<style scoped>
#nav {
  background: black;
  opacity: 0.8;
  z-index: 3;
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}

#menu-btn:hover {
  color: #f44336 !important;
}

.jover:hover {
  color: #f44336 !important;
}
</style>
