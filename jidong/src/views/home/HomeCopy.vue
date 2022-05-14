<template>
  <div class="wrapper">
    <topGroup/>
    <ConterCopy/>
  </div>
  <DockerCopy/>
</template>

<script>
import TopGroup from './TopGroup.vue'
import ConterCopy from './ConterCopy.vue'
import DockerCopy from './DockerCopy.vue'
export default ({
  name: 'HomeCopy',
  components: { TopGroup, ConterCopy, DockerCopy }
})
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0.49rem;
  padding:0 0.18rem .1rem .18rem;
}
</style>
