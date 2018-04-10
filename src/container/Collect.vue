<template>
    <div>
      <m-header title="收藏"></m-header>
          <scroller :on-refresh="refresh" ref="scroll">
      <ul class="collect-list">
        <li v-for="(col,index) in collect" :key="index">
          <div class="book-cover">
          <img :src="col.bookCover" alt="vue-book封面图片" width="138" height="200">
          </div>
          <div class="book-descri">
           <h4>{{col.bookName}}</h4>
            <a @click="cancel(col.id)">取消收藏</a>
          </div>

        </li>
      </ul>
         <div class="tip">{{noData}}</div>
    </scroller>
    </div>
</template>
<script>
   import {mapState,mapMutations} from 'vuex';
    import MHeader from 'components/MHeader';
    import * as Types from 'store/mutation-types'
    export default {
        data(){
            return {
                    noData:'',

            }
        },

        computed: {
          ...mapState(['collect'])
        },
        components: {MHeader},
        methods: {
          ...mapMutations([Types.REMOVE_COLLECT]),
            cancel(id){
              this[Types.REMOVE_COLLECT](id);
            },
                refresh(){
      this.$refs.scroll.finishPullToRefresh();
      this.noData=this.$refs.scroll.noDataText;
    },
        }
    }
</script>
<style scoped lang="less">
.collect-list{
  width: 100%;
   margin-top: .5rem;
     padding:0 .1rem;
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
    .book-cover{
      width: 40%;
    img{
         width:1.1rem;
      height: 1.4rem;
      margin-left: .2rem;
    }

    }
    .book-descri{
      width: 60%;
      height: 100%;
      padding:.1rem 0 .1rem .2rem;
      box-sizing: border-box;
      h4{
        height: .4rem;
        font-size: 26px;
        line-height: .4rem;
        color: #666;
      }
      a{
        display: block;
        width: 1rem;
        height: .4rem;
        background: rgb(255, 101, 191);
        text-align: center;
        line-height: .4rem;
        font-size: 18px;
        margin-top: .3rem;
        border-radius: 3px;
        color: #fff;
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
