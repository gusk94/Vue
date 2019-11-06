<template>
  <!-- 한 개의 element만 최상위 컴포넌트에 존재 -->
  <div>
    <TodoList category="취업준비" />
    <TodoList category="SSAFY" />
    <TodoList category="기타" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
export default {
  components: {
    TodoList
  }
};
</script>

<style>
</style>