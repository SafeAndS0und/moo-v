<template>
  <section>

    <h1>Search for a {{forWhat === 'movie' ? "Movie" : "TV Show"}}</h1>
    <CustomInput v-model="searchingFor" @keypress.enter.native="searchByTitle"/>

    <transition name="fade">
      <div class="results" v-if="searchingFor.length > 0">
        <h2>Results for "{{searchingFor}}"</h2>
        <p class="no-results" v-if="results.length === 0 && alreadySearched ">
          Sorry, we don't know that title
        </p>
        <search-carousel class="carousel" :movies="results"/>
      </div>
    </transition>

  </section>
</template>

<script>
  import CustomInput from '../partials/CustomInput.vue'
  import SearchCarousel from './SearchCarousel.vue'

  export default {
    name: "Search",
    components: {CustomInput, SearchCarousel},
    props: ['forWhat'],
    data(){
      return {
        searchingFor: '',
        results: [],
        alreadySearched: false
      }
    },
    methods: {
      searchByTitle(){

        this.$axios.$get(`https://api.themoviedb.org/3/search/${this.forWhat}?api_key=${process.env.APIKEY}&query=${this.searchingFor}`)
          .then(res => {
            this.alreadySearched = true
            console.log(res.results)
            this.results = res.results
          })
      }
    }
  }
</script>

<style scoped lang="scss">

  section {
    border-bottom: 1px solid #2a2a2a;
    padding: 30px 0;

    h1 {
      text-align: center;
      font-weight: 400;
    }

    input {
      display: block;
      margin: 15px auto 30px auto;
      width: 30%;
    }

    .results {
      position: relative;

      h3 {
        font-weight: 300;
      }

      .no-results {
        text-align: center;
        font-size: .95em;
        color: #6c6c6c;
        padding-top: 30px;
      }
    }
  }




  /* Transitions */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .75s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
