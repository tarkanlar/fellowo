const [defaultTimeout, defaultColor] = [5, "success"];
const ONE_SECOND = 1000;
export default {
  namespaced: true,
  state: {
    message: "",
    status: false,
    timeout: defaultTimeout,
    color: defaultColor,
  },
  getters: {
    message: (state) => state.message,
    color: (state) => state.color,
    timeout: (state) => state.timeout,
    status: (state) => state.status,
  },
  mutations: {
    SET_MESSAGE(state, message) {
      state.message = message;
    },
    SET_TIMEOUT(state, timeout) {
      state.timeout = timeout * ONE_SECOND;
    },
    SET_COLOR(state, color) {
      state.color = color;
    },
    SET_STATUS(state, status = false) {
      state.status = status;
    },
  },
  actions: {
    succes({ dispatch }) {
      dispatch("show");
    },
    show(
      { commit },
      { message, timeout = defaultTimeout, color = defaultColor }
    ) {
      commit("SET_MESSAGE", message);
      commit("SET_TIMEOUT", timeout);
      commit("SET_COLOR", color);
      commit("SET_STATUS", true);
    },
    close({ commit }) {
      commit("SET_STATUS");
    },
  },
};
