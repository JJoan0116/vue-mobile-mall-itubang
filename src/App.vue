<template>
  <div id="app">
    <Header />
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Footer from './components/Footer';
import Header from './components/Header';
import './assets/css/font-size.css';
import './assets/css/index.css';

export default {
  data() {
    return {};
  },
  components: {
    Header
    // Footer
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
  padding-top: .88rem;
  padding-bottom: .92rem;
}
</style>
