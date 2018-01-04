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
  methods: {
  }
}

</script>
<style lang='less' scoped>
header{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: .5rem;
  line-height: .5rem;
  background: linear-gradient(to bottom,rgba(221, 221, 221, 0.582) 20%,transparent 80%);
  font-size: .24rem;
  font-weight: bolder;
  color: #555;
  font-family: 'KaiTi';
  text-align: center;
  z-index: 1000;
  div{
    width: .3rem;
    height: .3rem;
  }
}
</style>
