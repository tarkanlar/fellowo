<template>
  <v-app id="app">
    <Snackbar />
    <router-view />
  </v-app>
</template>
<script>
import Snackbar from "@/components/Snackbar";
export default {
  components: { Snackbar },
};
</script>
