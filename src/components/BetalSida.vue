<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <main>
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="2">Home</a></li>
                <li><a href="1">Varukorg</a></li>
                <li>Betalning</li>
            </ul>

            <div class="payment-container">
                <h1>Betalmetod</h1>

                <form action="#">
                    <input type="radio" name="payment" id="visa">
                    <input type="radio" name="payment" id="mastercard">
                    <input type="radio" name="payment" id="paypal">
                    <input type="radio" name="payment" id="AMEX">


                    <div class="category">
                        <label for="visa" class="visaMethod">
                            <div class="imgName">
                                <div class="imgContainer visa">
                                    <img src="https://i.ibb.co/vjQCN4y/Visa-Card.png" alt="">
                                </div>
                                <span class="name">VISA</span>
                            </div>
                            <span class="check"><i class="fa-solid fa-circle-check" style="color: #3838f4;"></i></span>
                        </label>

                        <label for="mastercard" class="mastercardMethod">
                            <div class="imgName">
                                <div class="imgContainer mastercard">
                                    <img src="https://i.ibb.co/vdbBkgT/mastercard.jpg" alt="">
                                </div>
                                <span class="name">Mastercard</span>
                            </div>
                            <span class="check"><i class="fa-solid fa-circle-check" style="color: #3838f4;"></i></span>
                        </label>

                        <label for="paypal" class="paypalMethod">
                            <div class="imgName">
                                <div class="imgContainer paypal">
                                    <img src="https://i.ibb.co/KVF3mr1/paypal.png" alt="">
                                </div>
                                <span class="name">Paypal</span>
                            </div>
                            <span class="check"><i class="fa-solid fa-circle-check" style="color: #3838f4;"></i></span>
                        </label>

                        <label for="AMEX" class="amexMethod">
                            <div class="imgName">
                                <div class="imgContainer AMEX">
                                    <img src="https://i.ibb.co/wQnrX86/American-Express.jpg" alt="">
                                </div>
                                <span class="name">AMEX</span>
                            </div>
                            <span class="check"><i class="fa-solid fa-circle-check" style="color: #3838f4;"></i></span>
                        </label>
                    </div>
                </form>
            </div>

            <div class="delivery-information">
                <h1>Leverans adress</h1>

                <div class="form-container">
                    <form id="user-information-form">
                        <div class="form-group">
                            <label for="firstName">Förnamn</label>
                            <input type="text" id="firstName" name="firstName" required>
                        </div>
                        <div class="form-group">
                            <label for="lastName">Efternamn</label>
                            <input type="text" id="lastName" name="lastName" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phoneNumber">Telefonnummer</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber">
                        </div>
                        <div class="form-group">
                            <label for="address">Adress</label>
                            <input type="text" id="address" name="address">
                        </div>
                    </form>
                </div>


            </div>

            <div class="price">
                <h1> Total belopp: 999 999 SEK </h1>
                <h4>inckl momos</h4>
                <button>Slutför köp</button>
            </div>

        </div>
    </main>
</template>


<style scoped>
/* Reset styles */
* {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
}

/* Main container styles */
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 100%;
    margin-bottom: 10rem;
}

/* Body styles */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Global link styles */
a {
    text-decoration: none;
    color: #333;
}

/* Breadcrumb styles */
.breadcrumb {
    padding: 1rem 0;
}

ul.breadcrumb li {
    display: inline;
}

ul.breadcrumb li+li:before {
    padding: 6px;
    content: '/';
}



/* Container styles */
.container {
    padding: 32px;
    height: fit-content;
    width: 40vw;
    margin-top: 2rem;
    border-radius: 15px;
}

/* Payment container styles */
.payment-container {
    margin: 5em auto;
    width: 90%;
    min-width: fit-content;
    border-radius: 8px;
    padding: 2em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

/* Payment form input styles */
.payment-container form input {
    display: none;
}

/* Payment form category styles */
.category {
    margin-top: 10 px;
    padding-top: 20 px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150 px, 1 fr));
    grid-gap: 8px;
}

/* Category label styles */
.category label {
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0.5) 1px 2px 8px;
    display: flex;
    padding: 1rem;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    position: relative;
}

/* Category selection styles */
#visa:checked~.category .visaMethod,
#mastercard:checked~.category .mastercardMethod,
#paypal:checked~.category .paypalMethod,
#AMEX:checked~.category .amexMethod {
    box-shadow: 0px 0px 0px 1px #3838f4;
}

/* Category checkmark styles */
#visa:checked~.category .visaMethod .check,
#mastercard:checked~.category .mastercardMethod .check,
#paypal:checked~.category .paypalMethod .check,
#AMEX:checked~.category .amexMethod .check {
    display: block;
}

/* Label and image name styles */
.imgName {
    display: flex;
    align-items: center;
    gap: 15px;
}

/* Image name span styles */
.imgName span {
    font-weight: 500;
    font-size: 22px;
}

/* Image payment container styles */
.imgName .imgpayment-container {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 35%;
    transform: translateY(-35%);
}

/* Image styles */
.imgContainer img {
    width: 70px;
    height: auto;
}

/* Checkmark styles */
.check {
    display: none;
    position: absolute;
    top: -4px;
    right: -4px;
}

.check i {
    font-size: 18px;
}


/* Form payment container styles */

.delivery-information {
    margin: 5em auto;
    width: 90%;
    border-radius: 8px;
    padding: 2em;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1),
        0 5px 12px -2px rgba(0, 0, 0, 0.1),
        0 18px 36px -6px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 3rem;
}

.delivery-information .form-group {
    margin-bottom: 20px;
}

.delivery-information label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.delivery-information input[type="text"],
.delivery-information input[type="email"],
.delivery-information input[type="tel"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.delivery-information input[type="text"]:focus,
.delivery-information input[type="email"]:focus,
.delivery-information input[type="tel"]:focus {
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

.delivery-information .form-container {
    display: flex;
    justify-content: center;
}

.delivery-information form {
    width: 100%;
}



/* Price section styles */
.price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-top: 5rem;
    height: fit-content;
    width: 100%;
}

/* Price section heading styles */
.price h1 {
    margin: 2rem 0;
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    color: #333;
}

/* Price section subheading styles */
.price h4 {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color: #333;
}

.price button {
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-top: 2rem;
    width: fit-content;
    padding: 2rem 1rem 2rem 1rem;
    font-size: 22px;
    background-color: #3838f4;
}

.price button:hover {
    background-color: #3232d8;
    cursor: pointer;
}

/* Media query for screens larger than 1200px */
@media (min-width: 1201px) {
    .payment-container form .category {
        grid-template-columns: repeat(2, 2fr);
        height: fit-content;
    }

    .form-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
}

/* Media query for screens between 501px and 1200px */
@media (min-width: 501px) and (max-width: 1200px) {
    .container {
        margin: 0;
        padding: 0;
        width: 80vw;
    }

    .payment-container {
        margin-top: 2rem;
    }

    .category label {
        height: 75px;
    }
}

/* Media query for screens up to 500px */
@media (max-width: 500px) {
    .container {
        padding: 10px;
        margin-top: 2rem;
        width: 90%;
    }

    .payment-container {
        margin: 2rem 0 5rem 0;
        padding: 16px;
        width: 100%;
    }

    .payment-container label {
        height: 75px;
    }

    .delivery-information {
        margin: 2rem auto;
        padding: 0;
        width: 100%;
    }
}</style>