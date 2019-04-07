<template>
  <header>

    <!--<img src="https://images.vexels.com/media/users/3/145619/isolated/preview/7babede86f68959d43e0e459f640ab45-cow-vector-by-vexels.png"-->
         <!--class="logo"-->
         <!--alt="logo">-->

    <div class="brand">
      <h1>moo-v</h1>
      <p>Lorem ipsum...
        Maecenas fringilla nulla eros, nec efficitur nibh elementum nec.
      </p>
    </div>
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

    .logo{
      width: 60px;
      position: absolute;
      right: 250px;
      bottom: 10px;
    }


    h1 {
      color: #9a141a;
      font-size: 2.3em;
    }
    p {
      font-size: .92em;
      color: #696c70;
    }
  }


</style>
