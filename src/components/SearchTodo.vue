<template>
  <div class="search">
    <label>Search:</label>
    <input type="text" v-model="searchTitle" />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

@Options({
  data() {
    return {
      searchTitle: "",
    };
  },
  computed: {
    ...mapGetters(["todos"]),
  },
  methods: {
    ...mapActions(["fetchTodosFilteredTByTitle", "fetchTodos"]),
  },
  watch: {
    searchTitle() {
      if (!this.searchTitle) {
        this.fetchTodos();
      } else {
        this.fetchTodosFilteredTByTitle(this.searchTitle);
      }
    },
  },
})
export default class SearchTodo extends Vue {}
</script>

<style scoped lang="scss">
.search {
  display: flex;
  justify-content: space-around;
  margin: 2rem;
}
</style>
