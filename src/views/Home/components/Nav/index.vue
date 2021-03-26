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
  margin-bottom: 10px;
}

.item {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
}

.icon {
  width: 62px;
  height: 62px;
  margin-bottom: 10px;
}
</style>
