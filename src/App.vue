<!-- by your name -->
<template>
<div>
  <keep-alive>
    <transition name="trans">
  <router-view class="page"></router-view>
    </transition>
  </keep-alive>
        <div class="footer-blank"></div>
  <tab ></tab>
</div>
</template>

<script>
import Tab from 'components/Tab'
export default {
  data () {
    return {
    };
  },
  components: {Tab},
  computed: {},
  methods: {}
}

</script>
<style lang='less' scoped>

.page{
  position: absolute;
  left: 0;
  top: 0;
  bottom:.85rem;
  width: 100%;
}
.footer-blank{
  width: 100%;
  height: .85rem;
}
.trans-enter{
  transform: translateX(100%);
}
.trans-enter-active{
  transition: 1s linear;
}
.trans-leave-active{
  transform: translateX(-100%);
  transition: 1s linear;
}


</style>
