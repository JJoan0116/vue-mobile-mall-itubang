<template>
 <div class="nav">
   <div class="item" v-for="(item, index) in info" :key="index">
     <img v-lazy="item.nav_img" alt="" class="icon">
     <span>{{item.nav_name}}</span>
   </div>
 </div>
</template>

<script>
import { GetNavigationInfo } from '../../../../api/home';

export default {
  data() {
    return {
      info: []
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      GetNavigationInfo().then((res) => {
        const { data } = res;
        this.info = data?.info || [];
      });
    }
  }
};
</script>

<style scoped>
.nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
}

.item {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: .12rem 0;
}

.icon {
  width: .8rem;
  height: .8rem;
  margin-bottom: .2rem;
}
</style>
