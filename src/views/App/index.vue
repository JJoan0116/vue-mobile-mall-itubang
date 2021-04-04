<template>
  <keep-alive>
    <div id="app">
      <Header :title="title" />
      <div class="main">
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </keep-alive>
</template>

<script>
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../assets/css/font-size.css';
import '../../assets/css/index.css';

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  },
  computed: {
    title() {
      return this.$route.meta.title;
    }
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
  display: flex;
}

.main {
  width: 100%;
  display: flex;
  flex-grow: 1;
  padding-top: 0.88rem;
  padding-bottom: 0.92rem;
}
</style>
