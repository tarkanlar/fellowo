import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#33AB74", // #E53935
        secondary: "#477A62", // #FFCDD2
        accent: "#F5BF44", // #3F51B5
      },
    },
  },
});
