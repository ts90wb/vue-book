<!-- by your name -->
<template>
    <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
</div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},
  computed: {},
  methods: {}
}

</script>
<style  scoped>
.loading{
  display: -webkit-flex;
  display: flex;
  justify-content: space-around;
            width: 2rem;
            height: .15rem;
            margin: 0 auto;
            margin-top:1rem;
        }
        .loading span{
            width: .15rem;
            height: 100%;
            border-radius: 50%;
            background: lightgreen;
            -webkit-animation: load 1.04s ease infinite;
        }
        .loading span:last-child{
            margin-right:0;
        }
        @-webkit-keyframes load{
            0%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
        .loading span:nth-child(1){
            -webkit-animation-delay:0.13s;
        }
        .loading span:nth-child(2){
            -webkit-animation-delay:0.26s;
        }
        .loading span:nth-child(3){
            -webkit-animation-delay:0.39s;
        }
        .loading span:nth-child(4){
            -webkit-animation-delay:0.52s;
        }
        .loading span:nth-child(5){
            -webkit-animation-delay:0.65s;
        }
</style>
