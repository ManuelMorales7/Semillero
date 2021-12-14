import {correspondencia} from "./activitys.js"

showActivitys();
asignandoEventos();

function showActivitys(){    
    correspondencia.forEach(activity =>{
        let divContainerTarjeta = creaDivTarjeta();        
        document.querySelector('.activitysFound').append(divContainerTarjeta);
        creaContenidotarjetas(divContainerTarjeta, activity);
    })
}

function creaDivTarjeta() {
    let divContainer = document.createElement('div');
    divContainer.classList.add('activity');
    divContainer.classList.add('visible');
    return divContainer;
}

function creaContenidotarjetas(divContainer, activity) {
    divContainer.innerHTML = `                            
    <h3 class="noTitle">${activity.correspondencia}</h3>
    <div class="secondLevelCard">
        <span style="font-weight: 800;">ID : </span><span class="noTitle idAct">${activity.id}</span><span style="font-weight: 800;"> Fecha vencimiento: </span> ${changeDateColorWhenItsExpired(activity.date, activity.time)}
    </div>
    <div class="thirdLevelCard hidden">
        <span style="font-weight: 800;">Radicado: </span><span class="noTitle">${activity.radicado}</span>
    </div>
    <div class="fourthLevelCard hidden">
        <span style="font-weight: 800;">Actividad: </span><span class="noTitle activitySpan">${activity.actividad}</span>
    </div>
    `;
}

function changeDateColorWhenItsExpired(date, hour){
    let timeStamp = new Date(date.split('/')[2], date.split('/')[1] - 1, date.split('/')[0]);
    return timeStamp < Date.now() ? `<span style="color: red" class="noTitle">${hour} - ${date}</span>` : `<span class="noTitle">${hour} - ${date}</span></span>`;
}

function asignandoEventos(){
    selectActivity();    
    let input = document.querySelector('.inputSearch input');    
    input.addEventListener('keyup', ()=>filterByAnyParameter(input))
}

function selectActivity(){
    document.querySelectorAll('.activitysFound .activity').forEach((activity, index) =>{
        activity.addEventListener('click', ()=>{
            showContainersWhenActivityWasSelect()
            removeClass('select'); 
            removeClass('previousSibling');             
            removePreviusMarginIfExist(activity, index);
            activity.classList.add('select');  
            addSteps(activity);
            showDescriptores(activity)                   
        })
    })
}

function removeClass(className) {
    document.querySelectorAll('.activitysFound .activity').forEach(element => element.classList.remove(className));
}

function removePreviusMarginIfExist(activity, index){
    index > 0 ? activity.previousElementSibling.classList.add('previousSibling') : null;
}

function filterByAnyParameter(input){
    document.querySelectorAll('.activitysFound .activity.visible').forEach(container =>{       
        filtrarPorConincidenciaTextoDelTitulo(container, input); 
        filterByDiv('.secondLevelCard', container, input)   
        // filterByDiv('.thirdLevelCard', container, input)  
        // filterByDiv('.fourthLevelCard', container, input)
        // testFilter(container, input);       
        showAllActivitysWhenInputIsEmpty(input, container); 
    });
}


// function testFilter(container, input){
//     let contador = 0;
//     container.querySelectorAll('.noTitle').forEach(element=>{
//         element.textContent.toLowerCase().indexOf(input.value.toLowerCase()) > -1 ? contador++:null;
//     })
//     contador === 0 ? container.classList.remove('invisible') : container.classList.add('invisible');
// }


function showAllActivitysWhenInputIsEmpty(input, container) {
    input.value === '' ? container.classList.remove('invisible') : null;
}

function filtrarPorConincidenciaTextoDelTitulo(container, input) {
    container.querySelector('h3').textContent.toLowerCase().indexOf(input.value.toLowerCase()) > -1 ? (container.classList.remove('invisible')) : (container.classList.add('invisible'));
}

function filterByDiv(classParent, container, input){
    container.querySelectorAll(classParent + ' .noTitle').forEach(element =>{
        element.textContent.toLowerCase().indexOf(input.value.toLowerCase()) > -1 ? container.classList.remove('invisible') : container.classList.add('invisible')
    })
}

events();

function events(){
    let input = document.querySelector('.entryText input');
    input.addEventListener('keyup', function(event){
        event.keyCode === 13 
        ? (filterByCorrespondence(input), addFilterBellowToTheInput(input), input.value = '')
        : null;        
    })
}

function filterByCorrespondence(input){
    document.querySelectorAll('.activity h3').forEach(correspondence =>{
        correspondence.textContent.toLowerCase().indexOf(input.value.toLowerCase()) > -1 
        ? (correspondence.parentElement.classList.remove('invisible'), correspondence.parentElement.classList.add('visible')) 
        : (correspondence.parentElement.classList.add('invisible'), correspondence.parentElement.classList.remove('visible'));
    })
}

