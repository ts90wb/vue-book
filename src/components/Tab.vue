<!-- by your name -->
<template>
  <nav>
<router-link to="/home">
<i class="iconfont icon-home"></i>
<span>首页</span>
</router-link>
<router-link to="/list">
<i class="iconfont icon-list"></i>
<span>列表</span>
</router-link>
<router-link to="/collect">
<i class="iconfont icon-star"></i>
<span>收藏</span>
</router-link>
<router-link to="/add">
<i class="iconfont icon-add"></i>
<span>添加</span>
</router-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='less' scoped>
nav{
  position: fixed;
  bottom: 0;
  left: 0;
  display: -webkit-flex;
  display: flex;
  width: 100%;
height: .8rem;
font-size: .2rem;
border-top: 1px solid #ccc;
  justify-content:space-around;
align-items: center;
a{
  display: -webkit-flex;
display: flex;
flex-direction: column;
text-align: center;
i{
  font-size: .3rem;
}
}
.active{
  color:orangered;
  i{
    color: blue;
  }
}
}
</style>
