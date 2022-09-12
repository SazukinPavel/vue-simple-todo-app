import Todo from "@/types/Todo";

export default interface TodosState {
  todos?: Todo[];
  isLoading: boolean;
  page: number;
}
