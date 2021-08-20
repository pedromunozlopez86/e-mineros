import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import createPersistedState from "vuex-persistedstate";
import VueRouter from "vue-router";

Vue.use(Vuex);
Vue.use(VueRouter);

export default new Vuex.Store({
  state: {
    email: "",
    user: null,
    repuestos: [],
    repuesto: {},
    editing: false,
    idEditing: null,
    carrito: [],
    option:"",
    clave:"",
  },

  getters: {
    repuestosFiltradosPorOption: (state) => ({ clave, busqueda }) => {
      return state.repuestos.filter((repuesto => 
        repuesto.data[busqueda].toLowerCase().includes(clave.toLowerCase()))
        );
    },

    totalItems(state) {
      return state.carrito.length;
    },

    getRepuestoInfo:(state) => (id) =>  {
      const { repuestos } = state;
      // console.log(repuestos)
      const repuesto = repuestos.find((r) => r.id === id);
      // console.log(repuesto)
      return repuesto;
    },
  },

  mutations: {
    SET_USER(state, email) {
      state.email = email;
    },
    GET_REPUESTOS(state, repuestos) {
      state.repuestos = repuestos;
    },
    SET_REPUESTO_DATA_IN_FORM(state, id) {
      state.editing = true;
      state.idEditing = id;
    },
    LOGIN(state, user) {
      state.user = user;
    },
    LOGOUT(state, user) {
      state.user = user;
    },
    ADD_TO_CART(state, {id, cantidad}) {
      // const repuesto = state.repuestos[id];
      // state.carrito.push(i);
      // const carrito = this.state.carrito
      // console.log(cantidad)
      const { carrito } = this.state;
      const repuestoExistsIndex = carrito.findIndex((r) => r.id === id);
      repuestoExistsIndex !== -1
        ? carrito[repuestoExistsIndex].cantidad++
        : carrito.push({ id, cantidad });
    },

    
    CLEAR_CART(state){
      state.carrito = [];
    },
    
    ADD_ONE_MORE(state,id){
      state.id.map((r)=>{
        if(r.id === id) 
        cantidad++    
      })
    },
    
    REMOVE_ONE(state,i){
      state.carrito.splice(i,1);
    }
  },


  actions: {
    authStateChange({ commit }) {
      firebase.auth().onAuthStateChanged((userCredential) => {
        if (userCredential) {
          const { email } = userCredential;
          commit("SET_USER", email);
          // console.log(email, userCredential)
          // console.log("Login OK")
        } else {
          commit("SET_USER", null);
          console.log("No estás loggeado correctamente");
        }
      });
    },

    async login({ commit }, { email, password }) {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      commit("LOGIN", user);
    },

    async logOut({ commit }) {
      await firebase.auth().signOut();
      commit("LOGOUT");
    },

    getRepuestos: ({ commit }) => {
      firebase
        .firestore()
        .collection("repuestos")
        .onSnapshot((snapshot) => {
          const repuestos = [];
          snapshot.forEach((doc) => {
            repuestos.push({ id: doc.id, data: doc.data() });
          });
          commit("GET_REPUESTOS", repuestos);
          console.log(repuestos);
        });
    },

    addRepuesto({ commit }, repuesto) {
      firebase
        .firestore()
        .collection("repuestos")
        .add(repuesto);
      console.log(commit);
    },

    deleteRepuesto: ({ commit }, id) => {
      firebase
        .firestore()
        .collection("repuestos")
        .doc(id)
        .delete();
      console.log(commit);
    },

    update_Item({ commit }, { repuestoNuevo, id }) {
      firebase
        .firestore()
        .collection("repuestos")
        .doc(id)
        .set(repuestoNuevo);
      console.log(commit);
    },

    setRepuestoDataInForm({ commit }, id) {
      commit("SET_REPUESTO_DATA_IN_FORM", id);
    },

    add_to_cart({ commit },item) {
      console.log(item);
      commit("ADD_TO_CART", item);
    },

    clear_cart({commit, state}){
      console.log(state.carrito)
      commit("CLEAR_CART")
    },

     add_One_More({commit}){
      commit("ADD_ONE_MORE")
    },

    remove_One({commit, state},i){
      console.log(state)
      commit("REMOVE_ONE",i)
    }
  },



  modules: {},

  plugins: [createPersistedState()],
});
