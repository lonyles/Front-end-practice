<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link :to="`/shop/${item._id}`" v-for="item in nerabyList.data" :key="item._id">
      <ShopInfo :item="item" />
    </router-link>
  </div> 
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import ShopInfo from "../../components/ShopInfo.vue";
export default {
  name: "ConterCopy",
  components: { ShopInfo },
  setup() {
    const nerabyList = ref([]);
    const getNerabyList = async () => {
      const result = await axios.get(
        "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/shop/hot-list"
      );
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
  a{
    text-decoration: none;
  }
}
</style>
