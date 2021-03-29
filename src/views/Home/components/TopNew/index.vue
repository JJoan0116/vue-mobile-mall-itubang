<template>
  <div class="new">
    <div class="left">
      <img src="~assets/images/top-new.png" alt="" class="icon" />
    </div>
    <div class="right">
      <p>
        <span class="title">行业</span>
        {{ industryNew.description }}
      </p>
      <p>
        <span class="title">企业</span>
        {{ enterpriseNew.name }}
      </p>
    </div>
  </div>
</template>

<script>
import { GetNews } from '../../../../api/home';

export default {
  data() {
    return {
      industryNew: {},
      enterpriseNew: {},
      data: {}
    };
  },
  created() {
    const formData = new FormData();
    formData.append('nav_id', 'fd8d104d-cde4-11e8-b997-5065f3324fe7');
    formData.append('sort', '2');
    formData.append('perpage', '1');
    formData.append('page', '1');

    const enterpriseData = new FormData();
    enterpriseData.append('nav_id', 'a4fe1149-d76c-11e8-b997-5065f3324fe7');
    enterpriseData.append('sort', '2');
    enterpriseData.append('perpage', '1');
    enterpriseData.append('page', '1');

    console.log(111);
    GetNews(formData).then((res) => {
      const { data } = res;
      this.industryNew = data?.info?.list[0];
    });

    GetNews(enterpriseData).then((res) => {
      const { data } = res;
      this.enterpriseNew = data?.info?.list[0];
    });
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
  margin-bottom: 10px;
}

.left {
  width: 20%;
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
  padding: 2px 0;
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
