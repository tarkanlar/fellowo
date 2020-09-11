import router from "../router/index";
import * as fb from "../plugins/firebase";
export default {
  actions: {
    async login({ dispatch }, { email, password }) {
      try {
        // sign user in
        const { user } = await fb.auth.signInWithEmailAndPassword(
          email,
          password
        );
        dispatch("fetchUserProfile", user);
      } catch (e) {
        // display error
        dispatch("notifications/show", {
          message: e.message,
          color: "error",
        });
      }
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );

      // create user object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title,
      });

      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();
      // console.log("userProfile", userProfile.data());
      // set user profile in state
      commit("setUserProfile", userProfile.data());

      // change route to dashboard
      if (router.currentRoute.path === "/login") {
        router.replace("/home").catch((error) => {
          console.log(error);
        });
      }
    },
    async logout({ commit, dispatch }) {
      // log user out
      await fb.auth.signOut();

      // clear user data from state
      commit("setUserProfile", {});

      // redirect to login view
      router.push("/");

      // display notification
      dispatch("notifications/show", {
        message: "You logged out",
        color: "info",
      });
    },
  },
};
