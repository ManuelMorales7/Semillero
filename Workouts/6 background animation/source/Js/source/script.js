function singleElement(tipo){
    let name = document.createElement(tipo);
    return name;
}

function anyElement(tipo, atributo, valor){
    let name = document.createElement(tipo);
    name.setAttribute(atributo, valor);
    return name;
}

function input(atributo1, valor1, atributo2, valor2, atributo3, valor3){
    let name = document.createElement('input');
    name.setAttribute(atributo1, valor1);
    name.setAttribute(atributo2, valor2);
    name.setAttribute(atributo3, valor3);
    return name;
}

function text(tipo, texto){
    let name = document.createElement(tipo);
    name.textContent = texto;
    return name;
}

function textHtml(tipo, texto){
    let name = document.createElement(tipo);
    name.innerHTML = texto;
    return name;
}

function createDiv(clase){
    let name = document.createElement('div');
    name.setAttribute('class', clase);
    return name;
}


let main = singleElement('main');
let section = singleElement('section');
let aside = singleElement('aside');
let article = singleElement('article');
let h1 = text('h1', 'Learn to code by watching others');
let p = text('p', 'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.');
let p_aside = textHtml('p', '<strong>Try it free 7 days</strong> then $20/mo. thereafter');
p_aside.setAttribute('class', 'p_aside')
let form = singleElement('form');
form.setAttribute('id', 'form');

let div1_input = createDiv ('entry');
let div2_input = createDiv ('entry');
let div3_input = createDiv ('entry');
let div4_input = createDiv ('entry');
let div5_input = createDiv ('submit');

let input_name = input('type', 'text', 'class', 'name input', 'placeholder', 'Name');
input_name.setAttribute('id', 'name');
let succesIconUser = anyElement('i', 'class', 'fas fa-check-circle');
let errorIconUser = anyElement('i', 'class', 'fas fa-exclamation-circle');
let smallUser = text('small', 'Error message');

let input_lastName = input('type', 'text', 'class', 'lastName input', 'placeholder', 'Last Name');
input_lastName.setAttribute('id', 'lastName');
let succesIconLname = anyElement('i', 'class', 'fas fa-check-circle');
let errorIconLname = anyElement('i', 'class', 'fas fa-exclamation-circle');
let smallLname = text('small', 'Error message');

let input_email = input('type', 'email', 'class', 'e-mail input', 'placeholder', 'Email Address');
input_email.setAttribute('id', 'e-mail');
let succesIconEmail = anyElement('i', 'class', 'fas fa-check-circle');
let errorIconEmail = anyElement('i', 'class', 'fas fa-exclamation-circle');
let smallEmail = text('small', 'Error message');

let input_pass = input('type', 'password', 'class', 'password input', 'placeholder', 'Password');
input_pass.setAttribute('id', 'password');
let succesIconPassword = anyElement('i', 'class', 'fas fa-check-circle');
let errorIconPassword = anyElement('i', 'class', 'fas fa-exclamation-circle');
let smallPassword = text('small', 'Error message');

let input_submit = input('type', 'submit', 'class', 'btnSend input', 'value', 'CLAIM YOUR FREE TRIAL');
let p_terms = textHtml('a', 'By clickcing the button, you are agree to our <b style="color: #EE878B">Terms and Services</b>');
p_terms.setAttribute('href','https://www.obgyn.com.co/wp-content/themes/medina/medina/images/MODELO-DE-TERMINOS-Y-CONDICIONES.pdf');
p_terms.setAttribute('class', 'agree');
p_terms.setAttribute('target', '_black');

document.body.append(main);
main.append(section);
main.append(aside);
section.append(article);
article.append(h1);
article.append(p);
aside.append(p_aside);
aside.append(form);
form.append(div1_input);
form.append(div2_input);
form.append(div3_input);
form.append(div4_input);
form.append(div5_input);
div1_input.append(input_name);
div1_input.append(succesIconUser);
div1_input.append(errorIconUser);
div1_input.append(smallUser);
div2_input.append(input_lastName);
div2_input.append(succesIconLname);
div2_input.append(errorIconLname);
div2_input.append(smallLname);
div3_input.append(input_email);
div3_input.append(succesIconEmail);
div3_input.append(errorIconEmail);
div3_input.append(smallEmail);
div4_input.append(input_pass);
div4_input.append(succesIconPassword);
div4_input.append(errorIconPassword);
div4_input.append(smallPassword);
div5_input.append(input_submit);
form.append(p_terms);

const nameUser = document.getElementById('name');
const lastName = document.getElementById('lastName');
const email = document.getElementById('e-mail');
const password = document.getElementById('password');

input_submit.addEventListener('click', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const nameValue = nameUser.value.trim();
    const lNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();    

    if(nameValue === ''){
        setErrorFor(nameUser, 'First Name cannot be empty');
    }else if(!isName(nameValue)){
        setErrorFor(nameUser, 'Looks like this is not a valid First Name');
    }else{
        setSuccessFor(nameUser); 
    }

    if(lNameValue === ''){
        setErrorFor(lastName, 'Last Name cannot be empty');
    }else if(!isName(lNameValue)){
        setErrorFor(lastName, 'Looks like this is not a valid Last Name');
    }else{
        setSuccessFor(lastName);          
    }

    if(emailValue === ''){
        setErrorFor(email, 'E-mail cannot be empty');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Looks like this is not a valid email');
    }else{        
        setSuccessFor(email);  
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be empty');
    }else{
        setSuccessFor(password);  
    }
       
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

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isName(nameUser){
   return /^[a-z ,.'-]+$/i.test(nameUser);   
}



