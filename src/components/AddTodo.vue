<template>
  <form class="form" @submit.prevent="addTodoClick">
    <input v-model="title" />
    <button>Add</button>
  </form>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";

@Options({
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    addTodoClick() {
      if (this.title) {
        const todo = {
          title: this.title,
          completed: false,
          id: Date.now(),
        };
        this.addTodo(todo);
        this.title = "";
      }
    },
  },
})
export default class AddTodo extends Vue {}
</script>

<style lang="scss" scoped>
.form {
  input {
    width: 70%;
    margin-left: 1rem;
  }
  button {
    margin-left: 0.5rem;
    padding: 0.3rem;
    background-color: gray;
    color: white;
    border: none;
  }
}
</style>
