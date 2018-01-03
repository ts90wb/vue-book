<!-- by your name -->
<template>
<div>
  <keep-alive>
  <router-view></router-view>
  </keep-alive>
        <div class="footer-blank"></div>
  <tab></tab>
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
<style lang='css' scoped>
.footer-blank{
  width: 100%;
  height: .85rem;
}
</style>
