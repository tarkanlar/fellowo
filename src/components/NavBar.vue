<template>
  <v-card color="grey lighten-3 fill-height" flat height="49px" tile>
    <v-toolbar class="elevation-0" dense>
      <v-toolbar-title>
        <router-link to="/">
          <img src="../assets/favicon.svg" height="36" />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <UserPoint />
      <v-btn text to="/home" small color="primary" class="text--secondary">
        <v-icon small left>mdi-home</v-icon>
        HOME
      </v-btn>
      <v-btn to="/weekly" text small class="text--secondary">
        <v-icon small left>mdi-calendar</v-icon>
        MEETINGS
      </v-btn>
      <v-btn to="/invite" text small class="text--secondary">
        <v-icon small left>mdi-email-outline</v-icon>
        INVITE
      </v-btn>
      <v-btn to="/settings" text small class="text--secondary">
        <v-icon small left>mdi-cog</v-icon>
        SETTINGS
      </v-btn>
      <v-menu offset-x offset-y left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item to="/faq">
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item>
          <v-list-item @click.prevent="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-card>
</template>
<script>
import UserPoint from "./UserPoint";
export default {
  components: {
    UserPoint,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
