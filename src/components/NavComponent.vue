<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart.js'

//hämtar antalet produkter
let numOfProducts = useCartStore()
</script>

<template>
  <nav>
    <section id="logo">
      <RouterLink to="/">
        <h3>SKI</h3>
    </RouterLink>
    </section>
    
    <section id="navigation">
      <RouterLink to="/wishlist"><p id="wishList" class="fas fa-heart"></p></RouterLink>
      <!--Visar antalet produkter i varukorgen och fungerar som länk dit, är korgen tom visas inga siffror-->
      <RouterLink to="/cart" id="cart-link"><img src="../assets/shopping-cart.svg" alt="varukorg"><p v-show="numOfProducts.itemCount > 0" id="product-amount">{{ numOfProducts.itemCount }}</p></RouterLink>
    </section>
  </nav>
</template>

<style>
@font-face {
    font-family: logo;
    src: url(../assets/Audiowide/Audiowide-Regular.ttf);
}
nav {
  background-color: #056cb7;
  width: 100vw;
  height: auto;
  display: flex;
  position: sticky;
}

#logo {
  padding: 1rem;
  margin-left: 1rem;
  font-size: 2.5rem;
  font-family: logo;
  color: white;
}

#logo a {
  color: white;
  text-decoration: none;
}

#navigation {
  align-self: center;
  margin-left: auto;
  margin-right: 2rem;
}

#wishList {
  font-size: 2.5rem;
  color: white;
  margin-right: 2rem;
}

#cart-link {
  text-decoration: none;
}

#cart-link img {
    /*gör ikonen vit*/
  filter: invert(105)sepia(100%)saturate(2%)hue-rotate(57deg)brightness(102%)contrast(101%);
  width: 3rem;
  height: auto;
}

#product-amount {
    background-color: #7db9e4ce;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    font-size: 0.8rem;
    padding: 0.2rem;
    color: black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    position: absolute;
    margin-top: -3.5rem;
    margin-left: 4.5rem;
    z-index: 1;
    text-align: center;
    font-weight: 500;
    
}
</style>