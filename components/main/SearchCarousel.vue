<template>

  <transition-group name="fadeUp" tag="div">
    <article v-for="movie of tenMovies" :key="movie.id" class="movie">

      <h3>{{movie.title}}</h3>
      <img :src='"https://image.tmdb.org/t/p/w200/" + movie.poster_path' alt="Poster">

    </article>
  </transition-group>

</template>

<script>
  export default {
    name: "SearchCarousel",
    props: ['movies'],
    computed: {
      tenMovies(){
        return this.movies.slice(0, 10)
      }
    }
  }
</script>

<style scoped lang="scss">

  div {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 5px;
    grid-template-rows: auto;

    .movie {
      justify-self: center;
      display: grid;

      h3 {
        font-size: 1.1em;
        font-weight: 300;
        margin-bottom: 10px;
      }

      img {
        max-height: 300px;
        max-width: 180px;
        box-shadow: 6px 6px 10px 0 rgb(0, 0, 0);
        transition: .3s;
        opacity: 0.6;
        cursor: pointer;
        filter: grayscale(20%);
        border-radius: 3px;

        &:hover {
          opacity: 0.9;
          transform: translateY(-10px) matrix3d(1.1, 0, -0.09, -0.0002, 0.00, 1.078, 0.17, -0.0002, 0.09, -0.17, 0.98, 0, 0, 0, 0, 1);
          filter: grayscale(0);
        }
      }

    }
  }

  .fadeUp-enter-active, .fadeUp-leave-active {
    transition: opacity .5s;
  }

  .fadeUp-enter, .fadeUp-leave-to {
    opacity: 0;
  }

</style>
