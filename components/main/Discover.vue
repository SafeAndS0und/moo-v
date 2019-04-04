<template>

  <section>

    <h2 v-if="!genre">Trending {{forWhat === 'movie' ? "Movies" : "TV Series"}}</h2>

    <div class="arrows">
      <div class="arrow arrow-left" @click="changeCarouselPos(true)">
        <v-icon name="arrow-left" scale="2"/>
      </div>
      <div class="arrow arrow-right" @click="changeCarouselPos(false)">
        <v-icon name="arrow-right" scale="2"/>
      </div>
    </div>

    <div class="progress" :style="{width: progressBarWidth + '%'}">
    </div>

    <div class="carousel" :class="{carouselEnd: cl_carouselNext}">
      <article v-for="movie of fewMovies(carouselPos.begin, carouselPos.until)" class="list-item"
               :key="movie.id" @click="showMovie(movie)">

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
    props: ['forWhat', 'genre'],
    created(){
      this.$axios.$get(
        `https://api.themoviedb.org/3/discover/${this.forWhat}?api_key=${process.env.APIKEY}&sort_by=popularity.desc${this.withGenre}`)
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

        cl_carouselNext: false,
      }
    },
    computed:{
      progressBarWidth(){
        const length = this.movies.length
        const until = this.carouselPos.until
        const width = (until / length) * 100

        return width > 100 ? 100 : width
      },
      withGenre(){
        console.log(this.genre)
        return this.genre ? `&with_genres=${this.genre}` : ''
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
          this.cl_carouselNext = true
          setTimeout(() => {
            this.cl_carouselNext = false
            this.carouselPos.begin += 3
            this.carouselPos.until += 3
          }, 400)
        }
        else{
          this.cl_carouselNext = true
          setTimeout(() => {
            this.cl_carouselNext = false
            this.carouselPos.begin -= 3
            this.carouselPos.until -= 3
          }, 400)
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

    .arrows {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 25px;
      margin: 15px 0;
      color: grey;

      .arrow-left {
        justify-self: end;
      }

      .arrow-right {
        justify-self: start;
      }

      .arrow {
        padding: 15px;
        border-radius: 50%;
        display: grid;
        align-items: center;
        cursor: pointer;
        transition: .2s;

        &:hover {
          background-color: #212023;
          color: #fdfdfd;
        }
      }
    }

    .progress{
      height: 3px;
      background-image: linear-gradient(to right, #43070f, #4b070f, #53080e, #5a090d, #8E0A10);
      transition: .8s;
    }

    .carousel {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      grid-column-gap: 25px;
      grid-row-gap: 15px;
      transition: .4s;

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
        background-color: #1a191e;
        border-right: 7px solid #111114;
        border-bottom: 5px solid #121215;

        &:hover {
          z-index: 4;
          opacity: 0.8;
          transform: scale(1.06);
          filter: grayscale(0);
          box-shadow: 10px 10px 12px 0 rgb(12, 12, 12);
          border-right: 2px solid #0c0c0f;
          border-bottom: 1px solid #0c0c0f;
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
          max-width: 180px;
          box-shadow: 5px 4px 8px 0 rgb(3, 3, 3);
        }
      }
    }
  }


  .carouselEnd{
    opacity: 0;
    transform: scale(0.98);
  }


</style>
