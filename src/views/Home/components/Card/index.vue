<template>
  <div class="card"></div>
</template>

<script>
import { GetXianhuo } from '../../../../api/home';

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
      GetXianhuo({
        page: 1,
        perpage: 4,
        source: 'B2BM'
      }).then((res) => {
        // const { data } = res;
        // this.info = data?.info || [];
        console.log(111, res);
      });
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
}
</style>
