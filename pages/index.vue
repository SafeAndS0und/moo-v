<template>
  <div class="container">

    <transition name="fade">
      <Welcome v-if="showWelcomeScreen" @exit="displayContent" class="welcome"/>
    </transition>

    <Top v-if="showContent" class="top"/>

    <transition name="fadeFast">
      <main v-if="showContent">

        <Discover class="discover" for-what="movie"/>
        <Discover class="discover" for-what="tv"/>

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

  export default {
    components: {Welcome, Search, Foot, Discover, Top},
    created(){
      setTimeout(() => this.websiteLanuched = true, 750)
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
      displayContent(){
        setTimeout(() => this.showContent = true, 2000)
      }
    }

  }
</script>

<style scoped lang="scss">
  .container {
    height: 100vh;
    display: grid;
    justify-items: center;

    .welcome {
      width: 75%;
      align-self: center;
    }

    .top {
      width: 100%;
      padding: 20px 50px;

    }

    main {
      margin-top: 40px;
      width: 85%;

      .search-container{
        /*display: grid;*/
        /*grid-template-columns: 1fr 1fr;*/
        /*grid-gap: 30px;*/
      }
    }
  }

  /* Transition */

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  //////////////////////////////////////////////////////

  .fadeFast-enter-active, .fadeFast-leave-active {
    transition-property: transform, opacity;
    transition: .75s;
  }

  .fadeFast-enter, .fadeFast-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
</style>
