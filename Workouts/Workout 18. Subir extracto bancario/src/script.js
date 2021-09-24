const divSlider = document.querySelector('.sliderContainer');
const rightContainer = document.querySelector('.rightContainer');
const container = document.querySelector('.container');
const topContainer = document.querySelector('.topContainer');
const textDate = document.querySelector('.date');
const banksList = document.querySelector('.banco select');
const currencyList = document.querySelector('.moneda select');
const inputCuenta = document.querySelector('.cuenta input');
const inputBanco = document.querySelector('.banco select');
const inputMes = document.querySelector('.mes input');
const inputMoneda = document.querySelector('.moneda select');
const inputFile = document.querySelector('.containerLeft input');
const submit = document.querySelector('form input[type="submit"]');
const banks = ["Av-Villas", "Davivienda", "ScotiaBank", "Banco BBVA", "Banco Santander", "BanColombia"];
const currencys = ["Pesos Colombianos", "Dolares", "Soles", "Pesos Argentinos", "Pesos Chilenos", "Bitcoin", "Etherium"];
const fecha = new Date();

function checkInputs(){
    let inputCuentaValue = inputCuenta.value.trim();
    let inputBancoValue = inputBanco.value.trim();
    let inputMesValue = inputMes.value.trim();
    let inputMonedaValue = inputMoneda.value.trim();

    if(inputCuentaValue === ''){
        setErrorFor(inputCuenta);        
    }else{
        setSuccessFor(inputCuenta);
    }

    if(inputBancoValue === ''){
        setErrorFor(inputBanco);
    }else{
        setSuccessFor(inputBanco);
    }

    if(inputMesValue === ''){
        setErrorFor(inputMes);
    }else{
        setSuccessFor(inputMes);
    }

    if(inputMonedaValue === '' || !isNumber(inputMonedaValue)){
        setErrorFor(inputMoneda);
    }else{
        setSuccessFor(inputMoneda);
    }
    
    function setErrorFor(input){
        const inputContainer = input.parentElement;
        const img = inputContainer.querySelector('img');
        img.classList.add('visible');     
    }

    function setSuccessFor(input){
        const inputContainer = input.parentElement;
        const img = inputContainer.querySelector('img');
        img.classList.remove('visible');  
    }

    function isNumber(cuenta){
        return /^\d+$/.test(cuenta);
    };
}

banks.forEach(bank => {
    let option = document.createElement('option');
    option.textContent = bank;
    banksList.append(option);    
})

currencys.forEach(currency =>{
    let option = document.createElement('option');
    option.textContent = currency;
    currencyList.append(option);   
})


setInterval(
    function updateDate(){
        let minutes;
        let seconds;
        if(fecha.getMinutes() >= 0 && fecha.getMinutes() <= 9){
            minutes = "0"+fecha.getMinutes();
        }else{
            minutes = fecha.getMinutes();
        } 
        
        if(fecha.getSeconds() >= 0 && fecha.getSeconds() <= 9){
            seconds = "0"+fecha.getSeconds();
        }else{
            seconds = fecha.getSeconds();
        }

        textDate.innerHTML = fecha.toDateString() + " / " + fecha.getHours() + ":" + minutes + "-" + seconds;
}, 1000);


function anyElement(tipo, clase, valor){
    let name = document.createElement(tipo);
    name.setAttribute(clase, valor);
    return name;
}

let label = anyElement('label', 'class', 'switch');
let input = anyElement('input', 'type', 'checkbox');
input.setAttribute('id', 'check');
let span = anyElement('span', 'class', 'slider dot');

divSlider.append(label, input, span);

span.addEventListener('click', ()=>{
    input.checked == false ? input.checked = true : input.checked = false;
    input.checked == true ? rightContainer.classList.toggle('selected') : rightContainer.classList.remove('selected');

    if(input.checked == true){
        container.style.width = '350px';
        container.style.transition = '.4s';
        topContainer.style.borderRadius = '10px 10px 0px 0px';
        submit.style.left = '73%'
    }else if(input.checked == false){
        container.style.width = '700px';
        container.style.transition = '.4s';
        topContainer.style.borderRadius = '10px 0px 0px 0px';
        submit.style.left = '185%'
    }

})

inputFile.addEventListener('input', (e) =>{
    let reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function(){
        let preview = document.querySelector('.preview');
        image = document.createElement('img');
        image.src = reader.result;
        preview.innerHTML = '';
        preview.append(image);
        image.style.width = '100%';
        image.style.height = '100%';
    }
})

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    checkInputs();
})



