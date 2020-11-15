/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";
import { toastModule } from "./modules/Toasts";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    user: {
      loggedIn: null,
      data: null,
    },
    posts: null,
    postDetail: null,
  },
  modules: { toastModule },

  getters: {
    user(state) {
      return state.user;
    },
    posts(state) {
      return state.posts;
    },
    getPostBbyId: (state) => (id) => {
      return state.posts.find((post) => post.id === id);
    },
    postDetail(state) {
      return state.postDetail;
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_DETAIL_POST(state, postDetail) {
      state.postDetail = postDetail;
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          user,
        });
        localStorage.setItem("user-token", JSON.stringify(user));
      } else {
        commit("SET_USER", null);
        localStorage.removeItem("user-token");
      }
    },
    async fetchPosts({ commit }, posts) {
      fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=30")
        .then((response) => response.json())
        .then((json) => {
          const posts = json.map((post, index) => {
            return {
              id: post.id,
              title: post.title,
              descrizione: post.body,
              img: "https://dummyimage.com/600x400",
            };
          });
          commit("SET_POSTS", posts);
        });
    },
    cachePostDetail({ commit }, postDetail) {
      commit("SET_DETAIL_POST", postDetail);
    },

    async addPost({ commit, state }, post, callBack) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          body: post.descrizione,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          const addedPost = json.map((item, index) => {
            return {
              id: item.id,
              title: item.title,
              descrizione: item.body,
              img: "https://dummyimage.com/600x400",
            };
          });
          commit("SET_POSTS", { ...addedPost, ...state.posts });
        });
    },

    async deletePost({ commit, state }, id) {
      fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
        method: "DELETE",
      });
      commit(
        "SET_POSTS",
        state.posts.filter((item) => item.id !== id)
      );
    },

    async updatePost({ commit, state }, post) {
      fetch("https://jsonplaceholder.typicode.com/posts/" + post.id, {
        method: "PUT",
        body: JSON.stringify({
          id: post.id,
          title: post.title,
          body: post.descrizione,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  },
});
