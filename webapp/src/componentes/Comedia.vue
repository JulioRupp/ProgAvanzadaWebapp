<template>
  <div>
    <ul id = "comedia" v-if= "peliculas != null">
      <li v-for ="pelicula in peliculas" >
          <div class ="card-img-overlay">
            <h5 class ="card-title">{{pelicula.original_title}}</h5>
            <img class ="card-img" v-bind:src="imageUrl + pelicula.poster_path" alt="Card image">
            <p class ="card-text">{{pelicula.overview}}</p>
            <h1 class ="card-text">{{pelicula.release_date}}</h1>
          </div>
          <hr style="width:75%; height:4px;border-color:#42b983;background-color: #42b983;">
          <hr style="border-color:#42b983;height:8px;background-color: #42b983;">
          <hr style="width:15%; height:4px;border-color:#42b983;background-color: #42b983;">
      </li>
    </ul>
    <span v-else>No hay nada.</span>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'comedia',

  mounted(){
    this.getComedia();
  },

  data () {
    return {
      imageUrl: 'https://image.tmdb.org/t/p/w342',
      peliculas: []
    }
  },

  methods:{
    getComedia(){
      var self = this;
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=30fbf69bcba73c04a88c618b6ff8a081&with_genres=35&sort_by=vote_average.desc&vote_count.gte=10')
      .then(function(response){
                     self.peliculas = response.data.results;
                     });
    }
  }
}
</script>

<style media="screen">
#comedia{
  background-image: url("FondoComedia.jpg");
  background-attachment: fixed;
  background-size:cover;
}

h5{
  color: white;
  font-size: 70px;
  background-color: black;
}

p{
  color:black;
  border-width: 3px;
  border-style: solid;
  border-color: #42b983;
  background-color: #E6EE9C;
}

h1{
  font-size: 40px;
  color:#000000;
}

</style>
