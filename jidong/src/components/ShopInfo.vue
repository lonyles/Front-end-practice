<template>
  <div class="shop">
    <img class="shop__img" :src="item.imgUrl" />
    <div class="shop__content">
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tags__tag">月售：{{ item.sales }}</span>
        <span class="shop__content__tags__tag"
          >起送：{{ item.expressLimit }}</span
        >
        <span class="shop__content__tags__tag"
          >基础运费：{{ item.expressPrice }}</span
        >
      </div>
      <p class="shop__content__protrude">{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ShopInfo',
    props: ['item']
};
</script>

<style lang= "scss" scoped>
.shop {
  display: flex;
  padding-top: 0.12rem;
  &__img {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 0.18rem;
  }
  &__content {
    padding-bottom: 0.12rem;
    border-bottom: 1px solid #f1f1f1;
    flex: 1;
    &__title {
      line-height: 0.22rem;
      font-size: 0.18rem;
      color: #333;
    }
    &__tags {
      line-height: 0.18rem;
      font-size: 0.14rem;
      color: #333;
      margin-top: 0.08rem;
      &__tag {
        margin-right: 0.16rem;
      }
    }
    &__protrude {
      color: #e93b3b;
      line-height: 0.18rem;
      font-size: 0.14rem;
      margin-top: 0.08rem 0 0 0;
    }
  }
}
</style>