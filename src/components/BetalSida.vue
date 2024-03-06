<template>
    <!-- länkar till font awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <main>
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li><a href="/cart">Varukorg</a></li>
                <li>Betalning</li>
            </ul>

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

                        <div class="form-group">
                            <label for="postCode">Postnummer</label>
                            <input type="text" id="postCode" name="postCode">
                        </div>
                        <div class="form-group">
                            <label for="city">Stad</label>
                            <input type="text" id="city" name="city">
                        </div>
                        <div class="form-group">
                            <label for="ort">Ort</label>
                            <input type="text" id="ort" name="ort">
                        </div>
                    </form>
                </div>
            </div>


            <div class="payment-container">
                <h1>Betalmetod</h1>
                <form action="#">
                    <input type="radio" name="payment" id="visa">
                    <input type="radio" name="payment" id="apple-pay">
                    <input type="radio" name="payment" id="paypal">
                    <input type="radio" name="payment" id="klarna">

                    <div class="payment-methods">
                        <label for="visa" class="visa-method">
                            <div class="img-name">
                                <div class="img-container">
                                    <img src="../images/payment/Visa-Card.png" alt="visa-logo">
                                </div>
                                <span>VISA</span>
                            </div>
                            <!-- class="fa-solid fa-circle-check" refererar till checkmark iconen från font awesome -->
                            <span class="check"><i class="fa-solid fa-circle-check" style="color: #3838f4;"></i></span>
                        </label>

                        <label for="apple-pay" class="apple-pay-method">
                            <div class="img-name">
                                <div class="img-container">
                                    <img src="../images/payment/apple-pay.png" alt="apple-pay-logo">
                                </div>
                                <span>Apple pay</span>
                            </div>
                            <!-- class="fa-solid fa-circle-check" refererar till checkmark iconen från font awesome -->
                            <span class="check"><i class="fa-solid fa-circle-check" style="color: #3838f4;"></i></span>
                        </label>

                        <label for="paypal" class="paypal-method">
                            <div class="img-name">
                                <div class="img-container">
                                    <img src="../images/payment/paypal.png" alt="paypal-logo">
                                </div>
                                <span>Paypal</span>
                            </div>
                            <!-- class="fa-solid fa-circle-check" refererar till checkmark iconen från font awesome -->
                            <span class="check"><i class="fa-solid fa-circle-check" style="color: #3838f4;"></i></span>
                        </label>

                        <label for="klarna" class="klarna-method">
                            <div class="img-name">
                                <div class="img-container">
                                    <img src="../images/payment/klarna.png" alt="Klarna-logo">
                                </div>
                                <span>Klarna</span>
                            </div>
                            <!-- class="fa-solid fa-circle-check" refererar till checkmark iconen från font awesome -->
                            <span class="check"><i class="fa-solid fa-circle-check" style="color: #3838f4;"></i></span>
                        </label>
                    </div>
                </form>
            </div>


            <div class="price" >
                <h1> Total belopp: {{ pris }} SEK </h1>
                <div class="news-letter" >
                    <h4>inkl. moms och frakt</h4>
                    <div>
                        <input type="checkbox" id="newsletter" name="newsletter">
                        <label for="newsletter">Nyhetsbrev</label>
                    </div>
                </div>
                <button type="button" @click="handleSubmit">Slutför köp</button>
            </div>

            <div id="paymentSuccessModal" class="modal" v-if="showModal">
                <div class="modal-content">
                    <h2>Betalning genomförd</h2>
                    <span class="close-button" @click="closeModal">&times;</span>
                    <p>Din order har bekräftats</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>


