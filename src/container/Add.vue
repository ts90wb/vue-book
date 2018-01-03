<template>
    <div>
<m-header title="添加页"></m-header>
<div class="add">
<div class="group">
  <label for="book-name">书名:</label>
  <input type="text" id="book-name" placeholder="请输入书名">
</div>
<div class="group">
  <label for="book-cover">书的地址:</label>
  <input type="text" id="book-cover" placeholder="请输入封面网址">
</div>
<div class="group">
  <label for="book-content">书的简介:</label>
  <input type="text" id="book-content" placeholder="请输入书的简介">
</div>
</div>
<div class="btn">
<button>添加图书</button>
</div>
    </div>
</template>
<script>
import MHeader from "components/MHeader";
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  components: { MHeader },
  methods: {}
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
