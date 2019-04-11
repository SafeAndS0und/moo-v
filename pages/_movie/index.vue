<template>

  <div :style="{backgroundImage: imgLink}">
    <div class="dim"></div>

    <v-icon name="arrow-left"
            @click.native="$router.push('/')"
            class="back" scale="2"/>

    <main>

      <aside class="left">

        <h1>
          {{movie.vote_average}} <br/>
          <span>With {{movie.popularity}} votes</span>
        </h1>


      </aside>

      <aside class="right">
        <h1>{{movie.title || movie.name}}</h1>
        <span>Released: {{movie.release_date || movie.first_air_date}}</span> <br/>
        <span v-for="genre of movie.genres">{{genre.name}}, </span>

        <p>{{movie.overview}}</p>
      </aside>
    </main>
  </div>
</template>

<script>
  export default {
    name: "index",
    asyncData(context){
      return context.app.$axios.$get(
        `https://api.themoviedb.org/3/${context.store.state.showType}/${context.params.movie}?api_key=${process.env.APIKEY}`)
        .then(res =>{
          return {movie: res}
        })
        .catch(err => {
          console.error(err)
          context.redirect('/')
        })
    },
    computed: {
      imgLink(){
          return 'url("https://image.tmdb.org/t/p/original' + this.movie.backdrop_path + '")'
      }

    }
  }
</script>

<style scoped lang="scss">

  div {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    .back {
      position: fixed;
      z-index: 4;
      top: 0;
      left: 0;
      opacity: 0.5;
      width: 60px;
      height: 60px;
      padding: 15px;
      transition: .5s;
      cursor: pointer;

      &:hover{
        opacity: 1;
      }
    }

    .dim {
      position: fixed;
      width: 100%;
      height: 100vh;
      background-image: linear-gradient(to bottom, #393939, #2c2c2c, #1f1f1f, #131313, #000000);
      opacity: 0.75;
      z-index: 2;
    }

    main {
      position: relative;
      opacity: 1;
      z-index: 3;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-flow: column;
      grid-gap: 10px;

      aside {
        margin-top: 100px;
        padding: 12px;
      }

      .left {
        font-size: 2em;
        font-weight: 700;
        width: 100%;
        display: grid;

        h1 {
          margin-top: 6vh;
          font-size: 6em;
          text-align: center;
          line-height: 80px;

          span{
            font-size: 0.15em;
          }
        }

      }

      .right {

        h1 {
          font-size: 3.2em;
          display: block;
        }

        span {
          font-size: 1.2em;
          transform: translateY(-15px);
          margin-bottom: 5px;
        }

        p {
          font-size: .95em;
          color: #b0b0b0;
          margin-top: 15px;
        }
      }
    }
  }

  @media screen and (max-width: 820px) {

    div{

      main{
        grid-auto-flow: row;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-gap: 25px;

        .left{
          grid-row: 2;
          margin-top: 0;
          font-size: 1em;

          h1{
            margin: 0;
          }
        }

        .right{
          grid-row: 1;
          margin-top: 30px;
        }
      }
    }
  }

</style>
