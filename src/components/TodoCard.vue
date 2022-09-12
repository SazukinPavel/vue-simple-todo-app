<template>
  <div class="todo-card">
    <input
      :checked="todo.completed"
      type="checkbox"
      @click="updateIsCompleted(this.todo)"
    />
    <p :class="{ done: todo.completed }">{{ todo.title }}</p>
    <button @click="this.deleteTodo(this.todo.id)">&times;</button>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Todo from "@/types/Todo";
import { mapActions } from "vuex";

@Options({
  props: {
    todo: {
      type: Todo,
      required: true,
    },
  },
  methods: {
    ...mapActions(["updateIsCompleted", "deleteTodo"]),
  },
})
export default class TodoCard extends Vue {}
</script>

<style scoped lang="scss">
.todo-card {
  border: gray 0.2rem solid;
  display: flex;
  justify-content: space-around;
  margin: 1rem;
  padding: 1rem;
  p {
    margin: auto;
    &.done {
      text-decoration: line-through;
    }
  }
  button {
    margin: auto 0 auto 0.5rem;
    border: none;
    background-color: gray;
    color: white;
    padding: 0.3rem;
  }
  input {
    font-size: 2rem;
    width: 1rem;
    height: 1rem;
    margin: auto 0;
  }
}
</style>
