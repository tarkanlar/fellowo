<template>
  <v-main fluid>
    <v-container class="fill-height d-flex align-start grey lighten-5" fluid>
      <v-container class="small-container">
        <v-row class="mb-9" justify="center" no-gutters>
          <v-col cols="12">
            <v-card class="py-10" outlined>
              <v-row>
                <v-col cols="12" class="d-flex justify-center">
                  <v-avatar class="round-avatar" size="96">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-avatar>
                </v-col>
                <v-col cols="12" class="d-flex text-center">
                  <v-list-item-content>
                    <v-list-item-title class="title"
                      >Tarkan Annlar</v-list-item-title
                    >
                    <v-list-item-subtitle>Istanbul</v-list-item-subtitle>
                  </v-list-item-content>
                </v-col>
              </v-row>
              <v-row class="pa-12">
                <v-col cols="12">
                  <p class="text--secondary font-weight-bold">INTRODUCTION</p>
                  <p class="font-weight-light">
                    Tarkan is an entrepreneur who founded Scotty, a ride-sharing
                    and last-mile delivery platform with over 5 million
                    transactions in 3 years
                  </p>
                </v-col>
                <v-col cols="12">
                  <p class="text--secondary font-weight-bold">INTERESTS</p>
                  <div>
                    <v-chip
                      v-for="(item, index) in items"
                      :key="index"
                      color="pink lighten-5"
                      class="ma-2"
                      label
                    >
                      {{ item }}
                    </v-chip>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-main>
</template>
<style scoped>
@media only screen and (min-width: 620px) {
  .small-container {
    max-width: 620px;
  }
}
.round-avatar {
  border-radius: 50% !important;
}
</style>
<script>
export default {
  components: {},
  data: () => ({
    items: [
      "ai",
      "entrepreneurship",
      "product design",
      "social impact",
      "diversity and inclusion",
    ],
  }),
};
</script>
