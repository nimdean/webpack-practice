<template>
    <div id="app">
        <router-view class="mainView" />
        <nav class="mainMenu">
            <router-link tag='div' class="menuText" to="/home">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouye"></use>
                </svg><br/>
                <span>主页</span>
            </router-link>
            <router-link tag='div' class="menuText" to="/assortment">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wodedingdan"></use>
                </svg><br/>
                <span>分类</span>
            </router-link>
            <router-link tag='div' class="menuText" to="/discover">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-lianjie"></use>
                </svg><br/>
                <span>发现</span>
            </router-link>
            <router-link tag='div' class="menuText" to="/cart">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gouwuche"></use>
                </svg><br/>
                <span>购物车</span>
            </router-link>
            <router-link tag='div' class="menuText" to="/mine">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wodejuhuasuan"></use>
                </svg><br/>
                <span>我的</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='less' scoped>
#app {
  width: 100vw;
  height: 100vh;
  text-align: center;
  color:#666;
  .mainView {
    width: 100vw;
    height: calc(92vh - 1px);
  }
  .mainMenu {
    width: 100vw;
    height: 8vh;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    border-top:1px solid #cfcfcf;
    .activeMenu{
        svg{
            color:#f81515;
        }
    }
    .menuText {
      width: 20vw;
      display: inline-block;
      color:#c69f0a;
      overflow: hidden;
      padding-top:1vh;
      svg{
          font-size:4vh;
      }
      span{
          font-size:2vh;
      }
    }
  }
}
</style>


