<template>
  <div class="container">
    <Swiper />
    <Nav />
    <TopNew />
  </div>
</template>

<script>
import Swiper from './components/Swiper';
import Nav from './components/Nav';
import TopNew from './components/TopNew';

export default {
  data() {
    return {};
  },
  components: {
    Swiper,
    Nav,
    TopNew
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: rgb(239, 239, 244);
}
</style>
