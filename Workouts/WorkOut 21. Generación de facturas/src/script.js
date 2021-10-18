const btnConsultar = document.querySelector('.consultarBtn');
const fechaInical = document.querySelector('.fechaInical input');
const fechaFinal = document.querySelector('.fechaFinal input');
const ordenFacturacionInput = document.querySelector('.ordenFacturacion input');
const clienteInput = document.querySelector('.cliente input');
const modeloDeNegocioInput = document.querySelector('.modeloDeNegocio input');
const consultarBtn = document.querySelector('.consultarBtn');
const inputsFiltros = document.querySelectorAll('.filtros input');
const select = document.querySelector('.tarjetaFiltro select');
const inputsFecha = document.querySelectorAll('.inputsFechas input')
const filtros = document.querySelector('.filtros');
const tarjeta = document.querySelector('.inputsFechas');
const loader = document.querySelector('.loaderCcontainer');
const table = document.querySelector('.divTable table');
let actualCurrency;
import {monedas} from "/src/monedas.js";
import {facturas} from "/src/facturas.js";

monedas.forEach(currency =>{
    let string = currency.abreviatura + ' - ' + currency.descripcion;
    let option = document.createElement('option');
    option.textContent = string;
    select.append(option);
});

function getTimeFormat(){
    let arr = [];
    facturas.forEach((factura, index) =>{
        let str = "";
        for (let i = 0; i < 10; i++) {
            str = str + factura.fechaRegistro[i];
        }
        arr.push([arrayDateToTimeStamp(str), index]);        
    });
    return arr;
}

function dateFilter(){
    let arrayDates = getTimeFormat();
    let idDates = [];
    arrayDates.forEach(element =>{
        if (element[0] >= dateToTimeStamp(fechaInical) && element[0] <= dateToTimeStamp(fechaFinal)) {
               idDates.push(element[1])         
        }
    });
    return idDates;
}

function onlyFirstDate(){
    let arrayDates = getTimeFormat();
    let idDates = [];
    arrayDates.forEach(element =>{
        if (element[0] >= dateToTimeStamp(fechaInical)) {
                idDates.push(element[1])         
        }
    });
    return idDates;
}

function onlyLastDate(){
    let arrayDates = getTimeFormat();
    let idDates = [];
    arrayDates.forEach(element =>{
        if (element[0] <= dateToTimeStamp(fechaFinal)) {
                idDates.push(element[1])         
        }
    });
    return idDates;
}

function getBillFirstDate(){
    let ids = onlyFirstDate();
    let idBill = [];
    ids.forEach(id=>{
        idBill.push(facturas[id]);
    });
    return idBill;
}

function getBillLastDate(){
    let ids = onlyLastDate();
    let idBill = [];
    ids.forEach(id=>{
        idBill.push(facturas[id]);
    });
    return idBill;
}

function getIdBill(){
    let ids = dateFilter();
    let idBill = [];
    ids.forEach(id=>{
        idBill.push(facturas[id]);
    });
    return idBill;
}

function filterByInputsValue(){
    let billArray = getIdBill();
    let billArrayFiltered = [];
    let billArrayFilteredTwice = [];
    let billArrayFinal = [];
    let contador = 0;
    console.log(billArray);

    if (fechaInical.value === '' && fechaFinal.value === '') {
        billArray = facturas;
    }

    if (fechaInical.value != '' && fechaFinal.value === '') {
        billArray = getBillFirstDate();
    }

    if (fechaInical.value === '' && fechaFinal.value != '') {
        billArray = getBillLastDate();
    }

    inputsFiltros.forEach(input =>{
        if (input.value != '') {
            if (billArrayFiltered.length === 0) {
                contador++;
                billArray.forEach(row =>{
                    let key = input.dataset['key'];
                    row[key] == input.value ? (billArrayFiltered.push(row), billArrayFilteredTwice.push(row), billArrayFinal.push(row)): null;
                });                
            }else if (billArrayFiltered.length > 0){
                contador++;
                billArrayFilteredTwice = [];
                billArrayFinal = [];
                billArrayFiltered.forEach(row =>{
                    let key = input.dataset['key'];
                    row[key] == input.value ? (billArrayFilteredTwice.push(row), billArrayFinal.push(row)): null;
                }); 
            }else{
                contador++;
                billArrayFinal = [];
                billArrayFilteredTwice.forEach(row =>{
                    let key = input.dataset['key'];
                    row[key] == input.value ? billArrayFinal.push(row) : null;
                });
            }
        }
    });

    contador === 0 ? billArrayFinal = billArray: null;
    console.log(billArrayFinal);
    return billArrayFinal;
}

