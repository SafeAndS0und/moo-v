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
    text-align: center;
    background-color: #0c0c0f;
    -webkit-box-shadow: 7px 7px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 7px 7px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 7px 7px 5px 0px rgba(0,0,0,0.75);
    position: relative;

    .logo{
      width: 60px;
      position: absolute;
      right: 250px;
      bottom: 10px;
    }


    h1 {
      font-size: 2.5em;
    }
    p {
      font-size: .9em;
      color: #908a91;
    }
  }


</style>
