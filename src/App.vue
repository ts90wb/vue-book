<!-- by your name -->
<template>
<div>
    <transition name="trans">
  <keep-alive>
  <router-view class="page"></router-view>
  </keep-alive>
    </transition>
        <div class="footer-blank"></div>
  <tab></tab>
</div>
</template>

<script>
import Tab from "components/Tab";
export default {
  data() {
    return {};
  },
  components: { Tab },
  computed: {},
  methods: {}
};
</script>
<style lang='less' scoped>
.page {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.85rem;
  width: 100%;
}
.footer-blank {
  width: 100%;
  height: 85px;
}
.trans-enter{
  transform: translate(100%);
}
.trans-enter-active {
  transition: all .5s;

}
.trans-leave-active {
  transition: all .5s;
  transform: translate(-100%);

}

// .trans-leave-to {
// }
</style>
