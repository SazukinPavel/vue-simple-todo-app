<template>
  <p>{{count}}</p>
  <button  @click="count++">Click</button>
</template>

<script>
import {Options, Vue} from "vue-class-component";

  @Options({
    data:function (){
      return{
        count:0
      }
    },
    props:{
      initialCount:Number
    },
    mounted() {
      this.count=this.initialCount ?? 0
    }
  })
  export default class CounterComponent extends Vue{}
</script>

<style>

</style>