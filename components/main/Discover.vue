<template>

  <section>

    <h2>Trending {{forWhat === 'movie' ? "Movies" : "TV Series"}}</h2>

    <div class="arrows">
      <div class="arrow arrow-left" @click="changeCarouselPos(true)">
        <v-icon name="arrow-left" scale="2"/>
      </div>
      <div class="arrow arrow-right" @click="changeCarouselPos(false)">
        <v-icon name="arrow-right" scale="2"/>
      </div>
    </div>

    <div class="carousel">
      <article v-for="movie of fewMovies(carouselPos.begin, carouselPos.until)" @click="showMovie(movie)">

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
        movies: [],

        carouselPos: {
          begin: 0,
          until: 3
        },
      }
    },
    methods: {
      showMovie(movie){
        this.$store.commit('changeShowType', movie.title ? 'movie' : 'tv')
        this.$router.push('/' + movie.id)
      },

      fewMovies(begin, until){
        return this.movies.slice(begin, until)
      },

      changeCarouselPos(backwards){
        if(!backwards){
          this.carouselPos.begin += 3
          this.carouselPos.until += 3
        }
        else{
          this.carouselPos.begin -= 3
          this.carouselPos.until -= 3
        }
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

    .arrows{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 25px;
      margin: 15px 0;
      color: grey;

      .arrow-left{
        justify-self: end;
      }

      .arrow-right{
        justify-self: start;
      }

      .arrow{
        padding: 15px;
        border-radius: 50%;
        display: grid;
        align-items: center;
        cursor: pointer;
        transition: .3s;

        &:hover{
          background-color: #1c1d21;
          color: #fdfdfd;
        }
      }

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
        background-color: #19191c;

        &:hover {
          background-color: #1d1d20;
          opacity: 1;
          transform: scale(1.2);
          filter: grayscale(0);
          box-shadow: 10px 10px 12px 0 rgb(12, 12, 12);
          z-index: 4;
        }

        .info {
          min-width: 150px;

          h3 {
            font-size: 1.1em;
            font-weight: 300;
            margin-bottom: 10px;
            text-align: center;
            margin-top: 8px;
          }

          p {
            font-size: .95em;
          }
        }
        img {
          max-width: 160px;
        }
      }
    }
  }

</style>
