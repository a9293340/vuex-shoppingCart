<template>
  <div>
    <Header/>
    <lessonsList/>
  </div>
</template>

<script>
import Header from './Header.vue';
import lessonsList from './lessonsList.vue';

export default {
  components:{
    lessonsList,
    Header,
  }
}
</script>

<style>
html, body{
  font-family: Microsoft JhengHei;
  padding: 0;
  margin: 0;
}
</style>
