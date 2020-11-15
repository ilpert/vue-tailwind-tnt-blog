<template>
  <div
    class="text-white px-6 py-4 border-0 rounded relative mb-4 "
    :class="['c-toasts__item--' + toast.type]"
  >
    <span class="inline-block align-middle mr-8">
      {{ toast.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ToastItem",
  props: {
    toast: {
      type: Object,
      required: true,
    },
  },
};
</script>