function addFilterBellowToTheInput(input){
    let p = document.createElement('p');
    document.querySelector('.filters').append(p);
    p.innerHTML = `
    <small style="font-weight:800">${input.value} <img class="editIcon" src="/images/editIcon.svg"> <img class="removeIcon" src="/images/removeIcon.svg" alt=""></small>    
    `;
    removeFilter();
    editFilter(input.value, input);
}

function removeFilter(){
    document.querySelectorAll('.removeIcon').forEach(element => element.addEventListener('click', ()=> element.parentElement.remove()))
}

function editFilter(value, input){
    document.querySelectorAll('.editIcon').forEach(element =>{
        element.addEventListener('click', ()=>{
            input.value = value;
            selectFilterToEdit(element, input)
        })
    })   
}

function selectFilterToEdit(element, input){
    input.addEventListener('keyup', function(event){
        event.keyCode === 13 ? element.parentElement.textContent = input.value : null;
    }) 
}


cleanFilter();

function cleanFilter(){
    let input = document.querySelector('.entryText input');
    document.querySelector('.entryText button').addEventListener('click', ()=>{
        filterByCorrespondence(input)
    })
}

selectTab();

function selectTab(){
    document.querySelectorAll('.tabs span').forEach(span=>{
        span.addEventListener('click', ()=>{
            document.querySelectorAll('.tabs span').forEach(element => element.classList.remove('focus'))   
            span.classList.add('focus');  
            document.querySelector('.content h1').textContent = span.textContent;
        })
    })
}

addPerson()

function addPerson(){
    let input = document.querySelector('.redistribuir input');
    input.addEventListener('keyup', function(event){
        event.keyCode === 13 ? createFilterPerson(input) : null
    })
}

function createFilterPerson(input){
    let text = document.createElement('span');
    text.textContent = input.value;   
    let removeIcon = document.createElement('img');
    removeIcon.setAttribute('src', '/images/removeIcon.svg');
    removeIcon.classList.add('removeIconPerson')
    text.append(removeIcon)
    document.querySelector('.redistribuir').append(text)
    input.value = '';
    removePerson();    
    countPersons();
}

function removePerson(){
    document.querySelectorAll('.redistribuir img').forEach(element =>{
        element.addEventListener('click', ()=>element.parentElement.remove())
    })
}

function countPersons(){
    document.querySelectorAll('.redistribuir span').forEach((element, index) =>{
        index > 4 ? (element.classList.add('invisible'), addPlusIcon()): null;
    })
}

function addPlusIcon(){
    let text = document.createElement('span');
    text.textContent = `y 1 más` 
    document.querySelector('.redistribuir').append(text);
}

function addSteps(activity){
    document.querySelector('.pasos').innerHTML = `
    <span style="font-weight: 800;">Paso: </span>1<span></span>
    <span style="font-weight: 800;">Correspondencia: </span><span style="color: #4972AE">${activity.querySelector('h3').textContent}</span>
    <span style="font-weight: 800;">Id: </span>${activity.querySelector('.idAct').textContent}<span></span>
    <span style="font-weight: 800;">Actividad: </span><span>${activity.querySelector('.activitySpan').textContent}</span>
    `;
}

function showDescriptores(activity){
    let id = activity.querySelector('.idAct').textContent;
    correspondencia.forEach(element => element.id === id.trim() ? countDescriptores(element):null)  
}

function countDescriptores(element){
    document.querySelector('.divEntry').innerHTML = ``
    element.descriptores.forEach(element=>{
        let container = document.createElement('div');
        container.classList.add('input');
        document.querySelector('.divEntry').append(container);
        container.innerHTML = `
            <p>${element}</p>
            <input type="text"  id="">
        `;
    })
}

hideContainers();

function hideContainers(){
    document.querySelectorAll('.rightContainer div').forEach((element, index)=>{
        index > 1 ? element.style.visibility = "hidden" : null;
    })
    document.querySelectorAll('.rightContainer div')[0].style.visibility = "visible"
}

function showContainersWhenActivityWasSelect(){
    document.querySelectorAll('.rightContainer div').forEach((element, index)=>{
        index != 0 ? element.style.visibility = "visible": null;
    })
}

function remomveDoc(){
    document.querySelectorAll('.listAnexos span img').forEach(element =>{
        element.addEventListener('click', ()=>{
            element.parentElement.remove()
        })
    })
}

addDoc();

function addDoc(){
    document.querySelector('.addDocs').addEventListener('click', ()=>{
        // <span style="color: #4972AE;" >Carga masiva de Documentos <img src="/images/removeIcon.svg" alt=""></span>
        let span = document.createElement('span');
        span.classList.add('filterAnexos');
        let removeIcon = document.createElement('img');
        removeIcon.setAttribute('src', '/images/removeIcon.svg');
        span.setAttribute('style', 'color: #4972AE');
        span.textContent = 'Carga masiva de Documentos';
        document.querySelector('.listAnexos').append(span)
        span.append(removeIcon);
        remomveDoc();
    })
}

