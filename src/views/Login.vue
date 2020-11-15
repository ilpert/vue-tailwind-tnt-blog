<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img
        src="https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1441&q=100"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
          Log in to your account
        </h1>

        <form class="mt-6" action="#" @submit.prevent="submit">
          <div>
            <label for="email" class="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
              required
              v-model="form.email"
            />
          </div>

          <div class="mt-4">
            <label for="password" class="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
              required
              v-model="form.password"
            />
          </div>

          <button
            type="submit"
            class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
          >
            Log In
          </button>
        </form>

        <hr class="my-6 border-gray-300 w-full" />

        <p class="text-sm text-gray-500 mt-12">
          &copy; 2020 Rich - All Rights Reserved.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "prova@prova.prova",
        password: "123456",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("fetchUser", {
        name: "MassimoDecimo",
        surname: "Rossi",
      });
      this.$router.replace({ name: "Dashboard" });
      this.$store.dispatch("toastModule/displayNotification", {
        text: "Welcome in",
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
.h-screen {
  height: calc(100vh - 88px);
}
</style>
