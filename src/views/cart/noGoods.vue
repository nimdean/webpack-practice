<template>
    <div class="noGoods">
        <p>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gouwuche"></use>
            </svg>
            <span>购物车中还没有商品，赶紧选购吧！</span>
        </p>
        <button @click='goShopping'>去逛逛</button>
    </div>
</template>

<script>
export default {
  data() {
      return{}
  },
  methods:{
      goShopping(){
          this.$emit('goShopping');
      }
  }
};
</script>

<style lang="less" scoped>
.noGoods {
  background-color: rgba(0, 0, 0, 0.03);
  height: 8vh;
  padding:2vh;
  p{
      svg{
          font-size:3vh;
      }
      span{
          font-size:1.8vh;
          vertical-align: baseline;
      }
  }
  button {
    margin-top: 8px;
    color: red;
    border: 1px solid red;
    border-radius: 10px;
    outline: none;
    background:none;
  }
}
</style>

