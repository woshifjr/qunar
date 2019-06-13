<template>
    <div class="alphabet">
        <ul>
            <li @click="handleClick(key)" v-for="(city,key) in cities" :key="city.id">{{key}}</li>
        </ul>
    </div>
</template>

<script>
 export default {
     name:'CityAlphabet',
     props:['cities'],
    data () {
        return {

        }
    },
    components: {

    },
    methods: {
        handleClick(letter){
           this.$store.commit('changeLetter',letter)
        }
    },
 }
</script>

<style lang="stylus" scoped>
    .alphabet
        position:fixed
        display:flex
        flex-direction:column
        justify-content:center
        right:0
        top:0 
        bottom:0
        width:.4rem 
        li 
            line-height:.5rem 
            text-algin:center 
            color:#00bcd4
            font-weight:600
</style>
