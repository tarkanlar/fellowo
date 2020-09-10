<template>
  <v-app id="app">
    <NavBar />
    <router-view />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "LayoutsDemosBaselineFlipped",
  components: {
    NavBar,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>
