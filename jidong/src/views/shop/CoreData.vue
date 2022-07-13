<template>
  <div class="content">
    <div class="category">
      <div class="category__item category__item--active">全部商品</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
    </div>
    <div class="details">
      <div class="details__item">
        <img
          class="details__item__img"
          src="http://www.dell-lee.com/imgs/vue3/user.png"
        />
        <div class="details__item__detail">
          <h4 class="details__item__title">番茄350g/份</h4>
          <p class="details__item__sales">月售10件</p>
          <p class="details__item__price">
            <span class="details__item__yen">&yen;33.6</span>
            <span class="details__item__origin">&yen;66.6</span>
          </p>
        </div>
        <div class="details__item__number">
          <span class="details__item__number__minus">+</span>
          <span class="details__item__number__add">0</span>
          <span class="details__item__number__puls">-</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang='scss' scoped>
@import '../../style/mixins.scss';

.content {
  display: flex;
  position: absolute;
  top: 1.9rem;
  bottom: 0.9rem;
  left: 0;
  right: 0;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: 0.8rem;
  background: #f5f5f5;
  &__item {
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.16rem;
    color: #333;
    &--active {
      background: #fff;
    }
  }
}
.details {
  overflow-y: scroll;
  flex: 1;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &__detail{
      overflow: hidden;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
      @include slto
    }
    &__sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: #333;
    }
    &__price {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: red;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-right: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #999;
      text-decoration: line-through;
    }
    &__number{
      position: absolute;
      right:.0;
      bottom: .12rem;
      &__minus,
      &__puls{
        display: inline-block;
        line-height: .16rem;
        width: .2rem;
        height: .2rem;
        border-radius: 50%;
        border: .01rem solid #666;
        font-size: .2rem;
        text-align:center;
      }
      &__puls{
        background: #0091FF;
        color: #fff;
      }
      &__add{
        margin-right: .1rem;
        margin-left: .1rem;
      }
    }
  }
}
</style>
