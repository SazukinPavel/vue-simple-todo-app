import { ActionContext, GetterTree, MutationTree } from "vuex";
import TodosState from "@/store/states/TodosState";
import Todo from "@/types/Todo";
import axios from "axios";
import todosMutations from "@/store/mutations/todosMutations";
import todosActions from "@/store/actions/todosActions";
import todosGetters from "@/store/getters/todosGetters";

export default {
  state: (): TodosState => ({ todos: [], isLoading: false, page: 1 }),
  getters: todosGetters,
  mutations: todosMutations,
  actions: todosActions,
};
