<template>
  <footer>
    <a href="https://www.themoviedb.org" class="themoviedb" target="_blank">
      <img src="~/static/themoviedb.png" alt="THE MOVIE DB logo">
    </a>

    <a href="https://github.com/SafeAndS0und/moo-v" target="_blank">
      <v-icon name="brands/github" class="github" scale="2"/>
    </a>

    <a href="https://nuxtjs.org" class="nuxt" target="_blank">
      <img src="~/static/nuxt.png" alt="Nuxt.js Logo">
    </a>

    <p>By Nikodem Lorenz</p>
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
    height: 80px;
    position: relative;

    p{
      color: #323439;
      position: absolute;
      bottom: 10px;
      left: 10px;
    }

    a{
      color: white;
      opacity: 0.5;

      &:hover{
        opacity: 1;
      }
    }

    .themoviedb {
      position: absolute;
      bottom: 6px;
      right: 35px;

      img {
        width: 90px;
      }
    }

    .github{
      color: #454545;
      position: absolute;
      bottom: 13px;
      right: 155px;

      &:hover{
        color: white;
      }
    }

    .nuxt{
      position: absolute;
      bottom: 11px;
      right: 215px;

      img {
        width: 35px;
      }
    }

  }

</style>
