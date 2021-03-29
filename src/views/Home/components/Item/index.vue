<template>
  <div class="item">
    <div class="imgWrap">
      <img :src="good.image_url" alt="" class="img" />
    </div>
    <div class="name">{{ good.good_name }}</div>
    <div class="detail">
      <span class="price">¥{{ good.good_min_price }}/{{ good.unit }}</span>
      <span class="unit">{{ good.minimum_purchase }}{{ good.unit }}起</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    good: { type: Object, default: () => {} }
  },
  data() {
    return {
      category: []
    };
  }
};
</script>

<style scoped>
.item {
  width: 3.54rem;
  margin-bottom: .2rem;
}

.img {
  width: 3.54rem;
  height: 3.52rem;
}

.imgWrap {
  width: 3.54rem;
  height: 3.52rem;
  border: 1px solid #ccc;
}

.name {
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 0.24rem;
  height: 0.68rem;
  margin: 4px 0;
}

.detail {
  display: flex;
  align-items: center;
  margin-top: 4px;
}

.price {
  color: #3089e7;
  display: inline-block;
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.24rem;
  text-align: left;
}

.unit {
  color: #999999;
  width: 40%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.24rem;
  text-align: left;
}
</style>
