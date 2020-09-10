import * as fb from "../plugins/firebase";
export default {
  actions: {
    async socialLogin({ dispatch }) {
      const result = await fb.auth.signInWithPopup(fb.GoogleAuthProvider);

      result.additionalUserInfo.isNewUser
        ? dispatch("socialLoginCreateUser", result.user)
        : dispatch("fetchUserProfile", result.user);
      // create user object in userCollections
    },
    async socialLoginCreateUser({ dispatch }, user) {
      // create user object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: user.displayName,
      });
      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
  },
};
