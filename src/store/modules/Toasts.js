export const toastModule = {
  namespaced: true,
  state: {
    notifications: [],
  },
  mutations: {
    displayNotification(state, payload) {
      state.notifications = [
        ...state.notifications,
        { ...payload, id: Symbol() },
      ];
    },
    removeNotification(state) {
      const notifications = [...state.notifications];
      notifications.shift();
      state.notifications = [...notifications];
    },
  },
  actions: {
    async displayNotification({ dispatch, commit }, payload) {
      commit("displayNotification", payload);
      await new Promise((resolve, reject) => setTimeout(() => resolve(), 3000));
      dispatch("removeNotification");
    },
    removeNotification({ commit }) {
      commit("removeNotification");
    },
  },
};