export default {
    data() {
        return {
            // {{ pris }} pris är importerat från varugorgs komponentent
            pris: 9999,
            showModal: false,
        }
    },
    methods: {
        validateForm() {
            let formIsValid = true;
            let form = document.getElementById('user-information-form');
            let inputs = form.getElementsByTagName('input');

            document.querySelectorAll('.error-message').forEach(el => el.remove());

            for (let input of inputs) {
                // Kollar om input är tom
                if (input.value.trim() === '') {
                    this.showError(input, 'Fyll i detta fält');
                    formIsValid = false;
                }

                // verifierar email
                if (input.type === 'email' && !this.validateEmail(input.value)) {
                    this.showError(input, 'Ange en giltig e-postadress');
                    formIsValid = false;
                }

                // verifierar telefonnummer
                if (input.name === 'phoneNumber' && !this.validatePhoneNumber(input.value)) {
                    this.showError(input, 'Ange ett giltigt telefonnummer');
                    formIsValid = false;
                }
            }

            return formIsValid;
        },
        showError(input, message) {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.style.color = 'red';
            error.innerText = message;
            input.style.borderColor = 'red';
            input.parentNode.insertBefore(error, input.nextSibling);
        },
        validateEmail(email) {
            // Validates email addresses with a regular expression (RegEx), RegEx är ett sätt att matcha strängar mot ett mönster   
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return re.test(email.toLowerCase());
        },
        validatePhoneNumber(number) {
            const re = /^\d{10}$/;
            return re.test(number);
        },
        handleSubmit() {
            console.log("handleSubmit called"); 
            if (this.validateForm()) {
                this.showModal = true;
            } else {
                console.log("Validation failed. Form not submitted.");
            }
        },
        onPaymentSuccess() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
}

main {
   
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 100%;
}


h1 {
    margin-bottom: 3rem;
}

a {
    text-decoration: none;
    color: #333;
}

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

.container {
    background-color: #fff;
    padding: 32px;
    height: fit-content;
    width: 40vw;
    margin-top: 2rem;
    border-radius: 15px;
    margin: 5rem 0rem;
}

.payment-container {
    margin: 5em auto;
    width: 90%;
    min-width: fit-content;
    border-radius: 8px;
    padding: 2em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.payment-container form input {
    display: none;
}

.payment-methods {
    margin-top: 10 px;
    padding-top: 20 px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150 px, 1 fr));
    grid-gap: 8px;
}

.payment-methods label {
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0.5) 1px 2px 8px;
    display: flex;
    padding: 1rem;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    position: relative;
    margin: 5px;
}

/* lägger till en box shadow till betalmetoden när motsvarande input är markerad */
/* `~` refererar till elementets `siblings` */
#visa:checked~.payment-methods .visa-method,
#apple-pay:checked~.payment-methods .apple-pay-method,
#paypal:checked~.payment-methods .paypal-method,
#klarna:checked~.payment-methods .klarna-method {
    box-shadow: 0px 0px 0px 1px #3838f4;
}

/* visar checkmark när motsvarande input är markerad */
#visa:checked~.payment-methods .visa-method .check,
#apple-pay:checked~.payment-methods .apple-pay-method .check,
#paypal:checked~.payment-methods .paypal-method .check,
#klarna:checked~.payment-methods .klarna-method .check {
    display: block;
}

/* betalmetodens img och namn container */
.img-name {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

/* betalningsmetodens text */
.img-name span {
    font-weight: 500;
    font-size: 22px;
}

.img-container {
    display: flex;
    align-items: center;
}

/* betalningsmetodens logo */
.img-container img {
    width: 70px;
    height: auto;
}

/* Checkmark för vald betalningsmetod */
.check {
    display: none;
    position: absolute;
    top: -4px;
    right: -4px;
}

.check i {
    font-size: 18px;
}


.delivery-information {
    margin: 5em auto;
    width: 90%;
    border-radius: 8px;
    padding: 2em;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1),
        0 5px 12px -2px rgba(0, 0, 0, 0.1),
        0 18px 36px -6px rgba(0, 0, 0, 0.1);
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

.form-container {
    display: flex;
    justify-content: center;
}

.delivery-information form {
    width: 100%;
}


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

.price h1 {
    margin: 1rem 0;
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    color: #333;
}

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
    margin-top: 3rem;
    width: fit-content;
    padding: 1rem 3rem;
    font-size: 22px;
    background-color: #056cb7;
}

.price button:hover {
    background-color: #0468af;
    cursor: pointer;
}
.news-letter{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    color: #333;
    font-size: 1rem;
    margin-top: 8px;
}
.news-letter input{
    margin: 8px;
}

/* Modal (pop-up rutan för order bekräftelse) */
.modal {
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    overflow: hidden;
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
}

.modal-content h2 {
    margin-bottom: 1rem;
}

/* Modal close button */
.close-button {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close-button:hover,
.close-button:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* simpel responsivitet */
/* Media query for screens larger than 1200px */
@media (min-width: 1201px) {
    .payment-container form .payment-methods {
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
        width: 80vw;
    }

    .payment-container {
        margin-top: 2rem;
    }

    .payment-methods label {
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
        margin: 2rem 0 5rem 0;
        padding: 16px;
        width: 100%;
    }
}
</style>