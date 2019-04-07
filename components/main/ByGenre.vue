<template>

  <section>
    <h2>See Trending Movies in a Specific Genre</h2>

    <div class="genres">

      <article v-for="genre of genres" :class="{active: genre.id === activeId }" @click="switchGenre(genre.id)">
        <p>{{genre.name}}</p>
      </article>

    </div>

    <transition name="fade">
      <Discover v-if="genreChosen" class="discover" for-what="movie" :genre="genreId"/>
    </transition>
  </section>

</template>

<script>
  import Discover from './Discover.vue'

  export default {
    name: "ByGenre",
    components: {Discover},
    created(){
      this.$axios.$get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.APIKEY}&language=en-US`)
        .then(res =>{
          this.genres = res.genres
        })
        .catch(err => console.error(err))
    },
    data(){
      return {
        genres: null,
        genreChosen: false,
        genreId: null,
        activeId: null
      }
    },
    methods: {
      switchGenre(id){
        this.genreChosen = false
        setTimeout(() => this.genreChosen = true, 300) // activating the transition
        this.genreId = id

        this.activeId = id

      }
    }
  }
</script>

<style scoped lang="scss">

  section {

    h2 {
      margin-bottom: 15px;
    }

    article {
      display: inline-block;
      padding: 5px 7px;
      border-radius: 10px;
      margin: 3px;
      background-color: #17171b;
      cursor: pointer;
      transition: .1s;

      &:hover {
        background-color: #202024;

        p {
          color: white !important;
        }
      }

      p {
        display: inline-block;
        color: #707070;
        letter-spacing: 1px;
      }
    }

    .active {
      background-color: #43070f;

      &:hover {
        background-color: #32070e;
      }

      p {
        color: white;
      }
    }

    .discover {
      border: none;
    }
  }


  /* Transitions */

  /* Transitions */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
