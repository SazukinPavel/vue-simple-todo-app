<template>
  <div class="home">
    <h1>My vue app</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
      asperiores autem, commodi culpa debitis doloribus eius explicabo id illo
      illum maiores molestiae provident, quis quisquam quos sequi ut voluptate!
      Ipsam?
    </p>
    <router-link to="/todos">Go to todos</router-link>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  height: 40vh;
  margin: auto;
}
</style>
