<template>
  <div class="header">
    <slot name="left"></slot>
    <p class="title">
      {{ title }}
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style scoped>
.header {
  height: 0.88rem;
  background: #1296db;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  color: #fff;
  font-size: 0.36rem;
  font-weight: bold;
  text-align: center;
  line-height: 0.88rem;
  margin: 0;
}
</style>
