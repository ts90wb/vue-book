<!-- by your name -->
<template>
  <div>

    <m-header title="列表页" ref="close"></m-header>
    <scroller :on-refresh="refresh" ref="scroll">
      <ul class="list">
      <li v-for="item in books" :key="item.id">
        <img v-lazy="item.bookCover" alt="vue-book封面图片" width="138" height="200">
        <div>
          <h4>{{item.bookName}}</h4>
          <span>{{item.content.length<=32?item.content:item.content.slice(0,32)+"..."}}</span>
        </div>
      </li>
    </ul>
    <div class="tip">{{noData}}</div>
    </scroller>
  </div>
</template>

<script>
import {getBook} from 'api';
import MHeader from 'components/MHeader';
export default {
  data () {
    return {
      noData:'',
      isShow:false,
      books:[]
    };
  },
created(){
getBook().then(res=>{
 this.books=res.data.reverse();
}).catch(err=>{
console.log(err);
})
},
  components: {MHeader},
  computed: {},
  methods: {
    refresh(){
      this.$refs.scroll.finishPullToRefresh();
      this.noData=this.$refs.scroll.noDataText;
    }
  }

}

</script>
<style lang='less' scoped>
.list{
  width: 100%;
  padding:0 .1rem;
  margin-top: .5rem;
  box-sizing: border-box;
  li{
    display: -webkit-flex;
    display: flex;
  width: 100%;
  height: 1.6rem;
  padding:.2rem 0;
  border-bottom: 2px dashed #ccc;
    justify-content: space-around;
    align-items: center;
    img{
      width:1.1rem;
      height: 1.4rem;
    }
    img[lazy='loading']{
      background: url('../assets/images/list_loading.gif') no-repeat center center;
    }
    img[lazy='loaded']{
      -webkit-animation: fadeIn .5s;
      animation: fadeIn .5s;
    }
    @-webkit-keyframes fadeIn {
      from{
        opacity: 0;
      }
      to{
        opacity: 1;
      }
    }
    @keyframes fadeIn {
      from{
        opacity: 0;
      }
      to{
        opacity: 1;
      }
    }
    div{
       display: -webkit-flex;
    display: flex;
    height: 1.4rem;
    width: 2.2rem;
    margin-left: .1rem;
    padding: .1rem 0;
    box-sizing: border-box;
flex-direction: column;
justify-content: flex-start;
h4{
  height: .4rem;
  line-height: .4rem;
      font:bold .24rem 'HEITI';
      text-align: left;
      color: #999;

    }
    span{
      margin-top: .1rem;
      text-align: left;
      color: #666;
      font-size: .18rem;
      text-indent: .36rem;
    }
    }

  }
}
.tip{
  width: 100%;
  height: .4rem;
  margin-top: .1rem;
  font-size: .18rem;
  color: #999;
  line-height: .4rem;
  text-align: center;
}
</style>
