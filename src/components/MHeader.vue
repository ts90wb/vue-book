<!-- by your name -->
<template>
 <header>
 {{title}}
 </header>
</template>

<script>
export default {
  props:['title'],
  data () {
    return {
    };
  },

  components: {},
  computed: {},
  methods: {}
}

</script>
<style lang='less' scoped>
header{
  width: 100%;
  height: .5rem;
  line-height: .5rem;
  background: linear-gradient(to bottom,#ddd 20%,transparent 80%);
  font-size: .24rem;
  color: #333;
  font-family: 'KaiTi';
  text-align: center;
}
</style>
