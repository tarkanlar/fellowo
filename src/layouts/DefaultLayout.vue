<template>
  <v-app id="layout">
    <NavBar />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>
