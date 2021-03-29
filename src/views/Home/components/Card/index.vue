<template>
  <div>
    <div class="card" v-for="(item, index) in category" :key="index">
      <div class="title">
        <span>{{ item.class_name }}</span>
      </div>
      <div class="content">
        <Item
          :good="good"
          v-for="(good, idx) in item.goods.slice(0, 4)"
          :key="idx"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { GetXianhuo } from '../../../../api/home';
import Item from '../Item';

export default {
  data() {
    return {
      category: []
    };
  },
  components: {
    Item
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      GetXianhuo({
        page: 1,
        perpage: 4,
        source: 'B2BM'
      }).then((res) => {
        const { data } = res;
        console.log('data.info', data.info);
        this.category = data.info;
      });
    }
  }
};
</script>

<style scoped>
.card {
  background: #fff;
  padding-top: 10px;
  margin-bottom: 10px;
}

.title {
  border-left: 3px solid #3089e7;
  padding-left: 10px;
  margin-left: 14px;
}

.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
