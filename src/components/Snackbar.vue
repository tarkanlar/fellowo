<template>
  <v-snackbar
    v-model="notificationStatus"
    :top="true"
    :color="notificationColor"
    :timeout="notificationTimeout"
  >
    <span v-html="applyFilterToNotificationMessage"></span>
    <template v-slot:action="{ attrs }">
      <v-icon
        small
        color="white"
        text
        v-bind="attrs"
        @click="notificationClose()"
      >
        mdi-close
      </v-icon>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  filters: {
    toList: function(val) {
      if (Array.isArray(val)) {
        let message = `<ul>`;
        val.forEach((msg) => (message += `<li>${msg}</li>`));
        message += `</ul>`;
        return message;
      }
      return val;
    },
  },
  methods: {
    ...mapActions("notifications", {
      notificationClose: "close",
    }),
  },
  computed: {
    ...mapGetters("notifications", {
      notificationMessage: "message",
      notificationColor: "color",
      notificationTimeout: "timeout",
    }),
    notificationStatus: {
      get() {
        return this.$store.getters["notifications/status"];
      },
      set() {
        this.notificationClose();
        //this.$store.dispatch("notifications/close");
      },
    },
    applyFilterToNotificationMessage() {
      return this.$options.filters.toList(this.notificationMessage);
    },
  },
};
</script>
