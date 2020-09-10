<template>
  <v-main fluid>
    <v-container class="fill-height d-flex align-start grey lighten-5" fluid>
      <v-container class="home-container">
        <v-row class="mb-9" justify="center" no-gutters>
          <v-col lg="12">
            <v-card class="pa-16 text-center" outlined>
              <h2>Welcome, Tarkan!</h2>
              <p>Meetings Sep 16 - Sep 22</p>
              <p>How many meetings?</p>
              <p>Select up to 2 meetings</p>
              <div class="d-flex justify-center">
                <v-btn
                  depressed
                  color="primary"
                  @click.prevent="decrementCounter"
                  :disabled="count < 1"
                  ><v-icon>mdi-minus</v-icon></v-btn
                >
                <div class="pa-1 px-10 grey lighten-4">{{ count }}</div>
                <v-btn
                  depressed
                  color="primary"
                  @click.prevent="incrementCounter"
                  :disabled="count > 1"
                  ><v-icon>mdi-plus</v-icon></v-btn
                >
              </div>
              <v-btn outlined color="primary" class="my-5"
                >Pass for the week</v-btn
              >
              <p>Available times?</p>
              <p>
                Select at least two time slots. Times are local to Istanbul.
              </p>
              <v-row class="d-flex justify-center">
                <v-col
                  class="d-flex flex-column"
                  cols="2"
                  v-for="(dates, index) in availableTimes"
                  :key="index"
                >
                  <small>{{
                    moment(dates.date).format("ddd, Do MM YYYY")
                  }}</small>
                  <v-btn-toggle
                    v-model="toggle_multiple"
                    multiple
                    borderless
                    class="d-flex flex-column"
                  >
                    <v-btn
                      outlined
                      class="mb-2"
                      v-for="(times, index) in dates.times"
                      :key="index"
                      color="primary"
                      >{{ times }}</v-btn
                    >
                  </v-btn-toggle>
                </v-col>
              </v-row>
              <v-row class="d-flex justify-center">
                <v-btn color="primary" large width="400">I am in</v-btn></v-row
              >
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
<script>
export default {
  components: {},
  methods: {
    incrementCounter: function() {
      if (this.count < 2) {
        this.count += 1;
      }
    },
    decrementCounter: function() {
      if (this.count > 0) {
        this.count -= 1;
      }
    },
  },
  data: () => ({
    count: 0,
    availableTimes: [
      {
        date: "Thu Sep 10 2020 20:44:04 GMT+0300 (GMT+03:00)",
        times: ["14:00", "16:00"],
      },
      {
        date: "Fri Sep 11 2020 20:44:04 GMT+0300 (GMT+03:00)",
        times: ["14:00", "16:00"],
      },
      {
        date: "Sat Sep 12 2020 20:44:04 GMT+0300 (GMT+03:00)",
        times: ["14:00", "16:00"],
      },
      {
        date: "Sun Sep 13 2020 20:44:04 GMT+0300 (GMT+03:00)",
        times: ["14:00", "16:00", "17:00", "18:00"],
      },
    ],
  }),
};
</script>
