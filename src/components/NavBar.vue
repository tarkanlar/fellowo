<template>
  <v-card color="grey lighten-3 fill-height" flat height="49px" tile>
    <v-toolbar class="elevation-0" dense>
      <v-toolbar-title>
        <img src="../assets/logo-dark.svg" height="30" />
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-chip to="/" class="ma-2" color="green" text-color="white">
        <v-avatar left class="green darken-4">
          12
        </v-avatar>
        Points
      </v-chip>
      <v-avatar size="32">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-btn text small>
        TARKAN
      </v-btn>

      <v-btn text small color="primary">
        <v-icon left>mdi-heart</v-icon>
        HOME
      </v-btn>
      <v-btn text small>
        <v-icon left>mdi-heart</v-icon>
        MEETINGS
      </v-btn>
      <v-btn text small>
        <v-icon left>mdi-heart</v-icon>
        INVITE
      </v-btn>
      <v-btn text small>
        <v-icon left>mdi-heart</v-icon>
        SETTINGS
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
