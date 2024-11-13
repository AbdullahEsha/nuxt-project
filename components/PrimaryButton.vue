<template>
  <button :class="buttonClasses" :style="customStyle" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    color: {
      type: String,
      default: "blue",
    },
    size: {
      type: String,
      default: "medium",
    },
    customStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    buttonClasses() {
      return ["primary-button", this.size, this.color];
    },
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style scoped>
.primary-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.primary-button.blue {
  background-color: blue;
}

.primary-button.green {
  background-color: green;
}

.primary-button.red {
  background-color: red;
}

.primary-button.small {
  font-size: 12px;
}

.primary-button.medium {
  font-size: 16px;
}

.primary-button.large {
  font-size: 20px;
}

.primary-button:hover {
  opacity: 0.8;
}
</style>
