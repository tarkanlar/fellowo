<template>
  <v-main fluid>
    <v-container class="fill-height d-flex align-start grey lighten-5" fluid>
      <v-container class="small-container">
        <v-row class="mb-9" justify="center" no-gutters>
          <v-col lg="12">
            <v-card class="pa-16" outlined>
              <h2>Use Clubpoints to supercharge your experience!</h2>
              <strong>What are Clubpoints?</strong>
              <p>
                Clubpoints are a type of currency on Lunchclub meant to reward
                our most active and engaged Lunchclubbers.
              </p>
              <p>
                Your total number of Clubpoints will always appear next to your
                profile as such:
              </p>
              <div></div>
              <UserPoint />
              <v-divider class="my-10" />
              <strong>
                How do I spend Clubpoints?
              </strong>
              <p>
                Whenever you sign up for a weekly meeting, you will be able to
                spend Clubpoints. You can use your Clubpoints to:
              </p>
              <v-row>
                <v-col cols="2">
                  <img
                    src="https://lunchclub.ai/static/media/specify.b83dff55.svg"
                    alt=""
                  />
                </v-col>
                <v-col cols="10">
                  <strong>Specify your match for the week.</strong>
                  <p>
                    If you are looking for a match with a specific specialty,
                    each pick is
                    <strong class="red--text">30 Clubpoints.</strong>
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  <img
                    src="https://lunchclub.ai/static/media/multiple.352a43f9.svg"
                    alt=""
                  />
                </v-col>
                <v-col cols="10">
                  <strong>Make multiple matches for the week.</strong>
                  <p>
                    If you are looking to make more than three matches in a
                    week, each additional match is
                    <strong class="red--text">10 Clubpoints.</strong>
                  </p>
                </v-col>
              </v-row>
              <v-divider class="my-10" />
              <v-row>
                <strong>
                  How do I earn Clubpoints?
                </strong>
                <p>
                  You can earn more clubpoints by inviting your friends and
                  making connections! Here’s a breakdown:
                </p>
              </v-row>
              <v-list-item v-for="(item, index) in items" :key="index" dense>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon color="secondary">
                  <strong class="green--text">
                    +{{ item.points }} Points</strong
                  ></v-list-item-icon
                >
              </v-list-item>
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
import UserPoint from "../components/UserPoint";
export default {
  components: {
    UserPoint,
  },
  data: () => ({
    items: [
      { title: "Take a meeting", points: 2 },
      { title: "Invite a friend who joins Lunchclub", points: 5 },
      { title: "Invited friend takes first meeting", points: 5 },
      { title: "Send a suggested invite", points: 1 },
    ],
  }),
};
</script>
