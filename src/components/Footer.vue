<template>
  <div class="footer">
    <div class="x">
      <div class="contact-info">
        <h2>Kontakta oss</h2>
        <p>Email: contact@skishop.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>

      <div class="created-by">
        <h2>Skapad av</h2>
        <p>Max, Emelie, Timothy, Supattra Maj, Melker</p>
        <a href="https://github.com/Emmyme/ski-shop" target="_blank"
          rel="noopener noreferrer">https://github.com/Emmyme/ski-shop</a>
      </div>
    </div>
    <div class="payment-methods">
      <img src="../assets/paymentLogos/klarna.png" alt="Betalning via Klarna">
      <img src="../assets/paymentLogos/paypal.png" alt="Betalning via PayPal">
      <img src="../assets/paymentLogos/visa.png" alt="Betalning via Visa">
      <img src="../assets/paymentLogos/apple-pay.png" alt="Betalning via Apple Pay" id="apple">
    </div>
  </div>
</template>


<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #056CB7;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  padding: 40px 20px;
}

.x {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 80%;
  max-width: 1200px;
}

.contact-info,
.created-by {
  align-items: center;
  flex: 1;
  margin: 1rem 0;
  text-align: center;
}

.payment-methods {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 2;
  width: 50%;
  margin-top: 2rem;
}

.payment-methods img {
  height: 25px;
  transition: transform 0.3s ease;
}

h2 {
  color: #EFEFEF;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

p,
a {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
}

a {
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #cbcbcb;
}

@media (max-width: 768px) {

  .x {
    flex-direction: column;
    align-items: center;
  }

  .contact-info,
  .created-by {
    width: 90%;
    margin-bottom: 1rem;
  }

  .payment-methods {
    justify-content: space-between;
  }

  .payment-methods img {
    height: 25px;
    margin: 5px;
  }
}</style>
