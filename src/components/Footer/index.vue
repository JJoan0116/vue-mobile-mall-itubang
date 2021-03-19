<template>
  <div class="footer">
    <item v-for="(item, index) in bar" :key="index" :path="item.path">
      <img slot="img" :src="item.icon" alt="" class="icon" />
      <img slot="active-img" :src="item.activeIcon" alt="" class="icon" />
      <span slot="title">{{ item.label }}</span>
    </item>
  </div>
</template>

<script>
import Item from './Item';
import home from '../../assets/svg/home.svg';
import classification from '../../assets/svg/classification.svg';
import shopCart from '../../assets/svg/shop_cart.svg';
import user from '../../assets/svg/user.svg';

import activiteHome from '../../assets/svg/active_home.svg';
import activiteClassification from '../../assets/svg/active_classification.svg';
import activiteShopCart from '../../assets/svg/active_shop_cart.svg';
import activeUser from '../../assets/svg/active_user.svg';

export default {
  props: {
    msg: String
  },
  data() {
    return {
      bar: [
        { label: '首页', icon: home, activeIcon: activiteHome, path: '/home' },
        {
          label: '分类',
          icon: classification,
          activeIcon: activiteClassification,
          path: '/category'
        },
        {
          label: '购物车',
          icon: shopCart,
          activeIcon: activiteShopCart,
          path: '/cart'
        },
        { label: '我的', icon: user, activeIcon: activeUser, path: '/user' }
      ]
    };
  },
  components: {
    Item
  }
};
</script>

<style scoped>
.footer {
  height: 46px;
  display: flex;
  align-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
}

.icon {
  width: 22px;
  vertical-align: middle;
}

.title {
  font-size: 13px;
}
</style>
