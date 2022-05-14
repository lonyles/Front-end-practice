<template>
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <div class="nearby__item"
      v-for="item in nerabyList"
      :key="item.id">
        <img
          class="nearby__item__img"
          :src='item.imgUrl'
        />
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">{{item.title}}</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tags__tag"
            v-for="(innerItem,innerIndex) in item.tag"
            :key="innerIndex">{{innerItem}}</span>
          </div>
          <p class="nearby__item__content__protrude">{{item.protrude}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default ({
  name: 'ConterCopy',
  setup () {
    const nerabyList = [{
      id: 1,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tag: ['月售一万', '起送5元', '基础运费5元'],
      protrude: 'VIP尊享满89元减4元运费券(每月三张)'
    },
    {
      id: 2,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tag: ['月售一万', '起送5元', '基础运费5元'],
      protrude: 'VIP尊享满89元减4元运费券(每月三张)'
    }]
    return { nerabyList }
  }
})
</script>

<style lang="scss" scoped>
.nearby {
  &__title {
    margin: 0.16rem 0 0.1rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: #333;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      width: 0.6rem;
      height: 0.6rem;
      margin-right: 0.18rem;
    }
    &__content {
      padding-bottom: .12rem;
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
        line-height: .18rem;
        font-size: .14rem;
        margin-top: .08rem 0 0 0;
      }
    }
  }
}
</style>
