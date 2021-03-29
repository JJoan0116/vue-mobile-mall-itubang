<template>
  <div class="item" @click="onChangeTab">
    <div v-if="!isActive">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="active-img"></slot>
    </div>
    <div class="title" :class="isActive ? 'active' : null">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) > -1;
    }
  },
  methods: {
    onChangeTab() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.item {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.title {
  font-size: .26rem;
}

.active {
  color: #1296db;
}
</style>
