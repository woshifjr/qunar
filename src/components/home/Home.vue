<template>
 <div class="home">
     <home-header></home-header>
    <div class="container" ref="wrapper">
        <div>
            <home-swiper :swiperList="swiperList"></home-swiper>
            <home-nav :imglist="iconList"></home-nav>
            <home-favorite :favList="recommendList"></home-favorite>
            <home-weekend :weekendList="weekendList"></home-weekend>
        </div>
    </div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
import {getHome} from '@/api'
import HomeHeader from './base/Header'
import HomeSwiper from './base/Swiper'
import HomeNav from './base/Nav'
import HomeFavorite from './base/Favorite'
import HomeWeekend from './base/Weekend'
export default {
    name:'Home',
    data () {
        return {
            iconList:[],
            recommendList:[],
            swiperList:[],
            weekendList:[]
        }
    },
    components: {
        HomeHeader,
        HomeSwiper,
        HomeNav,
        HomeFavorite,
        HomeWeekend
    },
    /* created() {
        this.getData()
    }, */
    methods: {
        async getData(){
            let {iconList,recommendList,swiperList,weekendList}=await getHome()
            this.iconList=iconList
            this.recommendList=recommendList
            this.swiperList=swiperList
            this.weekendList=weekendList
        }
    },
    mounted() {
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true
        })
    },
    //当组件被缓存时被触发(被展示)
    activated() {
        this.getData()
    },
    //当组件失去活力的时候触发(未被展示)
    deactivated() {
        
    },
}
</script>

<style lang="stylus" scoped>
    .container
        position:fixed
        overflow :hidden
        right:0
        left:0
        bottom:0
        top:.88rem
</style>
