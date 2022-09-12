import { GetterTree } from "vuex";
import TodosState from "@/store/states/TodosState";

const todosGetters: GetterTree<TodosState, any> = {
  todos(state) {
    return state.todos;
  },
  isLoading(state) {
    return state.isLoading;
  },
  page(state) {
    return state.page;
  },
};

export default todosGetters;
