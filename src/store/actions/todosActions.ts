import { ActionContext } from "vuex";
import TodosState from "@/store/states/TodosState";
import axios from "axios";
import Todo from "@/types/Todo";

const todosActions = {
  async fetchTodos(ctx: ActionContext<TodosState, any>) {
    const response = await axios.get<Todo[]>(
      `https://jsonplaceholder.typicode.com/todos?_start=${
        ctx.state.page * 10
      }&_limit=10`
    );
    ctx.commit("setTodos", response.data);
  },
  async fetchTodosFilteredTByTitle(
    ctx: ActionContext<TodosState, any>,
    title: string
  ) {
    const response = await axios.get<Todo[]>(
      `https://jsonplaceholder.typicode.com/todos?title=${title}`
    );
    ctx.commit("setTodos", response.data);
  },
  async deleteTodo(ctx: ActionContext<TodosState, any>, id: number) {
    const response = await axios.delete(
      "https://jsonplaceholder.typicode.com/todos/" + id
    );
    ctx.commit("removeTodo", id);
  },
  async updateIsCompleted(ctx: ActionContext<TodosState, any>, todo: Todo) {
    ctx.commit("updateIsCompleted", todo.id);
  },
  async addTodo(ctx: ActionContext<TodosState, any>, todo: Todo) {
    ctx.commit("addTodo", todo);
  },
};

export default todosActions;
