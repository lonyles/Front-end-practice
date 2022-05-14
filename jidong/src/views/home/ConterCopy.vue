<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <ShopInfo v-for="item in nerabyList.data" :key="item._id" :item="item"/>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from '@vue/reactivity';
import ShopInfo from '../../components/ShopInfo.vue'
export default {
  name: "ConterCopy",
  components:{ShopInfo},
  setup() {
    const nerabyList = ref([])
    const getNerabyList = async () => {
      const result = await axios.get('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/shop/hot-list');
      nerabyList.value = result.data;
    };
   
    getNerabyList();
    return { nerabyList };
  },
};
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
}
</style>
