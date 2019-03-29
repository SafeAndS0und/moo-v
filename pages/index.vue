<template>
  <div class="container">

    <transition name="fade">
      <Welcome v-if="showWelcomeScreen" @exit="displayContent" class="welcome"/>
    </transition>

    <transition name="fadeFast">
      <main v-if="showContent">

        <Search class="search" for-what="movie"/>
        <Search class="search" for-what="tv"/>

        <Discover class="discover" for-what="movie"/>
        <Discover class="discover" for-what="tv"/>
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

  export default {
    components: {Welcome, Search, Foot, Discover},
    created(){
      setTimeout(() => this.websiteLanuched = true, 500)
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
        setTimeout(() => this.showContent = true, 1000)
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

    main {
      margin-top: 40px;
      width: 85%;
    }
  }

  /* Transition */

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  //////////////////////////////////////////////////////

  .fadeFast-enter-active, .fadeFast-leave-active {
    transition-property: transform, opacity;
    transition: .5s;
  }

  .fadeFast-enter, .fadeFast-leave-to {
    opacity: 0;
    transform: scale(0.7);
  }
</style>
