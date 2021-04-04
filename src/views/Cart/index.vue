<template>
  <div class="container">
    <div class="item">
      <div class="detail">
        <!-- <input type="radio" /> -->
        <img
          src="https://image.itubang.com/itubang/2018/09/25/059118765315378436537810885.jpg"
          alt=""
          class="img"
        />
        <div class="info">
          <p class="name">长期供应古马隆树脂</p>
          <p class="sub">14#</p>
          <p class="price">¥4/吨</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(111, this.$store);
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: rgb(239, 239, 244);
  overflow-y: auto;
}

.item {
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #ccc;
}

.detail {
  display: flex;
  align-items: center;
  padding: 0.2rem 0 0.2rem 0.5rem;
}

.img {
  width: 0.58rem;
  height: 0.58rem;
  margin-right: 0.2rem;
}

.info {
}

.name {
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
  margin-bottom: 0.1rem;
}

.sub {
  font-size: 0.24rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0.1rem;
}

.price {
  color: #3089e7;
  font-size: 0.24rem;
  margin-bottom: 0.1rem;
}

button {
  font-weight: 400;
  overflow: hidden;
  width: 0.4rem;
  height: 0.3rem;
  padding: 0;
  color: #555;
  border: none;
  border-radius: 0;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
}

input {
  display: inline-block;
  overflow: hidden;
  width: 0.8rem;
  height: 0.3rem;
  margin: 0;
  padding: 0 3px !important;
  text-align: center;
  text-overflow: ellipsis;
  word-break: normal;
  border: none !important;
  border-radius: 0 !important;
}

.num {
  padding-left: 0.5rem;
}
</style>
