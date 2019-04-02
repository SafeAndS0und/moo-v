<template>

  <transition-group name="fadeUp" tag="div">
    <article v-for="movie of tenMovies" :key="movie.id" @click="showMovie(movie)">

      <img :src='"https://image.tmdb.org/t/p/w200/" + movie.poster_path' alt="Poster">
      <h3>{{movie.title || movie.name}}</h3>

    </article>
  </transition-group>

</template>

<script>
  export default {
    name: "SearchCarousel",
    props: ['movies'],
    computed: {
      tenMovies(){
        console.log(this.movies)
        return this.movies.slice(0, 12)
      }
    },
    methods: {
      showMovie(movie){
        this.$store.commit('changeShowType', movie.title ? 'movie' : 'tv')
        this.$router.push('/' + movie.id)
      }
    }
  }
</script>

<style scoped lang="scss">

  div {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    grid-gap: 5px;
    grid-template-rows: auto;

    article {
      justify-self: center;
      display: grid;
      padding: 15px;
      transition: .3s;

      &:hover{
        /*box-shadow: 6px 6px 10px 0 rgb(3, 3, 3);*/
      }

      h3 {
        font-size: 1.1em;
        font-weight: 300;
        margin-bottom: 10px;
        text-align: center;
        margin-top: 8px;

      }

      img {
        max-height: 300px;
        max-width: 170px;
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
          box-shadow: 10px 10px 12px 0 rgb(12, 12, 12);
        }
      }

    }
  }

  .fadeUp-enter-active, .fadeUp-leave-active {
    transition: .35s;
  }

  .fadeUp-enter{
    opacity: 0;
    transform: scale(0.8);
  }
  .fadeUp-leave-to {
      opacity: 0;
    }

</style>
