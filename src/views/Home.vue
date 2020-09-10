<template>
  <v-main fluid>
    <v-container class="fill-height d-flex align-start grey lighten-5" fluid>
      <v-container class="home-container">
        <v-row class="mb-9" justify="center" no-gutters>
          <v-col lg="12">
            <v-card class="pa-16 text-center" outlined>
              <h2>See more connections in your network!</h2>
              <p>
                Connect other Google accounts to see more connections in your
                homepage and get matches more relevant to you!
              </p>
              <v-btn color="primary" depressed dark
                >Add a Google account
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="pa-2">
          <h2>Your Network</h2>
        </v-row>
        <v-row class="mb-12" justify="center" no-gutters>
          <v-col
            v-for="user in users"
            :key="user.uid"
            cols="12"
            lg="3"
            md="6"
            sm="12"
          >
            <UserSmallCard />
          </v-col>
          <v-row class="my-10">
            <v-btn block outlined color="primary" dark>View more</v-btn>
          </v-row>
        </v-row>
      </v-container>
    </v-container>
  </v-main>
</template>

<script>
import UserSmallCard from "../components/UserSmallCard";
export default {
  components: {
    UserSmallCard,
  },
  data: () => ({
    users: [
      {
        uid: 1,
        name: "t",
      },
      {
        uid: 2,
        name: "t",
      },
      {
        uid: 3,
        name: "t",
      },
      {
        uid: 4,
        name: "t",
      },
    ],
  }),
};
</script>
