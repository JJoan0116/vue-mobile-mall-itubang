<template>
  <swiper
    ref="mySwiper"
    :options="swiperOption"
    class="swiper"
    v-if="info.length > 0"
  >
    <swiper-slide v-for="(item, index) in info" :key="index">
      <img :src="item.himage" class="img" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

import { GetHomeadvertisingInfo } from '../../../../api/home';
import 'swiper/css/swiper.css';

export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      info: []
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      GetHomeadvertisingInfo().then((res) => {
        const { data } = res;
        this.info = data?.info || [];
      });
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: plum;
}

.swiper {
  background: cornsilk;
  width: 100%;
  height: 2.92rem;
}

.img {
  width: 100%;
}
</style>
