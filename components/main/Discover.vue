<template>

  <section>

    <h2>Trending {{forWhat === 'movie' ? "Movies" : "TV Series"}}</h2>

    <div class="carousel">
      <article v-for="movie of movies" @click="showMovie(movie)">

        <div class="info">
          <h3>{{movie.title || movie.name}}</h3>
          <p>{{movie.overview.substring(0, 80)}}...</p>
        </div>

        <img :src='"https://image.tmdb.org/t/p/w200/" + movie.poster_path' alt="Poster">

      </article>
    </div>

  </section>

</template>

<script>
  export default {
    name: "Discover",
    props: ['forWhat'],
    created(){
      this.$axios.$get(`https://api.themoviedb.org/3/discover/${this.forWhat}?api_key=${process.env.APIKEY}&sort_by=popularity.desc`)
        .then(res =>{
          console.log(res)
          this.movies = res.results
        })
        .catch(err => console.error(err))
    },
    data(){
      return {
        movies: []
      }
    },
    computed: {},
    methods: {
      showMovie(movie){
        this.$store.commit('changeShowType', movie.title ? 'movie' : 'tv')
        this.$router.push('/' + movie.id)
      }
    }
  }
</script>

<style scoped lang="scss">

  section {
    width: 100%;
    position: relative;
    padding: 20px 0;
    border-bottom: 1px solid #2a2a2a;

    h2 {
      margin: 20px 0;
    }

    .carousel {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-column-gap: 25px;
      grid-row-gap: 15px;

      article {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 8px;
        justify-self: center;
        box-shadow: 6px 6px 10px 0 rgb(0, 0, 0);
        transition: .3s;
        opacity: 0.6;
        cursor: pointer;
        filter: grayscale(20%);
        padding: 15px;

        .info {
          min-width: 150px;

          h3 {
            font-size: 1.1em;
            font-weight: 300;
            margin-bottom: 10px;
            text-align: center;
            margin-top: 8px;
          }

          p{
            font-size: .95em;
          }
        }
        img {
          max-width: 160px;
        }

        &:hover {
          background-color: #19191c;
          opacity: 1;
          transform: scale(1.2);
          filter: grayscale(0);
          box-shadow: 10px 10px 12px 0 rgb(12, 12, 12);
          z-index: 4;
        }
      }
    }
  }

</style>
