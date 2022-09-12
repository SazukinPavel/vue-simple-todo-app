import { MutationTree } from "vuex";
import TodosState from "@/store/states/TodosState";
import Todo from "@/types/Todo";

const todosMutations: MutationTree<TodosState> = {
  setTodos(state, todos: Todo[]) {
    state.todos = todos;
  },
  removeTodo(state, id: number) {
    if (state.todos) {
      state.todos = state.todos.filter((t) => t.id !== id);
    }
  },
  toggleLoading(state) {
    state.isLoading = !state.isLoading;
  },
  updateIsCompleted(state, id: number) {
    if (state.todos) {
      const index = state.todos.findIndex((t) => t.id === id);
      if (index !== -1) {
        state.todos[index].completed = !state.todos[index].completed;
      }
    }
  },
  addTodo(state, todo: Todo) {
    if (state.todos) {
      state.todos.push(todo);
    }
  },
  setPage(state, page: number) {
    state.page = page;
  },
};

export default todosMutations;
