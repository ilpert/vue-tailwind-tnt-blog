<template>
  <div>
    <div class="lg:hidden">
      <div
        v-on:click="$emit('toggle-menu')"
        class="fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300"
        v-bind:class="[
          isSideMenuOpen
            ? 'opacity-75 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        ]"
      ></div>

      <!-- Small Screen Menu -->
      <div
        v-bind:class="[isSideMenuOpen ? 'translate-x-0' : '-translate-x-full']"
        class="fixed inset-y-0 left-0 flex flex-col z-40 max-w-md  bg-white transform ease-in-out duration-300 "
      >
        <!-- Brand Logo / Name -->
        <div class="flex items-center px-6 py-3 h-16">
          <div class="text-2xl font-bold tracking-tight text-gray-800">
            TNT ADMIN PANEL
          </div>
        </div>
        <!-- @end Brand Logo / Name -->

        <DashMenuItem
          :activeMenu="activeMenu"
          v-on:update:activemenu="activeMenu = $event"
          :menuItems="dashMenuItems"
        />
      </div>
      <!-- @end Small Screen Menu -->
    </div>

    <!-- Menu Above Medium Screen -->
    <div
      class="bg-white w-64 min-h-screen overflow-y-auto hidden lg:block shadow relative z-30"
    >
      <!-- Brand Logo / Name -->
      <div class="flex items-center px-6 py-3 h-16">
        <div class="text-2xl font-bold tracking-tight text-gray-800">
          TNT ADMIN PANEL
        </div>
      </div>
      <!-- @end Brand Logo / Name -->

      <DashMenuItem
        :activeMenu="activeMenu"
        v-on:update:activemenu="activeMenu = $event"
        :menuItems="dashMenuItems"
      />
    </div>
    <!-- @end Menu Above Medium Screen -->
  </div>
</template>

<script>
import DashMenuItem from "./DashMenuItem";
export default {
  name: "DashboardMenu",
  props: ["isSideMenuOpen"],
  components: {
    DashMenuItem,
  },
  data() {
    return {
      activeMenu: "Dashboard",
      dashMenuItems: [
        {
          id: 0,
          title: "Dashboard",
          goTo: "dashboard",
          svg: `  <svg
            xmlns="http://www.w3.org/2000/svg"
            class="opacity-50"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
            <rect x="4" y="4" width="6" height="6" rx="1" />
            <rect x="14" y="4" width="6" height="6" rx="1" />
            <rect x="4" y="14" width="6" height="6" rx="1" />
            <rect x="14" y="14" width="6" height="6" rx="1" />
          </svg>`,
        },

        {
          id: 1,
          title: "Settings",
          goTo: "settings",
          svg: `<svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-4 opacity-50"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
            <path
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <circle cx="12" cy="12" r="3" />
          </svg>`,
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
