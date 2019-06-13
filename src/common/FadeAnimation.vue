<template>
    <div class="fadeAnmation">
        <transition>
            <slot></slot>
        </transition>
    </div>
</template>

<script>
 export default {
     name:'FadeAnimation',
 data () {
 return {

 }
 },
 components: {

 }
 }
</script>

<style lang="stylus" scoped>
    .v-enter,.v-leave-to 
        opacity:0
    .v-enter-active,.v-leave-active
        transition:opacity 1s
</style>
