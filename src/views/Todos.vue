<template>
  <search-todo />
  <add-todo />
  <div v-if="isLoading" class="loading">
    <Loader />
  </div>
  <div v-else-if="todos.length">
    <todo-list :todos="todos" />
    <pagination-menu />
  </div>
  <div v-else class="center">
    <h3>No one todo wright here</h3>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Loader from "@/components/ui/Loader";
import { mapGetters, mapActions } from "vuex";
import PaginationMenu from "@/components/PaginationMenu";
import SearchTodo from "@/components/SearchTodo";

@Options({
  components: { SearchTodo, PaginationMenu, AddTodo, TodoList, Loader },
  computed: {
    ...mapGetters(["todos", "isLoading", "page"]),
  },
  mounted(prevState) {
    if (this.page !== prevState) {
      this.fetchTodos();
    }
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
  watch: {
    page() {
      this.fetchTodos();
    },
  },
})
export default class Todos extends Vue {}
</script>

<style scoped lang="scss">
.center {
  display: flex;
  h3 {
    margin: auto;
    text-align: center;
  }
}

.loading {
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>
