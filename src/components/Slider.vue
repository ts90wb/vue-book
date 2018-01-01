<template>
  <div class="swiper-container" ref="slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in data" :key="item.id">
        <img :src="item" alt="vue-book" width="375" height="117">
      </div>
    </div>
    <div class="swiper-pagination" ref="pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  props: ["data"], //会挂载在当前组件的实例上
  data() {
    return {};
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      pagination: { el: this.$refs.pagination }
    });
  },
  computed: {},
  components: {},
  methods: {}
};
</script>
<style scoped lang="less">
.swiper-container{
  height: 2rem;
  img {
    width: 100%;
    height: 2rem;
  }
.swiper-pagination{
  bottom: 0;
}
}

</style>
