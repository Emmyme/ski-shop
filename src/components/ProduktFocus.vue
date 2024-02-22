<template>
  <!-- Denna div innehåller breadcrumbs och kan göras om till en egen komponent om det behövs -->

  <div class="Produktsida">
    <div>
      <ul class="breadcrumb">
        <li><a href="">Home</a></li>
        <li><a href="">Produktlista</a></li>
        <!-- Textinterpolering för att dynamiskt hämta namnet på prduktent, exempelvid {{ product.name }}-->
        <li>Produktnamn</li>
      </ul>
    </div>

    <div class="image">
      <!-- Placeholder bild för att få en tydligare bild av hur det kommer att se ut när sidan är klar-->
      <img src="../images/Helmet Test.png" alt="" />
    </div>

    <div class="info">
      <h1>Produktnamn</h1>
      <h2>Beskrivning:</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit a saepe deserunt iste alias
        dolorem explicabo tenetur aperiam, excepturi hic nemo ipsam expedita dolor esse qui minima
        labore ut, sint architecto ea laboriosam, ipsa fugit. Ratione veritatis alias maiores ex.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped>
.Produktsida {
  padding: 0 6rem;
}

.breadcrumb {
  background-color: grey;
  padding: 1rem 2rem;
  background-color: rgb(229, 229, 229);
  border-radius: 2rem;
}
ul.breadcrumb li {
  display: inline;
}

/* Lägger till slash-tecken för att "dela upp" breadcrumbs */
ul.breadcrumb li + li:before {
  padding: 8px;
  content: '/';
}

.image {
  background-color: rgb(229, 229, 229);
  display: block;
  border-radius: 2rem;
}

.image img {
  margin: auto;
  display: block;
}

.info h1 {
  font-size: 3rem;
}

.info p {
  width: 50%;
  font-size: 1.5rem;
}
</style>
