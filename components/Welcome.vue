<template>
  <div>
    <h1>Welcome to moo-v</h1>

    <p>
      Maecenas fringilla nulla eros, nec efficitur nibh elementum nec. Aliquam metus sem, iaculis at tellus gravida, feugiat interdum enim.
      Proin a ante odio. Ut accumsan malesuada interdum. Pellentesque nec turpis faucibus, pretium tellus eget, rutrum magna.
      Aenean eget est nec dui pulvinar faucibus eget et nisi.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut mauris nec dui varius sodales. Nam dictum et justo et vehicula.
    </p>

    <button @click="exitWelcomeScreen">Alright, alright... show me the moo-v's</button>

  </div>
</template>

<script>
  export default {
    name: "Welcome",
    methods: {
      exitWelcomeScreen(){
        this.$store.commit('turnOffWelcoming')
      }
    }
  }
</script>

<style scoped lang="scss">

  div{

    h1{
      text-align: center;
      margin-bottom: 25px;
      font-size: 2.5em;
    }

    p{
      margin-bottom: 55px;
      font-size: .95em;
      color: #959296;
    }

    button{
      display: block;
      margin: auto;
      width: 35%;
      font-size: 1em;
      padding: 12px;

      border: none;
      background-color: #1e1e23;
      color: white;
      cursor: pointer;

    }
  }

</style>
