<template>
    <div>
      <m-header title="书城"></m-header>
      <div v-if="sliders.length">
        <slider :data="sliders"></slider>
      </div>
      <div class="main-loading" v-show="isLoading.main">
       <loading ></loading>
       </div>
      <h3>最新上架</h3>
      <ul>
        <li v-for="hot in hots" :key="hot.id">
          <img :src="hot.bookCover" alt="vue-book封面图片" width="138" height="200">
          <span>{{hot.bookName}}</span>
        </li>
      </ul>
      <loading v-if="isLoading.list"></loading>
    </div>
</template>
<script>
    import {getSliders,getHot} from 'api';
    import MHeader from 'components/MHeader';
    import Slider from 'components/Slider';
    import Loading from 'components/Loading';
    export default {
        data(){
            return {
                sliders:[],
                hots:[],
                isLoading:{main:true,list:true}

            }
        },
        created(){
          getSliders().then(res=>{
              this.sliders = res.data;
              this.isLoading.main=false;
          }).catch(err=>{
              console.log(err);
          });
getHot().then(res=>{
  this.hots=res.data;
  this.isLoading.list=false;
}).catch(err=>{
              console.log(err);
});
        },

        computed: {},
        components: {MHeader,Slider,Loading},
        methods: {}
    }
</script>
<style scoped lang="less">
.main-loading{
  position: relative;
  width: 100%;
  height: 2rem;
  .loading{
    position: absolute;
    left: 0;
    top:0;
    bottom:0;
    right:0;
  }
}
h3{
  height: .4rem;
  line-height: .4rem;
  margin-top: .1rem;
  padding-left: .1rem;
  font-size: .22rem;
  font-weight: bold;
  color:#999;
}
ul{
  display: -webkit-flex;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
li{
  display: -webkit-flex;
  display: flex;
  width: 33.33%;
  padding: 0 .1rem;
  margin-top: .1rem;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  img{
width:1rem ;
height: 1.4rem;
  }
  span{
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    font-size: .18rem;
    text-align: center;
    color:#333;
  }
}
}

</style>
