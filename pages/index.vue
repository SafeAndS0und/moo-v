<template>
  <div class="container">

    <transition name="fade">
      <Welcome v-if="showWelcomeScreen" @exit="displayContent" class="welcome"/>
    </transition>

    <Top v-if="showContent" class="top"/>

    <transition name="fadeFast">
      <main v-show="showContent">

        <Discover class="discover" for-what="movie"/>
        <Discover class="discover" @movies-loaded="animate" for-what="tv"/>

        <ByGenre class="by-genre"/>

        <div class="search-container">
          <Search class="search" for-what="movie"/>
          <Search class="search" for-what="tv"/>
        </div>

      </main>
    </transition>

    <Foot v-if="showContent"/>
  </div>
</template>

<script>
  import Welcome from '../components/Welcome.vue'
  import Search from '../components/main/Search.vue'
  import Discover from '../components/main/Discover.vue'
  import Foot from '../components/Foot'
  import Top from '../components/Top'
  import ByGenre from '../components/main/ByGenre.vue'

  export default {
    components: {Welcome, Search, Foot, Discover, Top, ByGenre},
    created(){
      setTimeout(() => this.websiteLanuched = true, 800)
      if(!this.$store.state.onWelcomeScreen)
        this.showContent = true
    },
    data(){
      return {
        websiteLanuched: false,
        showContent: false
      }
    },
    computed: {
      showWelcomeScreen(){
        return this.$store.state.onWelcomeScreen && this.websiteLanuched
      },
    },
    methods: {
      animate(){
        this.showContent = true
      },
      displayContent(){
        setTimeout(() => this.showContent = true, 1500)
      }
    }

  }
</script>

<style scoped lang="scss">
  .container {
    height: 100vh;
    display: grid;
    justify-items: center;
    transition: 1s;

    .welcome {
      width: 75%;
      align-self: center;
    }

    .top {
      width: 100%;
      padding: 6px 50px;

    }

    main {
      margin-top: 40px;
      width: 85%;
    }

    .by-genre{
      margin-top: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #2a2a2a;
    }
  }

  /* Transition */

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  //////////////////////////////////////////////////////

  .fadeFast-enter-active, .fadeFast-leave-active {
    transition-property: transform, opacity;
    transition: 1.2s;
  }

  .fadeFast-enter, .fadeFast-leave-to {
    opacity: 0;
  }
</style>
