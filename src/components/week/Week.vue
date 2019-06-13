<template>
    <div class="week">
         <week-header></week-header>
         <week-list :weekInfo="weekInfo"></week-list>
    </div>
</template>

<script>
import {getWeeks} from '@/api'
import WeekHeader from './base/Header'
import WeekList from './base/List'
 export default {
     name:'Week',
    data () {
        return {
            weekInfo:[]
        }
    },
    components: {
        WeekHeader,
        WeekList
    },
    activated() {
        this.getData()
    },
    methods: {
        async getData(){
            let {weekInfo}=await getWeeks(this.$route.params.id)
            this.weekInfo=weekInfo
        }
    },
 }
</script>

<style lang="stylus" scoped>
    
</style>
