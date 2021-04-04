<template>
  <div class="wrap">
    <div class="detail">
      <div class="info">
        <img :src="info.good_image" alt="" class="img" />
        <div class="price">
          ¥
          {{ info.min_price }}
          /{{ info.unit }}
        </div>
        <div class="stock">
          库存：
          <span>{{ info.stock }}</span>
          公斤
        </div>
      </div>
      <div class="sub">
        <p>产品规格</p>
        <p class="nameSub">{{ info.good_name_sub }}</p>
      </div>
      <div class="num">
        <span>数量</span>
        <div>
          <button @click="onReduce">-</button>
          <input type="number" v-model="number" />
          <button @click="onAdd">+</button>
        </div>
      </div>

      <button class="confirm" @click="confirm">确定</button>
      <div class="close" @click="onClose">x</div>
    </div>
  </div>
</template>

<script>
import { ADD_CART_LIST_SUCCESS } from '../../../../store/mutationType';

export default {
  props: {
    info: {
      type: Object,
      default: () => undefined
    }
  },
  data() {
    return {
      number: 1
    };
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    },
    onAdd() {
      this.number += 1;
    },
    onReduce() {
      if (this.number <= 1) {
        return window.alert('数量不能小于0');
      }
      this.number -= 1;
    },
    confirm() {
      this.$store.commit(`cart/${ADD_CART_LIST_SUCCESS}`, {
        item: this.info,
        count: this.number
      });
      this.$emit('onClose');
    }
  }
};
</script>

<style scoped>
.wrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgb(0, 0, 0, 0.2);
  z-index: 100;
}

.detail {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: #fff;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-bottom: 1rem;
}

.info {
  width: 100%;
  padding-left: 1.3rem;
  padding-top: 0.2rem;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
}

.sub {
  width: 100%;
  padding: 0.2rem 0;
  font-size: 0.3rem;
  color: #333;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 0.1rem;
}

.num {
  padding: 0.1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.img {
  width: 0.92rem;
  height: 0.92rem;
  background: white;
  border: 1px solid #e5e5e5;
  position: absolute;
  left: 0.2rem;
  bottom: 0.1rem;
}

.price {
  font-size: 0.3rem;
  color: #3089e7;
  font-weight: bold;
  margin-bottom: 0.04rem;
}

.stock {
  font-size: 0.24rem;
  color: #999999;
}

.nameSub {
  margin-top: 0.2rem;
  padding: 2px 17px;
  border-radius: 4px;
  font-weight: 500;
  display: inline-block;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid #3089e7 !important;
  color: #3089e7 !important;
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

.confirm {
  background: #3089e7;
  color: #fff;
  font-size: 0.3rem;
  height: 0.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

.close {
  color: #999;
  width: 0.3rem;
  height: 0.3rem;
  font-size: 0.3rem;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
