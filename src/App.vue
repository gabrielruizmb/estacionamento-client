<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <div>
        <router-link to="/" class="navbar-brand">Peter's Parking</router-link> 
      </div>
      <router-link to="/about">Movimentações</router-link> 
      <router-link to="/">Condutores</router-link> 
      <router-link to="/">Veiculos</router-link> 
      <router-link to="/">Modelos</router-link> 
      <router-link to="/">Marcas</router-link> 
      <router-link to="/">
        <img src="./assets/gear-solid.svg" alt="">
      </router-link>
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

.container-fluid {
  --mo-gutter-x: 6rem;
}

@media (max-width: 1213px) {
  body {
    background-repeat: repeat
  }
}
</style>
