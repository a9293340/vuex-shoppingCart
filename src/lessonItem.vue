<template>
    <div class="lesson">
        <img :src="lesson.thumbnails.w300" style="width:200px"  alt="">
        <span class="title">{{lesson.title}}</span>
        <span class="description">{{lesson.description}}</span>
        <div
            :class="btnClass"
            @click="addToCart(lesson)"
        >{{btnLabel}}</div>
    </div>
</template>

<script>
import { mapMutations ,mapGetters } from 'vuex';
export default {
    props:['lesson'],
    methods:{
        ...mapMutations(['addToCart']),
    },
    computed:{
        ...mapGetters(['isLessonInCart']),
        btnClass(){
            return {
                buy:true,
                bought: this.isLessonInCart(this.lesson),
            }
        },
        btnLabel(){
            return (
                this.isLessonInCart(this.lesson) ? '已加入購物車' : '加入購物車'
            )
        }
    }
}
</script>

<style scoped>
.lesson{
    display: inline-block;
    width: 200px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 2px 2px 15px #999;
    margin: 10px;
    vertical-align: top;
}
.cover{
    width: 100%;
    height: 120px;
    background: center center;
    background-size: cover;
}
span{
    display: block;
    padding: 6px;
}
.title{
    font-size: .9em;
    height: 30px;
    color: #333;
    text-align: left;
}

.description{
    font-size: .7em;
    float: right;
    line-height: 1.7em;
    color: #178fac;
}
.buy{
    clear: both;
    text-align: center;
    padding: 6px;
    font-size: .7em;
    background-color: #dee;
    cursor: pointer;
}
.buy:hover{
    background-color: #cee;
}
.buy.bought{
    background-color: #ccc;
}
</style>