<template>
  <div class="px-4 py-2 flex-1 h-0 overflow-y-auto md:flex-none md:h-auto ">
    <ul v-bind:post="menu" v-bind:key="menu.id" v-for="menu in menuItems">
      <li v-on:click="$emit('update:activemenu', menu.title)">
        <router-link
          class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
          :class="activeMenu === menu.title ? 'bg-gray-200' : ''"
          :to="`/${menu.goTo}`"
        >
          <span class="mr-4" v-html="menu.svg"> </span>
          {{ menu.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DashMenuItem",
  props: { activeMenu: String, menuItems: Array },
};
</script>

<style></style>
