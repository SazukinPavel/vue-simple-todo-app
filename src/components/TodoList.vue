<template>
  <div>
    <TodoCard
      @removeTodo="removeTodo"
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
    />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import TodoCard from "@/components/TodoCard";

@Options({
  components: { TodoCard },
  props: {
    todos: Array,
  },
  methods: {
    removeTodo(id) {
      this.$emit("removeTodo", id);
    },
  },
})
export default class TodoList extends Vue {}
</script>

<style></style>
