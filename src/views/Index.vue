<template>
  <div>
    <v-main class="hero">
      <v-container>
        <v-row>
          <v-col cols="6">
            <img src="@/assets/logo.svg" width="120" />
          </v-col>
        </v-row>
        <v-row class="d-flex align-center">
          <v-col cols="6">
            <h1 class="font-weight-black text-header">
              Meaningful connnections with like-minded people
            </h1>
            <p class="font-weight-light py-3 text--muted">
              Make 1:1 calls with people who read or watched same things with
              you
            </p>
            <p>
              <v-btn color="primary" class="large vrlps-trigger">
                Join Our Waitlist!
              </v-btn>
            </p>

            <!--  <small> Already have an account?</small>
          <v-btn color="primary" text small to="/login">Log in here</v-btn> -->
          </v-col>
          <v-col cols="6">
            <img src="@/assets/images/hero-1.svg" width="600"
          /></v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-center"
          ><h1 class="text-header">
            How It Works?
          </h1></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="4">
          <img src="@/assets/images/people01.png" width="300" alt="" />
          <p>
            Conect with your goodreads or add the books you read to your library
          </p>
        </v-col>
        <v-col cols="4">
          <img src="@/assets/images/people02.png" width="300" alt="" />
          <p>Each week, let us know if you want to make a new connection.</p>
        </v-col>
        <v-col cols="4">
          <img src="@/assets/images/people03.png" width="300" alt="" />
          <p>Our AI matches you for a 1:1 video meeting.</p>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>
<style scoped>
@media only screen and (min-width: 920px) {
  .home-container {
    max-width: 920px;
  }
  h1 {
    font-size: 3em;
  }
}
.text-header {
  color: #263238 !important;
}
.hero {
  background: rgba(71, 122, 98, 0.05);
  background-image: url("../assets/images/hero-1-bg-img.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
}
</style>
<script>
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
  },
};
</script>
