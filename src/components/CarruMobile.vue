<template>
  <v-carousel>
    <v-carousel-item>
      <v-card max-width="100vw">
        <v-img
          src="@/assets/B01.jpg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="48vh">
        </v-img>
        <v-card-actions class="d-flex justify-center">
          <h2>Jumbos Hidraúlicos</h2>
        </v-card-actions>
      </v-card>
    </v-carousel-item>

    <v-carousel-item>
      <v-card max-width="100vw">
        <v-img
          src="@/assets/P02.jpg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="48vh"
        >
        </v-img>
        <v-card-actions class="d-flex justify-center">
          <h2>Perforadoras Hidraúlicas</h2>
        </v-card-actions>
      </v-card>
    </v-carousel-item>
    <v-carousel-item>
      <v-card max-width="100vw">
        <v-img
          src="@/assets/P03.jpg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="48vh"
        >
        </v-img>
        <v-card-actions class="d-flex justify-center">
          <h2>Repuestos Vigas</h2>
        </v-card-actions>
      </v-card>
    </v-carousel-item>

    <v-carousel-item>
      <v-card max-width="100vw">
        <v-img
          src="@/assets/P04.jpg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="48vh"
        >
        </v-img>
        <v-card-actions class="d-flex justify-center">
          <h2>Martillos Hidraúlicos</h2>
        </v-card-actions>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>
