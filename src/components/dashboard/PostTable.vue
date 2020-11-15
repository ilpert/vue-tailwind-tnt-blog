<template>
  <div class="flex flex-col mt-8">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
      >
        <table class="min-w-full ">
          <thead>
            <tr>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-black-500 uppercase tracking-wider  "
              >
                Image
              </th>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-black-500 uppercase tracking-wider  "
              >
                Title
              </th>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-black-500 uppercase tracking-wider w-16 "
              ></th>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 w-16"
              ></th>
            </tr>
          </thead>

          <tbody class="bg-white">
            <tr v-for="(post, index) in posts" :key="index">
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="post.img"
                      alt=""
                    />
                  </div>
                </div>
              </td>

              <td
                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-16 md:w-32 lg:w-48"
              >
                <div
                  class="text-sm leading-5 text-gray-900 truncate w-16 md:w-32 lg:w-56"
                >
                  {{ post.title }}
                </div>
              </td>

              <td
                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
              >
                {{ post.createdOn }}
              </td>

              <td
                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
              >
                <a
                  class="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                  v-on:click="$emit('edit-post', post)"
                  >Edit</a
                >
              </td>
              <td
                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
              >
                <a
                  v-on:click="$emit('delete-post', post.id)"
                  class="text-red-300 hover:text-red-600 cursor-pointer"
                  >Delete</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostTable",
  props: {
    posts: Array,
  },
  methods: {},
};
</script>

<style></style>
