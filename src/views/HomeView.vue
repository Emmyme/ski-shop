<script setup>
import { ref } from 'vue';

//productsInCart är just nu bara exempel, de ska sedan vara samma produkter som kunden tryckt "lägg till" på
let productsInCart = ref([{name: 'helmet', price: 250}, {name: 'hat', price: 280}, {name: 'skis', price: 850}]);
let totalSum = ref(0)

//räknar ut priset på individuella produkter och adderar dem för att få totalsumman
for (let i = 0; i < productsInCart.value.length; i++) {
  let productPrice = ref(productsInCart.value[i].price)
  totalSum.value += productPrice.value
}



</script>

<template>
  <div id="cart">
    <div id="product-list">
      <ul>
        <li v-for="(product, key) in productsInCart" :key="key">
          <ul id="product">
            <li id="name">{{ product.name }}</li>
            <li id="price">{{ product.price }}:-</li>
          </ul>
        </li>
      </ul>
    </div>
    <div id="total"><h3>Total: {{ totalSum }}:-</h3></div>
  </div>
</template>

<style>

#cart {
  display: flex;
  flex-direction: column;
}

ul {
  list-style: none;
}

#product {
  display: flex;
  margin-bottom: 2rem;
  border-bottom: solid 0.1rem rgba(0, 0, 0, 0.856);
}

#name {
  justify-self: flex-start;
  margin-right: 6rem;
  margin-left: -1rem;
}

#price {
  margin-left: auto;
  margin-right: 1rem;
  justify-self: flex-end;
}

#total {
  text-align: center;
  margin-top: 4rem;
}


</style>
