<template>
  <div>
    <navbar></navbar>
    <main class="min-h-screen">
      <slot />
    </main>
  </div>
</template>

<script>
import navbar from "./../components/Navbar";
export default {
  components: {
    navbar,
  },
};
</script>

<style scoped>
.min-h-screen {
  min-height: calc(100vh - 88px);
}
</style>
