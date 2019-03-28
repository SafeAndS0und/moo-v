<template>
  <section class="container">

    <transition name="fade">
      <Welcome v-if="showWelcomeScreen" class="welcome"/>
    </transition>

  </section>
</template>

<script>
  import Welcome from '../components/Welcome.vue'

  export default {
    components: {Welcome},
    created(){
      setTimeout(() => this.websiteLanuched = true, 500)
    },
    data(){
      return {
        websiteLanuched: false
      }
    },
    computed: {
      showWelcomeScreen(){
        return this.$store.state.onWelcomeScreen && this.websiteLanuched
      }
    }

  }
</script>

<style scoped lang="scss">
  .container {
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100vh;

    .welcome {
      width: 75%;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
