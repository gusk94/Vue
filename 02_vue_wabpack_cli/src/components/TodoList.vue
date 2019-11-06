<template>
  <div class="todo-list">
    <h2>{{ category }}</h2>
    <input type="text" v-model="newTodo" />
    <button v-on:click="addTodo">+</button>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">
        <span>{{ todo.content }}</span>
        <button v-on:click="removeTodo(todo.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      todos: [],
      newTodo: ""
    };
  },
  methods: {
    addTodo: function() {
      if (this.newTodo) {
        this.todos.push({
          id: new Date().getTime(),
          content: this.newTodo
        });
      }
      this.newTodo = "";
    },
    removeTodo: function(id) {
      let idx = this.todos.map(todo => todo.id).indexOf(id);
      this.todos.splice(idx, 1);
    }
  }
};
</script>

<style>
  .todo-list {
    display: inline-block;
    width: 33%;
  }
</style>