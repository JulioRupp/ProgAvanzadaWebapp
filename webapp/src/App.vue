<template>

  <div id="app">
    <nav class="navbar">
      <div>


    <h1> <img src="./assets/logo.png" style="height:40px;top:0;float:left"> <B>{{ msg }}</B> <img src="./assets/logoTMDB.png" style="height:40px;top:0;float:right;"></h1>
    <ul>
      <li><router-link :to="{name:'peli_animada',params:{id:16}}"> Animada</router-link></li>
      <li><router-link :to="{name:'peli_drama',params:{id:18}}" > Drama </router-link></li>
      <li><router-link :to="{name:'peli_accion',params: {id: 28}}"> Accion</router-link></li>
      <li><router-link :to="{name: 'peli_comedia',params:{id:35}}"> Comedia</router-link></li>
      <li><router-link :to="{name: 'peli_guerra',params:{id:10752}}"> Guerra</router-link></li>
      <li><router-link :to="{name: 'peli_terror',params:{id:27}}"> Terror</router-link></li>
    </ul>
  </div>
</nav>
<router-view>  </router-view>

  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Página de peliculas'
    }
  }
}
</script>

<style lang="scss">
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

.navbar{
  position: fixed;
  width:100%;
  top:0;
  background-image: url(componentes/estrellas.jpg);
  background-attachment: fixed;
  background-size:cover;
}

h1{
  top:0;
  color:#42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
