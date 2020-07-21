<template>
    <div>
            <lessonItem
                v-for='lesson in lessons'
                :lesson="lesson"
            />
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import lessonItem from './lessonItem.vue'
export default {
    components:{
        lessonItem
    },
    computed:{
        ...mapState(['lessons']),
    },
    methods:{
        ...mapActions(['fetechLessons']),
    },
    mounted(){
        this.fetechLessons();
    }
}
</script>

<style scoped>
.list{
    padding-top: 30px;
    text-align: center;
}
</style>