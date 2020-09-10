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
                  v-for="dates in availableTimes"
                  :key="dates.id"
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
                      v-for="times in dates.times"
                      :key="times.id"
                      color="primary"
                      >{{ times.time }}</v-btn
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
    toggle_multiple: [],
    count: 0,
    availableTimes: [
      {
        id: 1,
        date: "2020-05-21 19:43:58.099745+00",
        times: [
          {
            id: 11,
            time: "14:00",
          },
          {
            id: 12,
            time: "16:00",
          },
        ],
      },
      {
        id: 2,
        date: "2020-05-22 19:43:58.099745+00",
        times: [
          {
            id: 21,
            time: "14:00",
          },
          {
            id: 22,
            time: "16:00",
          },
        ],
      },
      {
        id: 3,
        date: "2020-05-23 19:43:58.099745+00",
        times: [
          {
            id: 31,
            time: "14:00",
          },
          {
            id: 32,
            time: "16:00",
          },
        ],
      },
      {
        id: 4,
        date: "2020-05-24 19:43:58.099745+00",
        times: [
          {
            id: 41,
            time: "14:00",
          },
          {
            id: 42,
            time: "16:00",
          },
          {
            id: 43,
            time: "18:00",
          },
        ],
      },
    ],
  }),
};
</script>
