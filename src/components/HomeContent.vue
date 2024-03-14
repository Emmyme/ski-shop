<template>
  <div class="hero">
    <img
      src="https://www.skiweekends.com/assets/uploads/images/Les_Houches_Ski_Area_©PierreRaphoz.jpg"
      alt=""
    />
  </div>

  <div class="product-btn">
    <router-link to="/products"><button>Visa alla produkter</button></router-link>
  </div>
</template>

<script></script>

<style scoped>
.hero img {
  width: 100%;
}

.product-btn {
  padding: 3rem;
}

.product-btn button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #056cb7;
  padding: 20px;
  border-radius: 20px;
  border-style: none;
  color: white;
  font-size: 1.5rem;
}

.product-btn button:hover {
  background-color: #7db9e4;
}

.product-btn a {
  text-decoration: none;
}
</style>
