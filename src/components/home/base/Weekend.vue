<template>
    <div class="weekend">
       <h3 class="title">周末去哪</h3>
        <ul>
            <router-link :to="{name:'weekLink',params:{id:item.id}}" tag="li" class="item border-bottom" v-for="(item,index) in weekendList" :key="index">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <h4>{{item.title}}</h4>
                    <p class="item-price">{{item.desc}}</p>
                </div>
            </router-link >
        </ul>
    </div>
</template>

<script>
 export default {
     name:'HomeWeekend',
     props:['weekendList'],
    data () {
        return {

        }
    },
    components: {

    }
 }
</script>

<style lang="stylus" scoped>
    .title
        margin-top:.2rem
        padding:.25rem 0
        line-height:.4rem
        background-color:#eee
        text-indent:.2rem
        font-size:.32rem
    .item
        .item-img
            width:100%
        .item-info
            text-indent:.2rem
            h4
                line-height:.6rem
                font-size:.3rem
            .item-price
                overflow: hidden
                padding-right: 1.4rem
                color: #616161
                font-size: .24rem
                line-height: .42rem
                white-space: nowrap
                text-overflow: ellipsis
                line-height:.6rem


</style>
