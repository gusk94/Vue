<template>
  <div>
    <input type="text" @input="onInput"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function(event){
      // inputChange 이벤트 발생을 알린다 -> input 의 value 를 넘겨준다 
      this.$emit('inputChange', event.target.value)
    },
  },
}
</script>

<style scoped>
  input {
    width: 75%;
  }

  div {
    text-align: center;
    margin: 20px;
  }
</style>