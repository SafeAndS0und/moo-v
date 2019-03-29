<template>
  <div>
    <nuxt keep-alive/>
  </div>
</template>

<style lang="scss">


  @import '../assets/css/variables.scss';
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700');

  html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    font-family: 'Titillium Web', sans-serif;
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-color: $websiteBackground;
    color: white;
  }
</style>
