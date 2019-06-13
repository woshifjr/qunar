<template>
    <div class="city">
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :hotCities="hotCities" :cities="cities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
    import {getCites} from '@/api'
    import CityHeader from './base/Header'
    import CitySearch from './base/Search'
    import CityList from './base/List'
    import CityAlphabet from './base/Alphabet'
 export default {
     name:'City',
    data () {
        return {
            cities:[],
            hotCities:[]
        }
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    activated() {
        this.getData()
    },
    methods: {
        async getData(){
            let {cities,hotCities}=await getCites()
            this.cities=cities
            this.hotCities=hotCities
        }
    },
 }
</script>

<style>

 
</style>
