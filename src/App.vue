<!-- by your name -->
<template>
<div>
  <div></div>
  <keep-alive>
  <router-view></router-view>
  </keep-alive>
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
</style>