function showTable(){
    let arrayToShow = filterByInputsValue();
    arrayToShow.forEach(row=>{
        let tr = document.createElement('tr');
        table.append(tr);
        tr.innerHTML = `
        <tr>
            <td class="file td">
                <img src="/design/adobeFile-icon.svg">
                <img src="/design/document-icon.svg">                        
            </td>
            <td class="tdCenter">${row.codigoOrdenDeFacturacion}</td>
            <td>${row.fechaRegistro}</td>
            <td>${row.clienteCodigo} - ${row.clienteNombre}</td>
            <td>${row.modeloNegocio}</td>
            <td class="descripcionTd">${
                row.descripcionOrdenFacturacion.length === 0 ? `""`: 
                (row.descripcionOrdenFacturacion.length > 50 ? row.descripcionOrdenFacturacion.substring(0, 50) + `...` :
                row.descripcionOrdenFacturacion)} 
                </td>
            <td class="tdCenter"><select>
                <option></option>
                <option>5 días</option>
                <option>10 dás</option>
                <option>15 días</option>
                <option>20 dás</option>
                <option>25 días</option>
                <option>30 dás</option>
            </select>
            </td>
            <td>${row.fechaVencimiento}</td>
            <td class="tdCenter">${new Intl.NumberFormat(`${actualCurrency}`, {style: "currency", currency: `${actualCurrency}`}).format(convertCurrency(row.valorTotalACobrar))}</td>
            <td class="acnticipo">${row.valorAnticipo === 0 ? `$0.00` : row.valorAnticipo}</td>
            <td class="valorAnticipo"></td>
            <td class="tdCheckImg"><img src="/design/icon-check.svg"></td>
        </tr>
        `;
    })
}

function convertCurrency(amount){
    let equivalencia
    monedas.forEach(moneda =>{
        if (moneda.abreviatura === actualCurrency) {
            equivalencia = moneda.equivalencia;
        }
    })
    return amount*equivalencia;    
}

function arrayDateToTimeStamp(date){
    date = date.split('-');
    let timeStamp = new Date(date[0], date[1] - 1, date[2])
    return timeStamp.getTime();
}

function dateToTimeStamp(input){
    let date = input.value;
    date = date.split('-');
    let timeStamp = new Date(date[0], date[1] - 1, date[2])
    return timeStamp.getTime();
}

function checkFecha(){
    let date = (dateToTimeStamp(fechaFinal) - dateToTimeStamp(fechaInical));
    return date.toString()[0] === '-' ? true: null;
}

function setErrorForDate(){
    !checkFecha() ? null : (document.querySelectorAll('.inputsFechas .warningError').forEach(element => element.classList.add('visible')), consultarBtn.classList.add('hidden'));
    checkFecha() ? null : (document.querySelectorAll('.inputsFechas .warningError').forEach(element => element.classList.remove('visible')), consultarBtn.classList.remove('hidden'));
}

function checkInputs(){
    const ordenFacturacionInputValue = ordenFacturacionInput.value.trim();
    const clienteInputValue = clienteInput.value.trim();
    const modeloDeNegocioInputValue = modeloDeNegocioInput.value.trim();

    if (ordenFacturacionInputValue === '') {
        setSuccessFor(ordenFacturacionInput);
        consultarBtn.classList.remove('hidden');                
    }else{
        !isNumber(ordenFacturacionInputValue) ? (setErrorFor(ordenFacturacionInput), consultarBtn.classList.add('hidden')) : (setSuccessFor(ordenFacturacionInput), consultarBtn.classList.remove('hidden'));
    }

    if (clienteInputValue === '') {
        setSuccessFor(clienteInput);
    }else{
        !isNumber(clienteInputValue) ? (setErrorFor(clienteInput), consultarBtn.classList.add('hidden')) : (setSuccessFor(clienteInput), consultarBtn.classList.remove('hidden'))
    }

    if (modeloDeNegocioInputValue === '') {
        setSuccessFor(modeloDeNegocioInput);
    }else{
        !isName(modeloDeNegocioInputValue) ? (setErrorFor(modeloDeNegocioInput), consultarBtn.classList.add('hidden')) : (setSuccessFor(modeloDeNegocioInput), consultarBtn.classList.remove('hidden'))
    }
}

function setErrorFor(input){
    let parent = input.parentElement;
    parent.querySelector('img').classList.add('visible');
}

function setSuccessFor(input){
    let parent = input.parentElement;
    parent.querySelector('img').classList.remove('visible');
}

function isNumber(phone){
    return /^\d+$/.test(phone);
}

function isName(nameUser){
    return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(nameUser);   
}

inputsFiltros.forEach(input=>input.addEventListener('input', checkInputs));
inputsFecha.forEach(input =>{
    input.addEventListener('input', () =>{
        setErrorForDate();
    })
})

function hideElements(){
    inputsFecha.forEach(input => input.classList.add('hidden'));
    filtros.classList.add('hidden');
    document.querySelector('.buscarOrdendesDeFacturacion').style.height = '20%';
    document.querySelector('.inputsFechas').style.height = '80%';
    document.querySelector('.buscarOrdendesDeFacturacion h3').style.height = '20%';
    btnConsultar.style.bottom = '30%'
    document.querySelector('.ordenedesDeFacturacion').style.height = '80%';
    document.querySelector('.ordenedesDeFacturacion img').style.display = "none";
    document.querySelector('.ordenedesDeFacturacion p').style.display = "none";
    document.querySelector('.ordenedesDeFacturacion .divTable').classList.remove('hidden');
    document.querySelector('.filtrarBtn').classList.remove('hidden');
}

