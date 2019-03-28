<template>

  <input type="text" :value="value"
         @input="$emit('input', $event.target.value)">

</template>

<script>
  export default {
    name: "CustomInput",
    props: ['value']
  }
</script>

<style scoped lang="scss">
  input{
    background-color: #25282d;
    border: none;
    padding: 8px;
    color: white;
    border-radius: 2px;
    transition: .25s;
    font-size: 1em;

    &:focus, &:active{
      outline: none;
      background-color: #1e232d;
    }
  }

</style>
