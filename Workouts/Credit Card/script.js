const firstName = document.querySelector('.firstName-input');
const lastName = document.querySelector('.lastName-input');
const cardNumber = document.querySelector('.cardNumber-input');
const cvc = document.querySelector('.cvc-input');
const expiration = document.querySelector('.expiration-input');
const submit = document.querySelector('.submit');
const card = document.querySelector('.card');


card.addEventListener('click', ()=>{
    card.classList.toggle('active');
})

card.addEventListener('click', () =>{
    document.querySelector('.frontCard').classList.toggle('flipped')
    document.querySelector('.backCard').classList.toggle('flipped')
});

firstName.addEventListener('input', ()=>{
    const firstNameValue = firstName.value.trim();
    if(firstNameValue.length < 7){
        document.querySelector('.firstNameText').innerText = firstNameValue;   
    }
});

lastName.addEventListener('input', ()=>{
    const lastNameValue = lastName.value.trim();
    if(lastNameValue.length < 10){
        document.querySelector('.lastNameText').innerText = lastNameValue;     
    }
});

cardNumber.addEventListener('input', ()=>{
    const cardNumberValue = cardNumber.value.trim();
    document.querySelector('.numberCard').innerText = cardNumberValue;
});

expiration.addEventListener('input', ()=> {
    const expirationValue = expiration.value.trim();
    document.querySelector('.dateExpiration').innerText = expirationValue;
});

cvc.addEventListener('input', ()=> {
    const cvcValue = cvc.value.trim();
    if(cvcValue.length < 4){
        document.querySelector('.cvcCode').innerText = cvcValue;
    }
});

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    checkInputs();
})


function checkInputs(){
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const cardNumberValue = cardNumber.value.trim();
    const cvcValue = cvc.value.trim();
    const expirationValue = expiration.value.trim();

    if(firstNameValue === ''){
        setErrorFor(firstName, 'First Name cannot be empty');
    }else if(!isName(firstNameValue)){
        setErrorFor(firstName, 'Looks like this is not a valid First Name');
    }else{
        setSuccessFor(firstName); 
    }

    if(lastNameValue === ''){
        setErrorFor(lastName, 'Last Name cannot be empty');
    }else if(!isName(lastNameValue)){
        setErrorFor(lastName, 'Looks like this is not a valid Last Name');
    }else{
        setSuccessFor(lastName);          
    }

    if(cardNumberValue === ''){
        setErrorFor(cardNumber, 'Credit card number cannot be empty');
    }else if(!isMasterCard(cardNumberValue)){
        setErrorFor(cardNumber, 'Looks like this is not a master card number');
    }else{
        setSuccessFor(cardNumber);          
    }

    if(cvcValue === ''){
        setErrorFor(cvc, 'CVC cannot be empty');
    }else if(!isNumber(cvcValue)){
        setErrorFor(cvc, 'Looks like this is not a valid cvc');
    }else{
        setSuccessFor(cvc);          
    }          
    
    if(expirationValue === ''){
        setErrorFor(expiration, 'Expiration date cannot be empty');
    }else if(!isDate(expirationValue)){
        setErrorFor(expiration, 'Looks like this is not a valid cvc');
    }else{
        setSuccessFor(expiration);          
    }   

    function setErrorFor(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = "entry error";
        small.innerText = message; 
    }

    function setSuccessFor(input){
        const formControl = input.parentElement;
        formControl.className = 'entry succes';
    }

    function isMasterCard(creditCardNumber){
        return /^5[1-5]\d{2}\s?\d{4}\s?\d{4}\s?\d{4}$/.test(creditCardNumber);
    }

    function isNumber(cvc){
        return /^([0-9]){3}$/.test(cvc);
    }

    function isDate(date){
        return /^[0-9 /]+$/i.test(date);
    }

    function isName(nameUser){
       return /^[a-z ,.'-]+$/i.test(nameUser);   
    }
}
