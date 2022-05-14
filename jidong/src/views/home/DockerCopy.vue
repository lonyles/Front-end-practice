<template>
    <div class="docker">
      <div v-for="( item,i ) in dockerList"
      :class="{'docker__item--active': i === 0}"
      :key="item.icon"
      class="docker__item"
      >
      <div class="iconfont" v-html="item.icon"></div>
      <div>{{item.text}}</div>
      </div>
    </div>
</template>

<script>
export default ({
  name: 'DockerCopy',
  setup () {
    const dockerList = [
      { icon: '&#xe62e;', text: '首页' },
      { icon: '&#xe70b;', text: '购物车' },
      { icon: '&#xe897;', text: '订单' },
      { icon: '&#xe728;', text: '我的' }
    ]
    return { dockerList }
  }
})
</script>

<style lang="scss" scoped>
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0.1rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
  color: #333;
}
.docker__item {
  flex: 1;
  text-align: center;
  //想当于.docker__item--active  --表示状态
  &--active {
    color: #1fa4fc;
  }
}
</style>
