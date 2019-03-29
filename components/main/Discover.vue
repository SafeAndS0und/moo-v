<template>

  <section>

    <h2>Trending {{forWhat === 'movie' ? "Movies" : "TV Series"}}</h2>

    <div class="carousel">
      <article v-for="movie of movies">
        <img :src='"https://image.tmdb.org/t/p/w200/" + movie.poster_path' alt="Poster">
        <h3>{{movie.title || movie.name}}</h3>
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
    computed: {}
  }
</script>

<style scoped lang="scss">

  section {
    width: 100%;
    position: relative;
    padding: 20px 0;
    border-bottom: 1px solid #2a2a2a;

    h2{
      margin: 20px 0;
    }

    .carousel {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 25px;
      width: 100%;

      article {
        display: grid;
        justify-self: center;
        background-color: #19191c;
        box-shadow: 6px 6px 10px 0 rgb(0, 0, 0);
        transition: .3s;
        opacity: 0.6;
        cursor: pointer;
        filter: grayscale(20%);
        padding: 10px;

        h3 {
          font-size: 1.1em;
          font-weight: 300;
          margin-bottom: 10px;
          text-align: center;
          margin-top: 8px;

        }

        img {
          max-height: 300px;
          max-width: 200px;
          display: block;
          margin: auto;
        }

        &:hover {
          opacity: 0.9;
          transform: translateY(-10px) matrix3d(1.1, 0, -0.09, -0.0002, 0.00, 1.078, 0.17, -0.0002, 0.09, -0.17, 0.98, 0, 0, 0, 0, 1);
          filter: grayscale(0);
          box-shadow: 10px 10px 12px 0 rgb(12, 12, 12);
        }
      }
    }
  }

</style>
