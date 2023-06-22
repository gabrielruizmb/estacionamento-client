<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div>
        <router-link to="/" class="navbar-brand">
          <img src="./assets/parking-icon.svg" alt="">  
          Peter's Parking
        </router-link> 
      </div>
      <router-link to="/about" class="navbar-menu">Movimentações</router-link> 
      <router-link to="/" class="navbar-menu">Condutores</router-link> 
      <router-link to="/" class="navbar-menu">Veiculos</router-link> 
      <router-link to="/" class="navbar-menu">Modelos</router-link> 
      <router-link to="/" class="navbar-menu">Marcas</router-link> 
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

:root {
  --primary-color: whitesmoke;
  --secondary-color: #241f31;
  //--secondary-color: #2c3e50;
}

body {
  background: linear-gradient(0deg, rgba(250, 0, 0, 0.54), rgba(255, 174, 0, 0.69)), url(./assets/ParkingLotBackGround.jpeg);
  background-size: 70%;
  background-position-x: center;
  background-repeat: repeat-x;
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: var(--secondary-color);
}

.navbar {
  background-color: var(--primary-color);

  a {
    font-weight: bold;
    color: var(--secondary-color);

    &:hover {
    color: var(--secondary-color);
    }
    &.router-link-exact-active {
      color: var(--secondary-color);
    }
  }

  .navbar-menu {
    font-weight: bold;
    color: var(--secondary-color);
    text-decoration-line: none;

    &.router-link-exact-active {
      text-decoration-line: underline;
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
