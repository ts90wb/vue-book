<!-- by your name -->
<template>
<nav>
<router-link v-for="item in selectNav" :key="item.id" :to="item.path">
<i  :class="isSelect===item.path?item.isActive:item.noActive"></i>
<span>{{item.title}}</span>
</router-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isSelect: '/home',
      selectNav:[
        {id:1,path:'/home',title:'首页',isActive:'iconfont icon-home-active',noActive:'iconfont icon-home'},
        {id:2,path:'/list',title:'列表',isActive:'iconfont icon-list-active',noActive:'iconfont icon-list'},
        {id:3,path:'/collect',title:'收藏',isActive:'iconfont icon-star-active',noActive:'iconfont icon-star'},
        {id:4,path:'/add',title:'添加',isActive:'iconfont icon-add-active',noActive:'iconfont icon-add'}
      ]
    }
  },
  created(){
this.swithIcon();
  },
  watch:{
'$route':'swithIcon'
  },
  components: {

  },
  computed: {},
  methods: {
  swithIcon:function(){
    this.isSelect=this.$route.path;
    }
  }
}

</script>
<style scoped lang='less'>
nav{
  position: fixed;
  bottom: 0;
  left: 0;
  display: -webkit-flex;
  display: flex;
  width: 100%;
height: .8rem;
background: white;
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
}
}
</style>
