<template>
    <div>
<m-header title="修改页"></m-header>
<div class="add">
<div class="group">
  <label for="book-name">书名:</label>
  <input type="text" id="book-name" placeholder="请输入书名" v-model="book.bookName">
</div>
<div class="group">
  <label for="book-cover">书的地址:</label>
  <input type="text" id="book-cover" placeholder="请输入封面网址" v-model="book.bookCover">
</div>
<div class="group">
  <label for="book-content">书的简介:</label>
  <input type="text" id="book-content" placeholder="请输入书的简介" v-model="book.content">
</div>
</div>
<div class="btn">
<button  @click="update">修改图书</button>
<button @click="backTo">返回</button>
</div>
    </div>
</template>
<script>
import MHeader from "components/MHeader";
import {getOneBook,updateBook} from "api";
export default {
  data() {
    return {
      book:{
        bookName:'',
        bookCover:'',
        content:''
      }
    };
  },
  created() {
  this.getBook();
  },
  computed: {},
  components: { MHeader },
  methods: {
      getBook(){
  getOneBook(this.$route.params.id).then(res=>{
this.book=res.data;
    })
    },

    update(){
updateBook(this.$route.params.id,this.book).then(()=>{
  this.$router.push('/list');
})
    },
    backTo(){
this.$router.go(-1);
    }

  },
     activated(){
      this.getBook();
    }
};
</script>
<style scoped lang="less">
.add {
  margin-top: 0.5rem;
  .group {
    display: -webkit-flex;
    display: flex;
    width: 100%;
    height: 0.8rem;
    padding: 0 0.2rem;
    margin-bottom: 0.2rem;
    flex-direction: column;
    box-sizing: border-box;
    font-size: 0.18rem;
    label {
      font-weight: bold;
      font-size: 0.2rem;
      color: #999;
    }
    input {
      height: 0.4rem;
      padding: 0.05rem;
      margin-top: 0.1rem;
      border: 1px solid #ddd;
      &:focus {
        -webkit-box-shadow:1px 1px 5px rgba(0,0,0,.3),-1px -1px 5px rgba(0,0,0,.3);
        box-shadow:1px 1px 5px rgba(0,0,0,.3),-1px -1px 5px rgba(0,0,0,.3);
     border-color: #fff;
      }
    }

  }

}
.btn{
display: -webkit-flex;
display: flex;
height: .8rem;
align-items: center;
justify-content: space-around;
    button{
      width: 1rem;
      height: .4rem;
      font-size: .18rem;
      color: #555;
    }
  }
</style>
