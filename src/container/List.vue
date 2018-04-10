<!-- by your name -->
<template>
  <div>

    <m-header title="列表页" ref="close"></m-header>
    <scroller :on-refresh="refresh" ref="scroll">
      <ul class="list">
      <li v-for="(item,index) in books" :key="item.id">
        <img v-lazy="item.bookCover" alt="vue-book封面图片" width="138" height="200">
        <div class="descri">
          <div class="book-title">
          <h4>{{item.bookName}}</h4>
<i class="iconfont" @click="collectBook(item)" :class="flagCollect[item.id]?'icon-collect-active':'icon-collect'"></i>
          </div>
          <span>{{item.content.length<=20?item.content:item.content.slice(0,20)+"..."}}</span>
          <div class="btn">
          <button @click="remove(item.id)">删除</button>
          <router-link tag="button" :to="{path:'/update/'+item.id}">修改</router-link>
          </div>
        </div>
      </li>
    </ul>
    <div class="tip">{{noData}}</div>
    </scroller>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import * as Types from 'store/mutation-types'
import {getBook,removeBook} from 'api';
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
this.getList();
},

  components: {MHeader},
  computed: {
    ...mapState(['flagCollect']),

  },
  methods: {
    ...mapMutations([Types.ADD_COLLECT,Types.REMOVE_COLLECT]),
    refresh(){
      this.getList();
      this.$refs.scroll.finishPullToRefresh();
      this.noData=this.$refs.scroll.noDataText;
    },
    getList(){
      getBook().then(res=>{
 this.books=res.data.reverse();
}).catch(err=>{
console.log(err);
})
    },
    remove(id){
      removeBook(id).then(
        res=>{
this.books=this.books.filter(item=>item.id!=id);
        }
      ).catch(err=>{
console.log(err);
    })

    },
    collectBook(book){
      const _id=book.id;
const flag = this.$store.state.collect.some(item => item.id == _id);
      if(flag){
       this[Types.REMOVE_COLLECT](_id);
      }else{
      this[Types.ADD_COLLECT](book);
      this.$router.push('/collect');

      }
      this.getList();
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
    .descri{
    display: flex;
    height: 1.4rem;
    width: 2.2rem;
    margin-left: .1rem;
    box-sizing: border-box;
flex-direction: column;
justify-content: flex-start;
.book-title{
  display: flex;
  width: 100%;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
h4{
  height: .4rem;
  line-height: .4rem;
      font:bold .24rem 'HEITI';
      text-align: left;
      color: #999;

    }
    i{
      font-size: 26px;
    }
}
    span{
      margin-top: .1rem;
      text-align: left;
      color: #666;
      font-size: .18rem;
      text-indent: .36rem;
    }
    .btn{
        display: -webkit-flex;
      display: flex;
      height: .4rem;
      width: 100%;
      margin-left: 0;
      margin-top: .1rem;
      flex-direction:row;
      justify-content: space-around;
      button{
        width: 30%;
        font-weight: bold;
      color: #666;
      border:1px solid #eee;
      border-radius:.05rem;
      outline: none;
	background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#e1e1e1), to(#ddd));
	background-image: -webkit-linear-gradient(#ededed, #ddd);
  background-image: -o-linear-gradient(#ededed, #ddd);
	background-image: -moz-linear-gradient(#ededed, #ddd);
	text-shadow: 1px 1px 1px #fff;
	background-color: #e1e1e1;
&:hover {
	border: 1px solid #b0b0b0;
	background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ddd), to(#e1e1e1));
	background-image: -webkit-linear-gradient(#ddd, #ededed);
  background-image: -o-linear-gradient(#ddd, #ededed);
	background-image: -moz-linear-gradient(#ddd, #ededed);
	background-color: #ededed;
}
&:active {border: 1px solid #666;}

      }
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
