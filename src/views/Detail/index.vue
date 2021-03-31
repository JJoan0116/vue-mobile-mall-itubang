<template>
  <div class="container" v-if="!!info">
    <div class="imgWrap">
      <img :src="info.good_image" alt="" class="img" />
    </div>
    <div class="info">
      <div class="title">{{ info.good_name }}</div>
      <div class="price">
        ¥
        <span>
          {{ info.min_price }}
        </span>
        /{{ info.unit }}
      </div>
      <div class="sale">
        <span>发货地：{{ info.send_address[0] }}</span>
        <span>已售：{{ info.sale }}公斤</span>
      </div>
    </div>

    <div class="footer">
      <div class="joinCart" @click="onJoinCart">加入购物车</div>
    </div>

    <Cart :info="info" v-if="isShowCart" @onClose="onCloseCart"></Cart>
  </div>
</template>

<script>
import { GetGoodInfo } from '../../api/detail';
import Cart from './components/Cart';

export default {
  data() {
    return {
      info: null,
      isShowCart: false
    };
  },
  created() {
    this.getDetail();
  },
  components: {
    Cart
  },
  methods: {
    getDetail() {
      const { params } = this.$route;
      const formData = new FormData();
      formData.append('id', params.id);
      GetGoodInfo(formData).then((res) => {
        this.info = res?.data?.info || null;
      });
    },
    onJoinCart() {
      this.isShowCart = true;
    },
    onCloseCart() {
      this.isShowCart = false;
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background: rgb(239, 239, 244);
  overflow-y: auto;
  padding-bottom: 0.92rem;
}

.imgWrap {
  height: 3rem;
  text-align: center;
  background: #fff;
}

.img {
  height: 3rem;
}

.info {
  padding-left: 0.16rem;
  padding-right: 0.16rem;
  background: #fff;
}

.title {
  font-size: 0.32rem;
  padding: 0.14rem 0;
}

.price {
  padding: 0.14rem 0;
  font-size: 0.24rem;
  color: #3089e7;
}

.price span {
  font-size: 0.32rem;
}

.sale {
  padding: 0.14rem 0;
  border-top: 1px solid #e5e5e5;
  color: #666666;
  font-size: 0.24rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.4rem;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.92rem;
  background: #fff;
}

.joinCart {
  width: 29%;
  height: 0.92rem;
  line-height: 0.92rem;
  text-align: center;
  color: white;
  background-color: #3089e7;
  float: right;
}
</style>
