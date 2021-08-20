<template>
  <div class="mx-16 px-16 mt-16">
    <!--Modal edit -->
    <v-row justify="center" class="mt-16">
      <v-dialog v-model="dialogEdit" persistent width="50vw">
        <v-card>
          <v-card-title>
            <span class="text-h5 mb-5 red--text">Editar repuesto</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    type="number"
                    label="ID"
                    v-model="repuestoNuevo.data.id"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="repuestoNuevo.data.nombre"
                    label="Nombre"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="repuestoNuevo.data.marca"
                    label="Marca"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="repuestoNuevo.data.categoria"
                    label="Categoria"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="repuestoNuevo.data.maquina"
                    label="Maquina"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="repuestoNuevo.data.stock"
                    type="number"
                    label="Stock"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" >
                  <v-text-field
                  overflow="hidden"
                    v-model="repuestoNuevo.data.img"
                    type="text"
                    label="Url de imagen"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialogEdit = false">
              Cancelar
            </v-btn>
            <v-btn
              color="red darken-1"
              text
              @click="editRepuesto(repuestoNuevo), clearForm()"
            >
              Editar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="repuestos"
      class="elevation-1 mt-16 "
      dark
      overflow="hidden"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Repuestos EM</v-toolbar-title>
          <v-divider class="mx-3" inset vertical></v-divider>

          <v-toolbar-title class=""
            >Sesión iniciada de: <u class="red--text"> {{ email }}</u>
          </v-toolbar-title>
          <v-btn v-if="email" color="primary" @click="logOutCrud" class="ml-10"
            >Cerrar sesión</v-btn
          >

          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" width="50vw">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="error"
                dark
                class="mb-2 px-15"
                v-bind="attrs"
                v-on="on"
              >
                Nuevo ítem
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5 mb-5 red--text"
                  >Agregar nuevo repuesto</span
                >
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        type="number"
                        label="ID"
                        v-model="repuesto.id"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="repuesto.nombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="repuesto.marca"
                        label="Marca"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="repuesto.categoria"
                        label="Categoria"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="repuesto.maquina"
                        label="Maquina"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="repuesto.stock"
                        type="number"
                        label="Stock"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <v-text-field
                        v-model="repuesto.img"
                        type="text"
                        label="Url de imagen"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="cerrar">
                  Cancelar
                </v-btn>
                <v-btn
                  color="red darken-1"
                  text
                  @click="addRepuesto(repuesto), clearForm()"
                >
                  Agregar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Estás seguro que quieres eliminar este
                {{ repuesto.nombre }}Repuesto?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="noBorrar">NO</v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="deleteRepuesto(this.repuesto.id)"
                  >SI</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item.id)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteRepuesto(item.id)">
          mdi-delete
        </v-icon>
      </template>

      <!-- <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
          Reset
        </v-btn>
      </template> -->
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
// import firebase from "firebase"
export default {
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      dialogEdit: false,
      headers: [
        { text: "ID", align: "start", value: "data.id" },
        { text: "Categoría", value: "data.categoria" },
        { text: "Nombre", value: "data.nombre" },
        { text: "Tipo de Maquina", value: "data.maquina" },
        { text: "Marca", value: "data.marca" },
        { text: "Stock", value: "data.stock" },
        { text: "Acciones", value: "actions" },
        { text: "Url Imagen", value: "data.img" },
      ],
      repuesto: {},
      repuestoNuevo: {
        data: {
          id: Number,
          categoria: "",
          nombre: "",
          maquina: "",
          marca: "",
          stock: Number,
          img:"",
        },
      },
    };
  },

  computed: {
    ...mapState(["email", "userCredential", "repuestos"]),
  },

  created() {
    this.getRepuestos();
  },

  methods: {
    async logOutCrud() {
      try {
        await this.logOut();
        this.$router.push("login");
      } catch (e) {}
    },
    ...mapActions([
      "authStateChange",
      "getRepuestos",
      "addRepuesto",
      "deleteRepuesto",
      "update_Item",
      "logOut",
      "login",
    ]),
    ...mapMutations(["SET_REPUESTO_DATA_IN_FORM", "LOGIN", "LOGOUT"]),

    editRepuesto() {
      const { repuestoNuevo } = this;
      const { data, id } = repuestoNuevo;
      this.update_Item({ repuestoNuevo: data, id });
      this.dialogEdit = false;
    },

    cerrar() {
      this.dialog = false;
    },

    clearForm() {
      this.repuesto = {};
    },

    deleteItem() {
      this.dialogDelete = true;
    },
    noBorrar() {
      this.dialogDelete = false;
    },

    borrarOk() {
      this.deleteRepuesto(item.id);
      this.dialogDelete = false;
    },

    editItem(id) {
      console.log(this.repuesto);
      this.dialogEdit = true;
      const { repuestos } = this;
      const { id: idEditing, data } = { ...repuestos.find((r) => r.id == id) };
      const repuestoNuevo = { id: idEditing, data: { ...data } };
      this.repuestoNuevo = repuestoNuevo;
      console.log(this.repuestoNuevo);
    },
  },
};
</script>
