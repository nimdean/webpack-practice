<template>
    <div>
        <div class="title">
            <span>热销推荐</span>
        </div>
        <div class="content">
            <div class="cartGoodsCard" v-for="item in goodsList" :key='item.goodsId'>
                <span class="cartGoodsCardAdd" @click='addToCart'>+</span>
                <div class="goodsSection" @click='toGoodsDetails(item.goodsId)'>
                    <div class="goodsImg">
                        <img class="goodsImgView" :src='item.imgSrc' />
                        <img class="saleTypeImg" v-if="item.saleType || item.saleType == 0" :src='{"0":"./src/assets/img/0.png","1":"./src/assets/img/1.png","2":"./src/assets/img/2.png","3":"./src/assets/img/3.png","4":"./src/assets/img/4.png","5":"./src/assets/img/5.png","6":"./src/assets/img/6.png"}[item.saleType]' />
                    </div>
                    <p class="goodsName">{{item.goodsName}}</p>
                    <p class="priceList">
                        <span class="price">¥{{item.goodsPrice}}</span>
                        <del v-if="item.oldGoodsPrice">¥{{item.oldGoodsPrice}}</del>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [
        {
          imgSrc: "./src/assets/img/Huawei P20.jpg", // 图片地址
          goodsName: "HUAWEI P20 Pro", // 商品名称
          goodsPrice: "5488", // 商品价格
          oldGoodsPrice: "", // 商品之前价格
          saleType: 0, // 0爆款 1热卖 2首发 3特惠 4新品 5用券 6直降
          goodsId: "a000001" // 商品id
        },
        {
          imgSrc: "./src/assets/img/Honner 10.jpg",
          goodsName: "荣耀10 AI摄影手机",
          goodsPrice: "2599",
          oldGoodsPrice: "",
          saleType: "",
          goodsId: "a000002"
        },
        {
          imgSrc: "./src/assets/img/HUAWEI FreeBuds.jpg",
          goodsName: "HUAWEI FreeBuds 无线耳机",
          goodsPrice: "799",
          oldGoodsPrice: "818",
          saleType: 6,
          goodsId: "a000003"
        },
        {
          imgSrc: "./src/assets/img/HUAWEI MateBook.jpg",
          goodsName: "HUAWEI MateBook X Pro",
          goodsPrice: "7988",
          oldGoodsPrice: "",
          saleType: 4,
          goodsId: "a000004"
        },
        {
          imgSrc: "./src/assets/img/智能体脂称.jpg",
          goodsName: "华为智能体脂称",
          goodsPrice: "149",
          oldGoodsPrice: "169",
          saleType: 3,
          goodsId: "a000005"
        },
        {
          imgSrc: "./src/assets/img/荣耀手环3.jpg",
          goodsName: "荣耀手环3",
          goodsPrice: "149",
          oldGoodsPrice: "",
          saleType: 1,
          goodsId: "a000006"
        }
      ]
    };
  },
  methods: {
    addToCart() {
      console.log("添加到购物车");
    },
    toGoodsDetails(id){ // 跳转至商品详情页
        console.log(id);
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  border-bottom: 1px solid #cfcfcf;
  height: 4vh;
  text-align: left;
  span {
    margin-left: 4vw;
    line-height: 4vh;
    font-size: 1.8vh;
  }
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  .cartGoodsCard:nth-child(odd) {
    width: calc(50vw - 1px);
    height: calc(50vw - 1px);
    border-right: 1px solid #cfcfcf;
    border-bottom: 1px solid #cfcfcf;
    display: inline-block;
    background-color: #fff;
  }
  .cartGoodsCard:nth-child(even) {
    width: 50vw;
    height: calc(50vw - 1px);
    border-bottom: 1px solid #cfcfcf;
    display: inline-block;
    background: #fff;
  }
  .cartGoodsCard {
    position: relative;
    .cartGoodsCardAdd {
      border: 1px solid #999;
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 7px;
      line-height: 12px;
      color: #666;
      position: absolute;
      top: 1vh;
      right: 3vh;
    }
    .goodsSection {
      text-align: center;
      margin-top:3vh;
      .goodsName {
        font-size: 1.5vh;
        line-height: 3vh;
      }
      .goodsImg {
        width: 40vw;
        height: 14vh;
        margin-left: 5vw;
        position: relative;
        .goodsImgView {
          height: 100%;
        }
        .saleTypeImg {
          width: 8vw;
          position: absolute;
          left: 27vw;
          bottom: 1vw;
        }
      }
      .priceList {
        .price {
          color: red;
          font-size: 3.5vw;
        }
        del {
          margin-left: 2vw;
          font-size: 3vw;
          color: #999;
        }
      }
    }
  }
}
</style>
