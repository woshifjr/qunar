<template>
    <div class="comment">
        <h1 class="border-bottom">用户评论</h1>
        <div class="comment-container border-bottom" v-for="(comment,index) in commentInfo" :key="index">
            <p class="comment-desc">{{comment.desc}}</p>
            <div class="comment-item" @click="handleClick(comment)">
                <img 
                    class="comment-img" 
                    :src="item" alt="" 
                    v-for="(item,i) in comment.imgs" 
                    :key="i"
                    v-if="i<6">
                <span class="img-amount" v-if="comment.imgs.length>6">共{{comment.imgs.length}}张</span>
            </div>
            <fade-animation>
                 <common-gallary @close="handleClose(comment)" v-if="comment.isShow" :gallaryImgs="comment.imgs"></common-gallary>
            </fade-animation>
        </div>
    </div>
</template>

<script>
    import CommonGallary from '@/common/Gallary'
    import FadeAnimation from '@/common/FadeAnimation'
 export default {
     name:'DetailComment',
     props:['commentInfo'],
    data () {
        return {

        }
    },
    components: {
        CommonGallary,
        FadeAnimation 
    },
    methods: {
        handleClick(comment){
            comment.isShow=true
        },
        handleClose(comment){
            comment.isShow=false
        }
    },
 }
</script>

<style lang="stylus" scoped>
  .border-bottom::before
        border-color:#ccc
  h3
    line-height:.8rem
    padding-left:.3rem
    font-size:.3rem
  .comment-container
    padding:0 .2rem .4rem
    line-height: .42rem;
    font-size: .26rem;
    color: #616161
    .comment-desc
      overflow:auto
      height:2rem
      padding:.2rem 0
    .comment-item
      position:relative
      overflow: hidden
      .comment-img
        float:left
        width:32%
        margin-right:1.2%
        margin-bottom:1.2%
    .img-amount
      position:absolute
      right:.1rem
      bottom:.3rem
      padding:0 .05rem
      font-size:.28rem
      color:#fff
      border-radius:.2rem 0 0 .2rem
      background-color:rgba(0,0,0,.5)
 
</style>
