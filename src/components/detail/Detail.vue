<template>
    <div class="detail">
        <detail-banner 
            :sightName="sightName" 
            :bannerImg="bannerImg" 
            :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-card :cardInfo="cardInfo"></detail-card>
        <detail-recommend :recommendInfo="recommendInfo">
            <h3 class="border-bottom">去哪推荐</h3>
        </detail-recommend>
        <detail-calendar :calendarInfo="calendarInfo"></detail-calendar>
        <detail-comment :commentInfo="commentInfo"></detail-comment>
    </div>
</template>

<script>
import {getDetail} from '@/api'
    import DetailBanner from './base/Banner'
    import DetailHeader from './base/Header'
    import DetailCard from './base/Card'
    import DetailRecommend from './base/Recommend'
    import DetailCalendar from './base/Calendar'
    import DetailComment from './base/Comment'
 export default {
     name:'Detail',
    data () {
        return {
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            cardInfo:{},
            recommendInfo:[],
            calendarInfo:[],
            commentInfo:[]
        }
    },
    components: {
        DetailBanner,
        DetailHeader,
        DetailCard,
        DetailRecommend,
        DetailCalendar,
        DetailComment
    },
    activated() {
        this.getData()
    },
    methods: {
        async getData(){
           let {sightName,bannerImg,gallaryImgs,cardInfo,recommendInfo,calendarInfo,commentInfo}= await getDetail(this.$route.params.id)
            this.sightName=sightName
            this.bannerImg=bannerImg
            this.gallaryImgs=gallaryImgs
            this.cardInfo=cardInfo
            this.recommendInfo=recommendInfo
            this.calendarInfo=calendarInfo
            this.commentInfo=commentInfo
            console.log(commentInfo)
        }
    },
 }
</script>

<style lang="stylus" scoped>
    .detail
        height:2000px
 
</style>
