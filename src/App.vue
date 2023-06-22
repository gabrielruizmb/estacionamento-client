<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a href="" class="navbar-brand">Peter's Parking</a>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <a href="">Condutores</a> 
      <a href="">Veiculos</a> 
      <a href="">Modelos</a> 
      <a href="">Marcas</a>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">

// Variable overrides first
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

// Then import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";

body {
  background: linear-gradient(0deg, rgba(250, 0, 0, 0.54), rgba(255, 174, 0, 0.69)), url(./assets/ParkingLotBackGround.jpeg);
  background-size: 70%;
  background-position-x: center;
  background-repeat: repeat-x;
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  background-color: whitesmoke;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
