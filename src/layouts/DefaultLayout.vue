<template>
  <v-app id="layout">
    <NavBar />
    <router-view />
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
