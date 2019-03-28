<template>
  <footer>
    <a href="https://www.themoviedb.org" class="themoviedb" target="_blank">
      <img src="~/static/themoviedb.png" alt="THE MOVIE DB logo">
    </a>

    <a href="https://github.com/SafeAndS0und/moo-v" class="" target="_blank">
      <v-icon name="brands/github" class="github" scale="3"/>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "Foot"
  }
</script>

<style scoped lang="scss">

  footer {
    margin-top: 100px;
    width: 100%;
    background-color: #0e0e0f;
    height: 120px;
    position: relative;

    a{
      color: white;
    }

    .themoviedb {
      position: absolute;
      bottom: 20px;
      right: 35px;

      img {
        width: 120px;
      }
    }

    .github{
      color: #454545;
      position: absolute;
      bottom: 27px;
      right: 195px;

      &:hover{
        color: white;
      }
    }

  }

</style>
