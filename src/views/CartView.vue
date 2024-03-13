<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart.js'
import BetalSida from '../components/BetalSida.vue'

const cart = useCartStore()
let totalSum = ref(0)
let showPayment = ref(false)


//räknar ut priset på individuella produkter och adderar dem för att få totalsumman
for (let i = 0; i < cart.items.length; i++) {
  let productPrice = ref(cart.items[i].price)
  totalSum.value += productPrice.value
}

function displayChild() {
  showPayment.value = true
}


</script>

<template>
  <div id="cart-container" v-if="!showPayment">
    <ul class="breadcrumb">
      <li><router-link to="/">Hem</router-link></li>
      <li><router-link to="/products">Produktlista</router-link></li>
      <li>Varukorg</li>
  </ul>
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
    <button id="payment-link" @click="displayChild()">Till kassan</button>
  </div>
  <BetalSida :price="totalSum" v-else></BetalSida>
  
</template>

<style>
#cart-container {
  margin-top: 2rem;
  display: grid;
  grid-template-areas: '. breadcrumb breadcrumb . .' '. varukorg varukorg total .' '. varukorg varukorg betalning .';
  grid-gap: 5rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.801);
  margin-bottom: 6rem;
}

.breadcrumb {
  padding: 1rem 0;
  grid-area: breadcrumb;
  justify-self: center;
}

ul.breadcrumb li {
  display: inline;
  font-size: 1rem;
}

ul.breadcrumb li+li:before {
  padding: 6px;
  content: '/';
}

#product-list {
  background-color:#7db9e431;
  padding: 5rem;
  border-radius: 1rem;
  grid-area: varukorg;
  box-shadow: rgba(0, 0, 0, 0.253) 0px 3px 8px;
  margin-bottom: 2rem;
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
  max-width: 20vw;
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
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.253) 0px 2px 3px;
}

#total {
  text-align: center;
  margin-top: 3rem;
  grid-area: total;
}

#payment-link {
  margin-top: 3rem;
  background-color: #056cb7;
  border: none;
  font-size: 1.5rem;
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

@media (max-width: 750px) {

  #cart-container {
    grid-template-areas: 'breadcrumb' 'varukorg' 'varukorg' 'total' 'betalning';
    font-size: 1rem;
  }

  #product-list {
    padding: 2rem 1rem;
    border-radius: 0;
  }

  #name {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    max-width: 50vw;
    align-self: center;
  }

}

@media (min-width: 750px) and (max-width: 1100px){

  #cart-container {
    grid-template-areas: 'breadcrumb' 'varukorg' 'varukorg' 'total' 'betalning';
    font-size: 2rem;
  }

  #product-list {
    padding: 2rem;
    border-radius: 1.5rem;
  }

  #name {
    margin-left: 1rem;
    margin-right: 0.5rem;
    max-width: 50vw;
    align-self: center;
  }

}
</style>


