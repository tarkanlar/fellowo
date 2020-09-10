<template>
  <v-card color="grey lighten-3 fill-height" flat height="49px" tile>
    <v-toolbar class="elevation-0" dense>
      <v-toolbar-title>
        <img src="../assets/logo-dark.svg" height="30" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <UserPoint />
      <v-btn text to="/" small color="primary" class="text--secondary">
        <v-icon small left>mdi-home</v-icon>
        HOME
      </v-btn>
      <v-btn text small class="text--secondary">
        <v-icon small left>mdi-calendar</v-icon>
        MEETINGS
      </v-btn>
      <v-btn text small class="text--secondary">
        <v-icon small left>mdi-email-outline</v-icon>
        INVITE
      </v-btn>
      <v-btn text small class="text--secondary">
        <v-icon small left>mdi-cog</v-icon>
        SETTINGS
      </v-btn>

      <v-btn icon class="text--secondary">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
<script>
import UserPoint from "./UserPoint";
export default {
  components: {
    UserPoint,
  },
};
</script>
