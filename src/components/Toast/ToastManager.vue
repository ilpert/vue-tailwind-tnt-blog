<template>
  <div name="toasts" tag="div" class="c-toasts ">
    <ToastItem
      class="toasts-item transition duration-500 ease-in-out "
      v-for="toast in notifications"
      :toast="toast"
      :key="toast.id"
    />
  </div>
</template>

<script>
import ToastItem from "./ToastItem";
import { mapState } from "vuex";

export default {
  name: "Toasts",
  component: {
    ToastItem,
  },
  //https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate: function() {
    this.$options.components.ToastItem = require("./ToastItem.vue").default;
  },
  computed: { ...mapState("toastModule", ["notifications"]) },
};
</script>

<style>
.toast {
  height: 50px;
  width: 50px;
  position: fixed;
}
/* Block */
.c-toasts {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  height: 50px;
  width: 300px;
  pointer-events: none;
}

/* Element */
.c-toasts__item {
  display: flex;
  align-items: center;

  width: 100%;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;

  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
}

/* Modifiers */
.c-toasts__item--success {
  background-color: #339900;
}

.c-toasts__item--danger {
  background-color: #cc3300;
}

.c-toasts__item--warning {
  background-color: #ffcc00;
}

.c-toasts__item--info {
  background-color: #40a6ce;
}
</style>
