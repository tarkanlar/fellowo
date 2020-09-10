<template>
  <v-app id="inspire">
    <NavBar />
    <Home />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Home from "./components/Home";
export default {
  name: "LayoutsDemosBaselineFlipped",
  components: {
    NavBar,
    Home,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>
