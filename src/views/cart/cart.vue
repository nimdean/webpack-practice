<template>
    <div class="cartPage">
        <div class="cartTitle">
            <span>购物车</span>
        </div>
        <div class="cartContent">
            <no-goods v-if="noGoods" @goShopping='goShopping'></no-goods>
            <hot-sale-recommmendation></hot-sale-recommmendation>
        </div>
    </div>
</template>

<script>
import noGoods from './noGoods.vue'
import hotSaleRecommmendation from './hotSaleRecommendation.vue'
export default {
    data(){
        return{
            noGoods:true, // 购物车无商品时显示提示
        }
    },
    components:{
        noGoods,
        hotSaleRecommmendation
    },
    methods:{
        goShopping(){
            console.log('去逛逛！');
        }
    }
}
</script>

<style lang="less" scoped>
.cartPage{
    height:100%;
    .cartTitle{
        height:6vh;
        text-align:left;
        border-bottom:2px solid rgba(0,0,0,0.13);
        span{
            line-height:6vh;
            margin-left:5vw;
        }
    }
    .cartContent{
        height:calc(100% - 2px - 6vh);
        overflow-y: auto;
        
    }
} 
</style>

