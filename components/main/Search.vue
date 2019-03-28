<template>
  <section>

    <h1>Search for a Movie or TV series</h1>
    <CustomInput v-model="searchingFor" @keypress.enter.native="searchByTitle"/>

    <transition name="fade">
      <div class="results" v-if="searchingFor.length > 0">
        <h3>Results for {{searchingFor}}: </h3>
        <p class="no-results" v-if="results.length === 0 ">Sorry, we don't know that title</p>
        <article v-for="movie of results">
          {{movie.title}}
        </article>
      </div>
    </transition>

  </section>
</template>

<script>
  import CustomInput from '../partials/CustomInput.vue'

  export default {
    name: "Search",
    components: {CustomInput},
    data(){
      return {
        searchingFor: '',
        results: []
      }
    },
    methods: {
      searchByTitle(){

        this.$axios.$get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.APIKEY}&query=${this.searchingFor}`)
          .then(res => {
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
    padding-bottom: 40px;

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
