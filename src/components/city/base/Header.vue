<template>
    <div class="header">
        <router-link to="/">
            <i class="iconfont icon-fanhui header-back"></i>
        </router-link>
        <h2>城市选择</h2>
    </div>
</template>

<script>
 export default {
     name:'CityHeader',
    data () {
        return {

        }
    },
    components: {

    }
 }
</script>

<style lang="stylus" scoped>
    .header
        position :relative
        background-color :#00bcd4
        line-height:.86rem
        color:#fff
        text-align:center
        .header-back
            position:absolute
            left:0
            top:0
            width: 0.8rem
            color:#fff
            h2
                text-align:center
                font-size:.32rem
 
</style>
