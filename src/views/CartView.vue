<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useCartStore } from '../stores/cart.js'

const cart = useCartStore()
let totalSum = ref(0)


//räknar ut priset på individuella produkter och adderar dem för att få totalsumman
for (let i = 0; i < cart.items.length; i++) {
  let productPrice = ref(cart.items[i].price)
  totalSum.value += productPrice.value
}
</script>

<template>
  <div id="cart-container">
    <div id="product-list">
      <ul>
        <!--hämtar och visar produkter som är tillagda-->
        <li v-for="item in cart.items" :key="item.id">
          <ul id="product">
            <li id="image"><img :src="item.image" alt="produktbild"></li>
            <li id="name">{{ item.title }}</li>
            <li id="price">{{ item.price }}:-</li>
        
          </ul>
        </li>
      </ul>
    </div>
    <div id="total">
      <h4>Totalt: {{ totalSum }}:-</h4>
    </div>
    <RouterLink to="/payment" id="payment-link">Till kassan</RouterLink>
  </div>
</template>

<style>
#cart-container {
  margin-top: 6rem;
  display: grid;
  grid-template-areas: '. varukorg varukorg total .' '. varukorg varukorg betalning .';
  grid-gap: 5rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.801);
}

#product-list {
  background-color:#7db9e431;
  padding: 5rem;
  border-radius: 1rem;
  grid-area: varukorg;
}

ul {
  list-style: none;
}

#product {
  display: flex;
  margin-bottom: 2rem;
  border-bottom: solid 0.05rem rgba(0, 0, 0, 0.856);
  width: auto;
}

#name {
  justify-self: flex-start;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 4rem;
  margin-left: 1rem;
}

#price {
  margin-left: auto;
  margin-right: 1rem;
  justify-self: flex-end;
  margin-top: auto;
  margin-bottom: auto;
}

#image img {
  width: 7vw;
  height: auto;
  margin-left: 1rem;
}

#total {
  text-align: center;
  margin-top: 3rem;
  grid-area: total;
}

#payment-link {
  margin-top: 3rem;
  background-color: #056cb7;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  text-decoration: none;
  margin-bottom: 3rem;
  grid-area: betalning;
  justify-self: center;
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin-top: auto;
}

#payment-link:hover {
  background-color: #056db7b7;
}

#payment-link:active {
  background-color: #0263a8;
}
</style>


