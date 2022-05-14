<template>
    <div class="position">
      <span class="iconfont position__icon">&#xe7f1;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position__notice">&#xe600;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe741;</span>
      山姆会员商店优惠商品
    </div>
    <div class="banner">
      <img class="banner__img" src="../../images/jidotp.jpg" />
    </div>
    <div class="icons">
      <div class="icons__item"
      v-for="item in iconList"
      :key="item.descs">
        <img
          class="icons__item__img"
          :src='item.srcUrl'
        />
        <p class="icons__item__desc">{{item.descs}}</p>
      </div>
    </div>
    <div class="cut"></div>
</template>

<script>
export default ({
  name: 'TopGroup',
  setup () {
    const iconList = [{
      srcUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
      descs: '超市便利'
    }, {
      srcUrl: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
      descs: '菜市场'
    }, {
      srcUrl: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
      descs: '水果店'
    }, {
      srcUrl: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
      descs: '鲜花绿植'
    }, {
      srcUrl: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
      descs: '医药健康'
    }, {
      srcUrl: 'http://www.dell-lee.com/imgs/vue3/家居.png',
      descs: '家居时尚'
    }, {
      srcUrl: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
      descs: '烘培蛋糕'
    }, {
      srcUrl: 'http://www.dell-lee.com/imgs/vue3/签到.png',
      descs: '签到'
    }, {
      srcUrl: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
      descs: '大牌免运'
    }, {
      srcUrl: 'http://www.dell-lee.com/imgs/vue3/红包.png',
      descs: '红包套餐'
    }]
    return { iconList }
  }
})
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
.position {
  position: relative;
  padding: 0.16rem 0.33rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include slto;
  .position__icon {
    position: relative;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute;
    right: 0.18rem;
    font-size: 0.2rem;
  }
  color: #333;
}
.search {
  margin-bottom: 0.12rem;
  height: 0.32rem;
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  .iconfont {
    position: relative;
    display: inline-block;
    font-size: 0.2rem;
    top: 0.02rem;
    padding: 0 0.09rem 0 0.1rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 50%; //相当于再加载前撑出图片的高度，防止下面元素的抖动，这个数值通过计算图片的宽高比获得
  &__img {
    width: 100%;
  }
}
.icons {
  margin-top: 0.16rem;
  display: flex;
  flex-wrap: wrap;
  &__item {
    width: 20%;
    &__img {
      width: 0.5rem;
      height: 0.5rem;
      display: block;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: #333;
    }
  }
}
.cut {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: #f1f1f1;
}
</style>
