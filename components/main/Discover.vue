<template>

  <section>

    <transition name="fade">
      <h2 v-if="!genre && moviesLoaded">Trending {{forWhat === 'movie' ? "Movies" : "TV Series"}}</h2>
    </transition>

    <transition name="fade">
      <div class="arrows" v-if="moviesLoaded">
        <div class="arrow arrow-left" @click="changeCarouselPos(true)">
          <v-icon name="arrow-left" scale="2"/>
        </div>
        <div class="arrow arrow-right" @click="changeCarouselPos(false)">
          <v-icon name="arrow-right" scale="2"/>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="progress" v-if="moviesLoaded" :style="{width: progressBarWidth + '%'}">
      </div>
    </transition>

    <div class="carousel" v-if="moviesLoaded" :class="{carouselEnd: cl_carouselNext}">
      <article v-for="movie of fewMovies(carouselPos.begin, carouselPos.until)"
               @mouseenter="setBgImg(movie.backdrop_path, movie.id, $event)"
               @mouseleave="unsetBgImg"
               :style="{backgroundImage: movie.id === hoverId ? bgImg : ''}"
               class="list-item"
               :key="movie.id" @click="showMovie(movie, $event)">

        <div class="info">
          <h3>{{movie.title || movie.name}}</h3>
          <p>{{movie.overview.substring(0, 120)}}...</p>
        </div>

        <img :src='"https://image.tmdb.org/t/p/w200/" + movie.poster_path' alt="Poster">

        <div class="dim"></div>
        <div class="dim-left"></div>

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
          this.moviesLoaded = true
          this.movies = res.results
          this.$emit('moviesLoaded')
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
        bgImg: null,
        hoverId: null,
        hoverTarget: null,

        moviesLoaded: false
      }
    },
    computed: {
      progressBarWidth(){
        const length = this.movies.length
        const until = this.carouselPos.until
        const width = (until / length) * 100

        return width > 100 ? 100 : width
      },
      withGenre(){
        this.movies = []
        return this.genre ? `&with_genres=${this.genre}` : ''
      }
    },
    methods: {
      showMovie(movie, e){
        this.unsetBgImg(e, true)
        this.$store.commit('changeShowType', movie.title ? 'movie' : 'tv')
        this.$router.push('/' + movie.id)
      },

      fewMovies(begin, until){
        return this.movies.slice(begin, until)
      },

      setBgImg(path, id, e){
        this.hoverId = id
        this.hoverTarget = e.target
        const img = new Image()
        img.src = 'https://image.tmdb.org/t/p/original' + path

        img.onload = () =>{
          this.bgImg = 'url("' + img.src + '")'

          setTimeout(() => e.target.style.transform = 'scale(1.12)', 100)
          setTimeout(() => {
            e.target.style.padding = '15px 50px'
            e.target.style.gridGap = '40px'
          }, 400)
        }

      },
      unsetBgImg(e, now){

        if(now){
          // clicking target is not the same as hover
          this.hoverTarget.style.transform = 'scale(1)'
          this.hoverTarget.style.padding = '15px'

        }
        else{
          setTimeout(() =>{
            e.target.style.transform = 'scale(1)'
            e.target.style.padding = '15px'
            e.target.style.gridGap = '8px'
          }, 500)
        }

        this.hoverId = ''
        this.bgImg = ''
      },

      changeCarouselPos(backwards){
        if(!backwards){

          if(this.carouselPos.until + 1 > this.movies.length)
            return

          this.cl_carouselNext = true
          setTimeout(() =>{
            this.cl_carouselNext = false
            this.carouselPos.begin += 3
            this.carouselPos.until += 3
          }, 400)
        }
        else{
          if(this.carouselPos.begin - 2 <= 0)
            return

          this.cl_carouselNext = true
          setTimeout(() =>{
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

    .progress {
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
        transition: .4s;
        opacity: 0.6;
        cursor: pointer;
        padding: 15px;
        background-color: #1a191e;
        border-right: 7px solid #111114;
        border-bottom: 5px solid #121215;
        max-width: 600px;

        background-position: center;
        background-size: cover;
        position: relative;

        .dim {
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(to top, #000000, #070707, #0d0d0d, #121212, #161616);
          z-index: 1;
          opacity: 0;
        }

        .dim-left {
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(to right, #000000, transparent);
          z-index: 1;
          opacity: 0;
        }

        &:hover {
          @media (min-width: 900px) {
            z-index: 4;
            opacity: 0.95;
            box-shadow: 12px 12px 12px 0 rgb(12, 12, 12);
            border-right: 2px solid #0c0c0f;
            border-bottom: 1px solid #0c0c0f;

            .info {
              h3 {
                color: white;
                font-size: 1.2em;
              }
              p {
                color: #dadada;
              }
            }

            .dim {
              opacity: 0.60;
            }

            .dim-left {
              opacity: 0.98;
            }
          }
        }

        .info {
          min-width: 130px;
          z-index: 3;
          transition: all .2s;
          width: 100%;

          h3 {
            font-size: 1.2em;
            font-weight: 300;
            margin-bottom: 10px;
            text-align: center;
            margin-top: 8px;
            transition: 1s;
          }

          p {
            font-size: .92em;
            color: #9c9c9c;
            transition: 1s;
          }
        }
        img {
          z-index: 3;
          max-width: 180px;
          box-shadow: 5px 4px 8px 0 rgb(3, 3, 3);
          transition: 0.2s;
        }
      }
    }
  }

  .carouselEnd {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