function createDivs(){
    for (let i = 0; i < inputCheckValue(); i++) {
        let div = document.createElement('div');
        div.classList.add('add', 'contenedorPadre');      
        tarjeta.append(div);                        
    }
}

function inputCheckValue(){
    let contador = 1;
        inputsFiltros.forEach(input =>{
            input.value != '' ? contador+= 1 : null;
        })
    return contador;
}

function howManyDivs(){
    let numberOfDivs = tarjeta.querySelectorAll('.contenedorPadre').length;
    let size = 100 / numberOfDivs;
    numberOfDivs > 3 ? tarjeta.style.width = '75%': null;
    tarjeta.querySelectorAll('.contenedorPadre').forEach(div => {
        div.style.width = `${size}%`;
        div.style.height = '80%';
    });
}

function showDateStart(){
    document.querySelector('.fechaInical').innerHTML = `
    <div class="add">
    <label>Fecha Inicial</label>
    <p class="add">${fechaInical.value}</p>        
    </div>`;    
}

function showDateFinal(){
    document.querySelector('.fecha.fechaFinal').innerHTML = `
    <div class="add">
    <label>Fecha Final</label>
    <p class="add">${fechaFinal.value}</p>        
    </div>`;
}

function showCurrency(index){
    let divs = tarjeta.querySelectorAll('.contenedorPadre');  
    divs[index].innerHTML = `
    <div class="iconAdd">
        <img src="/images/currency-icon.svg">
    </div>
    <div class="newAdd">
        <label>Moneda</label>
        <p class="add">${select.value.split(' ')[0]}</p>
    <div>               
    `;
    actualCurrency = select.value.split(' ')[0];         
}

function showOrdenDeFacturacion(contador){
    let divs = tarjeta.querySelectorAll('.contenedorPadre');
    divs[contador].innerHTML = `
    <div class="iconAdd">
        <img src="/images/sheet-icon.svg">
    </div>
    <div class="newAdd">
        <label>Orden Número</label>
        <p class="add">${ordenFacturacionInput.value}</p>
    </div>  
    `;
}

function showModeloDeNegocio(contador){
    let divs = tarjeta.querySelectorAll('.contenedorPadre');
    divs[contador].innerHTML = `
    <div class="iconAdd">
        <img src="/images/sheet-icon.svg">
    </div>
    <div class="newAdd">
        <label>Modelo Neg.</label>
        <p class="add">${modeloDeNegocioInput.value}</p>
    </div>  
    `;
}

function showCliente(contador){
    let divs = tarjeta.querySelectorAll('.contenedorPadre');
    divs[contador].innerHTML = `
    <div class="iconAdd">
        <img src="/images/user-icon.svg">
    </div>
    <div class="newAdd">
        <label>Cliente</label>
        <p class="add">${clienteInput.value}</p>
    </div>  
    `;
}

function showInputText(){
    let array = [];
    inputsFiltros.forEach(input =>{
        input.value != '' ? array.push(input.parentElement.parentElement.dataset['type']) : null
    });
    
    let contador = 3;
    array.forEach(element =>{
        element === 'OrdenDeFacturacion' ? (showOrdenDeFacturacion(contador), contador++): null;
        element === 'cliente' ? (showCliente(contador), contador++): null;
        element === 'modeloDeNegocio' ? (showModeloDeNegocio(contador), contador++): null;
    })
}

function showNewElements(){  
    if (fechaInical.value != '' && fechaFinal.value != '') {
        showDateStart();
        showDateFinal();
        createDivs();
        howManyDivs();
        showCurrency(2);
        showInputText();             
    }
    
    if (fechaInical.value != '' && fechaFinal.value === '') {
        document.querySelector('.fechaFinal').classList.add('hidden');
        showDateStart();
        createDivs();
        howManyDivs();
        showCurrency(2);  
        showInputText();      
    }
    
    if (fechaInical.value === '' && fechaFinal.value != '') {
        document.querySelector('.fechaInial').classList.add('hidden');
        showDateFinal();
        createDivs();
        howManyDivs();
        showCurrency(2);  
        showInputText();        
    }
    
    if (fechaInical.value === '' && fechaFinal.value === '') {
        document.querySelector('.fechaInial').classList.add('hidden');
        document.querySelector('.fechaFinal').classList.add('hidden');
        createDivs();
        howManyDivs();
        showCurrency(2); 
        showInputText();       
    }
}

function stopLoader(){
    loader.classList.add('invisible');
}

btnConsultar.addEventListener('click', ()=>{
    hideElements();
    showNewElements();
    loader.classList.remove('invisible');
    setTimeout(stopLoader, 300);
    showTable();
});


document.querySelector('.filtrarBtn').addEventListener('click', ()=> location.reload());



