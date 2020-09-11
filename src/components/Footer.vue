<template>
  <v-footer light padless>
    <v-card class="flex grey lighten-5" flat tile>
      <v-row>
        <v-col cols="6">
          <v-card-text class="py-2">
            <img src="../assets/logo-dark.svg" height="15" /> -
            {{ new Date().getFullYear() }}
          </v-card-text>
        </v-col>
        <v-col cols="6 d-flex justify-end">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            class="mx-4"
            :href="icon.url"
            target="_blank"
            icon
          >
            <v-icon size="24px" dark>{{ icon.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      {
        icon: "mdi-facebook",
        url: "https://facebook.com/fellowocom",
      },
      {
        icon: "mdi-twitter",
        url: "https://twitter.com/fellowocom",
      },
      {
        icon: "mdi-linkedin",
        url: "https://linkedin.com/fellowocom",
      },
      {
        icon: "mdi-instagram",
        url: "https://instagram.com/fellowocom",
      },
    ],
  }),
};
</script>
