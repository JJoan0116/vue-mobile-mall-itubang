<template>
  <div class="new">
    <div class="left">
      <img src="~assets/images/top-new.png" alt="" class="icon" />
    </div>
    <!-- <div class="right">
      <p>
        <span class="title">行业</span>
        {{}}
      </p>
      <p>
        <span class="title">企业</span>
      </p>
    </div> -->
  </div>
</template>

<script>
import { GetNews } from '../../../../api/home';

export default {
  data() {
    return {
      new: []
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      GetNews().then((res) => {
        const { data } = res;
        this.info = data?.info?.list || [];
      });
    }
  }
};
</script>

<style scoped>
.new {
  width: 100%;
  background: #fff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.left {
  width: 20%;
  border-right: 1px solid #e5e5e5;
  text-align: center;
}

.icon {
  width: 53px;
}

.right {
  width: 80%;
}

.right p {
  font-size: 12px;
  color: #8f8f94;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.title {
  color: #3089e7;
  padding: 0 4px;
  border-radius: 3px;
  border: 1px solid #3089e7;
  margin-right: 8px;
  line-height: 11px;
}
</style>
