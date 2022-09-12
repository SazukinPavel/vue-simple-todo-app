import Vuex from "vuex";
import todosModule from "@/store/modules/todosModule";

export default new Vuex.Store({
  modules: { todos: todosModule },
});
