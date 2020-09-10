<template>
  <v-main fluid>
    <v-container class="fill-height d-flex align-start grey lighten-5" fluid>
      <v-container class="home-container">
        <v-row class="mb-9" justify="center" no-gutters>
          <v-col lg="12">
            <v-card class="pa-16 text-center" outlined>
              <h2>FAQ</h2>
              <template>
                <v-row justify="center">
                  <v-expansion-panels popout>
                    <v-expansion-panel v-for="(item, i) in 5" :key="i">
                      <v-expansion-panel-header>Item</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-main>
</template>
<style scoped>
@media only screen and (min-width: 920px) {
  .home-container {
    max-width: 920px;
  }
}
</style>
