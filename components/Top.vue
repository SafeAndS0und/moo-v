<template>
  <header>

    <h1>moo-v</h1>
    <p>Lorem ipsum...
      Maecenas fringilla nulla eros, nec efficitur nibh elementum nec.
    </p>

  </header>
</template>

<script>
  export default {
    name: "Top"
  }
</script>

<style scoped lang="scss">

  header {
    position: relative;
    background-color: #0f0f12;
    box-shadow: 0 4px 4px 0 rgba(10, 10, 10, 0.75);

    h1 {
      color: #9f9f9f;
      font-size: 2em;
    }
    p {
      font-size: .9em;
      color: #3f4246;

    }
  }


</style>
