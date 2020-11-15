<template>
  <div>
    <div class="relative py-6 px-4 sm:px-6 lg:px-8 ">
      <nav class="relative flex items-center justify-between sm:h-10 ">
        <div class="flex items-center flex-grow flex-shrink-0 md:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <div
              class="flex items-center flex-shrink-0 text-black mr-6"
              @click="goHome"
            >
              <router-link :to="'/'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-backhoe"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FF9800"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="4" cy="17" r="2" />
                  <circle cx="13" cy="17" r="2" />
                  <line x1="13" y1="19" x2="4" y2="19" />
                  <line x1="4" y1="15" x2="13" y2="15" />
                  <path d="M8 12V7h2a3 3 0 0 1 3 3v5" />
                  <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
                  <path d="M21.12 9.88l-3.12 -4.88l-5 5" />
                  <path
                    d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z"
                  />
                </svg>
              </router-link>
              <span
                class="font-semibold text-xl tracking-tight ml-4 text-orange-500 hover:text-red-500 cursor-pointer"
                >TNT & CO</span
              >
            </div>

            <div class="-mr-2 flex items-center md:hidden">
              <button
                @click="isOpen = !isOpen"
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4">
          <template v-if="user.loggedIn">
            <router-link
              :to="'/dashboard'"
              class="ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out"
              >Dashboard</router-link
            >
          </template>
          <template v-else>
            <router-link
              :to="'/login'"
              class="ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out"
              >Log in</router-link
            >
          </template>
        </div>
      </nav>
    </div>
    <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
    <div
      v-if="isOpen"
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
    >
      <div class="rounded-lg shadow-md">
        <div
          class="rounded-lg bg-white shadow-xs overflow-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div class="flex items-center flex-shrink-0 text-black mr-6">
              <router-link :to="'/'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-backhoe"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FF9800"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="4" cy="17" r="2" />
                  <circle cx="13" cy="17" r="2" />
                  <line x1="13" y1="19" x2="4" y2="19" />
                  <line x1="4" y1="15" x2="13" y2="15" />
                  <path d="M8 12V7h2a3 3 0 0 1 3 3v5" />
                  <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
                  <path d="M21.12 9.88l-3.12 -4.88l-5 5" />
                  <path
                    d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z"
                  />
                </svg>
              </router-link>
              <span
                class="font-semibold text-xl tracking-tight ml-4 text-orange-500"
                >TNT & CO</span
              >
            </div>
            <div class="-mr-2">
              <button
                @click="isOpen = !isOpen"
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Close menu"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3" @click="isOpen = false"></div>
          <div @click="isOpen = false">
            <template v-if="user.loggedIn">
              <router-link
                :to="'/dashboard'"
                class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                role="menuitem"
                >Dashboard</router-link
              >
            </template>
            <template v-else>
              <router-link
                :to="'/login'"
                class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                role="menuitem"
                >Log in</router-link
              >
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    signOut() {
      this.$store.dispatch("fetchUser", null);
      this.$router.replace({
        name: "home",
      });
    },
    launchToast() {
      this.$store.dispatch("toastModule/displayNotification", {
        text: "test",
        type: "success",
      });
    },
    goHome() {
      // check if route is already pushed
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
  },
};
</script>
