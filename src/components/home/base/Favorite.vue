<template>
    <div class="favorite">
        <div class="title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            <span>猜你喜欢</span>
        </div>
        <ul>
            <router-link tag="li" :to="{name:'detailLink',params:{id:item.id}}" class="item border-bottom" v-for="(item,index) in favList" :key="index">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <h4>{{item.title}}</h4>
                    <div class="item-fav-info clearfix">
                        <p class="item-fav-text">
                            <i class="iconfont icon-star" v-for="(star,index) in 5" :key="index"></i>
                            <span class="item-fav-star" :style="item.score|star"> 
                                <i class="iconfont icon-star" v-for="(star,index) in 5" :key="index"></i>
                            </span>
                        </p>
                        <p class="item-text-right">
                            <span>{{item.comment}}条评论</span>
                        </p>
                    </div>
                    <p class="item-price">{{item.price|price}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
 export default {
    name:'HomeFavorite',
    props:['favList'],
    data () {
        return {
            styleObj:{

            }
        }
    },
    components: {

    },
    filters:{
        star(score){
            return{
                width:score*100/5+"%"
            }
        },
        price(value){
            return '￥'+value+'元'
        }
    }
 }
</script>

<style lang="stylus" scoped>
    .border-bottom:before
        border-color:#777
    .favorite
        padding:0 .26rem
        .title
            padding:.25rem 0
            line-height:.4rem
            img
                width: .3rem
                height: .3rem
                margin-left: .2rem
                vertical-align: top
        .item
            display:flex 
            height :2.2rem
            padding: .2rem
            .item-img
                width: 2rem
                height 2rem
            .item-info
                flex:1
                padding :0.1rem
                margin-left:.1rem
                min-width:0rem
                h4
                    line-height:.6rem
                    font-size:.3rem
                .item-price

                    color:#ff8300
                    font-size: .4rem
                    line-height:.6rem
                .item-fav-info
                    line-height:.6rem
                    .item-fav-text
                        position:relative
                        display:inline-block
                        float:left
                        color:#ccc
                        margin-right:.5rem
                        .item-fav-star
                            overflow:hidden
                            position:absolute
                            left:0
                            top:0
                            color:#ffb436
                    .item-text-right
                        float:left
</style>
