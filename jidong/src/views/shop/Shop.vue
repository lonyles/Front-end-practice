<template>
<div class="wrapper">
    <div class="search">
        <div class="search__back iconfont" @click="backHome">&#xe662;</div>
        <div class="search__content">
            <span class="search__content__icon iconfont">&#xe741;</span>
            <input class="search__content__input" placeholder="请输入商品名称">
        </div>
    </div>
    <ShopInfo :item='item.data'/>
    <CoreData/>
</div>
  
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { reactive, toRefs } from '@vue/reactivity';
import ShopInfo from "../../components/ShopInfo.vue";
import axios from 'axios';
import CoreData from './CoreData'
export default {
  name: "Shop",
  components: { ShopInfo, CoreData },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const backHome = () => {
        router.back()
    }
    const data = reactive({item:{}})
    const getItemData = async () => {
        const result = await axios.get(`https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/shop/${route.params.id}`)
        data.item = result.data;
    }
    getItemData()
    const { item } = toRefs(data)
    return{item, backHome}
  },
};
</script>

<style lang='scss' scoped>
.wrapper{
    padding: 0 .18rem;
}
.search{
    height: .32rem;
    display: flex;
    margin: .2rem 0 .16rem 0;
    &__back{
        height: .32rem;
        width: .4rem;
        line-height: .32rem;
        font-size: .3rem;
        color:#b6b6b6;
    }
    &__content{
        display: flex;
        flex: 1;
        line-height: .32rem;
        background: #f5f5f5;
        border-radius: .16rem;
        &__icon{
            width: .38rem;
            line-height: .32rem;
            text-align: center;
            color: #b7b7b7;
        }
        &__input{
            flex: 1;
            line-height: .32rem;
            border: 0;
            outline: none;
            background:none;
            padding-right: .2rem;
            color: #333;
            font-size: .15rem;
            &::placeholder{
                color: #333;
            }
        }
    }
}
</style>