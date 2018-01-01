<!-- by your name -->
<template>
  <nav>
<router-link to="/home">
<div class="switch">
<i class="iconfont icon-home" v-show="!isShow"></i>
<i class="iconfont icon-home-active" v-show=" swithIcon"></i>
</div>
<span>首页</span>
</router-link>
<router-link to="/list">
<div class="switch">
<i class="iconfont icon-list" v-show="!isShow"></i>
<i class="iconfont icon-list-active" v-show=" swithIcon"></i>
</div>
<span>列表</span>
</router-link>
<router-link to="/collect">
<div class="switch">
<i class="iconfont icon-star" v-show="!isShow"></i>
<i class="iconfont icon-star-active" v-show=" swithIcon"></i>
</div>
<span>收藏</span>
</router-link>
<router-link to="/add">
<div class="switch">
<i class="iconfont icon-add" v-show="!isShow"></i>
<i class="iconfont icon-add-active" v-show="isShow">{{swithIcon}}</i>
</div>
<span>添加</span>
</router-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isShow:false
    }
  },
  components: {},
  computed: {},
  methods: {
  swithIcon:function(){
    let oLink=document.querySelectorAll('a');
    for(let i=0,len=oLink.length;i<len,i++;){
      oLink[i].onclick=()=>{
      this.isShow=true;
        console.log(this.isShow)
      }
    }
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
  i{
    color: blue;
  }
}
}
</style>
