<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class App extends Vue {}
</script>

<style>
* {
  font-size: 32px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  margin: 1rem auto;
  width: 80vh;
  min-height: 80vh;
  border-right: gray 0.1rem solid;
  border-left: gray 0.1rem solid;
}
</style>
