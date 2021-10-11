import { nivelesDeAcceso } from "./NivelesDeAceso.js";
import { AccesoTotal } from "./AccesoTotal.js"; 
import { CoordinadoraDeCalidad } from "./CoordinadoraDeCalidad.js";
const searchInput = document.querySelector('.search input');
const lists = document.querySelector('.lists');
const container = document.querySelector('.container');
let coordinadorDeCalidad;

localStorage.removeItem('Contador', 0);
localStorage.removeItem('ContadorDefault', 0);

searchInput.value.trim() == '' ? showListDefault() : console.log('hola'); 

searchInput.addEventListener('keyup', () => {
    if (searchInput.value.trim() == '') {
        document.querySelector('.listsDefault').classList.remove('hidden');
        document.querySelector('.listsSearch').classList.add('hidden');
        localStorage.setItem('ContadorDefault', 0);
        if (localStorage.getItem('ContadorDefault') == null){
            showListDefault();
        }
    }else{
        document.querySelector('.listsDefault').classList.add('hidden');
        document.querySelector('.listsSearch').classList.remove('hidden');
        let inputValue = searchInput.value.trim();        
        listsSearch(inputValue);        
    } 
        
    let listSearch = document.querySelectorAll('.listsSearch div p');

    listSearch.forEach(list => {
        if (list.textContent == 'Coordinadora de Calidad') {
            coordinadorDeCalidad = list;  
        }
    });

    coordinadorDeCalidad.addEventListener('click', () =>{
       
    })

})

function showListDefault(){
    nivelesDeAcceso.forEach(row => {
        const rowList = document.createElement('div');
        rowList.classList.add('rowList');
        lists.append(rowList);
   
        const description = document.createElement('p');
        description.textContent = row.Descripcion;
        rowList.append(description);
    
        const amount = document.createElement('span');
        amount.textContent = row.Cantidad;
        rowList.append(amount);
    });
}

const rowList = lists.querySelectorAll('div');

rowList.forEach(row =>{
    row.addEventListener('click', ()=>{
        rowList.forEach(row => row.classList.remove('selected'))
        row.classList.add('selected');       
    })
})

function listsSearch(inputValue){

    if (localStorage.getItem('Contador') == null) {
        localStorage.setItem('Contador', 0);   
        nivelesDeAcceso.forEach(row => {
            const rowList = document.createElement('div');
            rowList.classList.add('rowList');
            document.querySelector('.listsSearch').append(rowList);
        
            const description = document.createElement('p');
            description.textContent = row.Descripcion;
            rowList.append(description);
        
            const amount = document.createElement('span');
            amount.textContent = row.Cantidad;
            rowList.append(amount);
        });
    }
    
    let lists = document.querySelectorAll('.listsSearch div');
    lists.forEach(list => {
        let desc = list.textContent;
        desc.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 ? list.classList.add('visible') : list.classList.remove('visible');
    });
}


let listsDefault = document.querySelectorAll('.listsDefault div p');
let AccesoTotalDescDefault;
let coordinadorDeCalidadDefault;
listsDefault.forEach(list => {
    if (list.textContent == 'Acceso Total - Descripción') {
        AccesoTotalDescDefault = list;     
    }

    if (list.textContent == 'Coordinadora de Calidad') {
        coordinadorDeCalidadDefault = list;  
    }
})

if(localStorage.getItem('ContadorObjeto') == null){
    localStorage.setItem('ContadorObjeto', 0);
    localStorage.setItem('AccesoTotal', JSON.stringify(AccesoTotal));
    localStorage.setItem('CoordinadoraDeCalidad', JSON.stringify(CoordinadoraDeCalidad)) 
};

AccesoTotalDescDefault.parentElement.addEventListener('click', () => {
    document.querySelector('section').classList.add('visible');
    document.querySelector('.photo').classList.add('invisible');
    document.querySelectorAll('.coordinadora').forEach(element => element.classList.add('hidden'));
    document.querySelectorAll('.acceso').forEach(element => element.classList.remove('hidden'));
    showTableAcceso();
    checkAll();
    unCheckAll();
    inputListner();
    document.querySelector('.defaultAccesoTotal').classList.remove('hidden');
    document.querySelector('.defaultCoordinadoraDeCalidad').classList.add('hidden');
});

coordinadorDeCalidadDefault.parentElement.addEventListener('click', () => {
    document.querySelector('section').classList.add('visible');
    document.querySelector('.photo').classList.add('invisible');
    document.querySelectorAll('.acceso').forEach(element => element.classList.add('hidden'));
    document.querySelectorAll('.coordinadora').forEach(element => element.classList.remove('hidden'));
    showCoordinadorDeCalidad();
    checkAllCoordinarona();
    unCheckAllCoordinarona();
    inputListnerCoordinadora();
    document.querySelector('.defaultAccesoTotal').classList.add('hidden');
    document.querySelector('.defaultCoordinadoraDeCalidad').classList.remove('hidden');
    
});


const tableDefault = document.querySelector('table.defaultAccesoTotal');
const tableDefaultCoordinoraDeCalidad = document.querySelector('table.defaultCoordinadoraDeCalidad');

function showTableAcceso(){
    let arrayCopy = localStorage.getItem('AccesoTotal');
    JSON.parse(arrayCopy).forEach((row, index) => {
    let tr = document.createElement('tr');
    tableDefault.append(tr);

    tr.innerHTML = '<td class="check"><input type="checkbox"></td>';

    let tdNombre = document.createElement('td');
    tdNombre.textContent = row.Nombre;
    tr.append(tdNombre);

    let tdLogin = document.createElement('td');
    tdLogin.textContent = row.Loggin;
    tr.append(tdLogin);

    let tdHomologacion = document.createElement('td');
    row.Homologacion === null ? showHomologacion(index, tdHomologacion, tr) : showPendiente(tdHomologacion, tr, index);  
    tdHomologacion.classList.add('homologacion')
    tr.append(tdHomologacion);
});
}

function showCoordinadorDeCalidad(){
    let arrayCopy = localStorage.getItem('CoordinadoraDeCalidad');
    JSON.parse(arrayCopy).forEach((row, index) => {
    let tr = document.createElement('tr');
    tableDefaultCoordinoraDeCalidad.append(tr);

    tr.innerHTML = '<td class="check"><input type="checkbox"></td>';

    let tdNombre = document.createElement('td');
    tdNombre.textContent = row.Nombre;
    tr.append(tdNombre);

    let tdLogin = document.createElement('td');
    tdLogin.textContent = row.Loggin;
    tr.append(tdLogin);

    let tdHomologacion = document.createElement('td');
    row.Homologacion === null ? showHomologacionCoordinadora(index, tdHomologacion, tr) : showPendienteCoordinadora(tdHomologacion, tr, index);  
    tdHomologacion.classList.add('homologacion')
    tr.append(tdHomologacion);
});
}

function checkChanges(){    
    let array = JSON.parse(localStorage.getItem('AccesoTotal'));
    array.forEach((row, index) => {
        row.Homologacion === null ? showChangesNull(index) : showChangesPendiente(index);
    })
}

function checkChangesCoordinadora(){    
    let array = JSON.parse(localStorage.getItem('CoordinadoraDeCalidad'));
    array.forEach((row, index) => {
        row.Homologacion === null ? showChangesNullCoordinadora(index) : showChangesPendienteCoordinador(index);
    })
}

function showChangesPendiente(index){
    let tds = tableDefault.querySelectorAll('.homologacion');
    tds[index].innerHTML = "Pendiente";
    tds[index].style.color = "#BEC1C8";  
}

function showChangesPendienteCoordinador(index){
    let tds = tableDefaultCoordinoraDeCalidad.querySelectorAll('.homologacion');
    tds[index].innerHTML = "Pendiente";
    tds[index].style.color = "#BEC1C8";  
}


function showChangesNull(index){
    let tds = tableDefault.querySelectorAll('.homologacion')
    let str = JSON.parse(localStorage.getItem('AccesoTotal'))[index].Nombre;
    let array = str.split(' ');

    if(array.length == 3 || array.length == 4){  
        tds[index].innerHTML = array[0].charAt(0)+array[1].charAt(0)+array[2];
        tds[index].style.color = "#3BBE98";
    }

    if(array.length == 2){
        tds[index].innerHTML = array[0].charAt(0)+array[1];
        tds[index].style.color = "#3BBE98";
    }
    
    if(array.length == 1){
        tds[index].innerHTML = array[0];
        tds[index].style.color = "#3BBE98";
    }
}

function showChangesNullCoordinadora(index){
    let tds = tableDefaultCoordinoraDeCalidad.querySelectorAll('.homologacion')
    let str = JSON.parse(localStorage.getItem('CoordinadoraDeCalidad'))[index].Nombre;
    let array = str.split(' ');

    if(array.length == 3 || array.length == 4){  
        tds[index].innerHTML = array[0].charAt(0)+array[1].charAt(0)+array[2];
        tds[index].style.color = "#3BBE98";
    }

    if(array.length == 2){
        tds[index].innerHTML = array[0].charAt(0)+array[1];
        tds[index].style.color = "#3BBE98";
    }
    
    if(array.length == 1){
        tds[index].innerHTML = array[0];
        tds[index].style.color = "#3BBE98";
    }
    
}

function showPendiente(tdHomologacion, tr, index){
    showInputChecked(index);
    tdHomologacion.textContent = "Pendiente";
    tdHomologacion.style.color = "#BEC1C8";
    tr.append(tdHomologacion);
}

function showPendienteCoordinadora(tdHomologacion, tr, index){
    showInputCheckedCoordinadora(index);
    tdHomologacion.textContent = "Pendiente";
    tdHomologacion.style.color = "#BEC1C8";
    tr.append(tdHomologacion);
}

function showHomologacion(index, tdHomologacion, tr){
    let str = JSON.parse(localStorage.getItem('AccesoTotal'))[index].Nombre;
    let array = str.split(' ');

    if(array.length == 3 || array.length == 4){  
        tdHomologacion.textContent = array[0].charAt(0)+array[1].charAt(0)+array[2];
    }

    if(array.length == 2){
        tdHomologacion.textContent = array[0].charAt(0)+array[1]
    }
    
    if(array.length == 1){
        tdHomologacion.textContent = array[0]
    }

    tdHomologacion.style.color = "#3BBE98";
    tr.append(tdHomologacion)
}

function showHomologacionCoordinadora(index, tdHomologacion, tr){
    let str = JSON.parse(localStorage.getItem('CoordinadoraDeCalidad'))[index].Nombre;
    let array = str.split(' ');

    if(array.length == 3 || array.length == 4){  
        tdHomologacion.textContent = array[0].charAt(0)+array[1].charAt(0)+array[2];
    }

    if(array.length == 2){
        tdHomologacion.textContent = array[0].charAt(0)+array[1]
    }
    
    if(array.length == 1){
        tdHomologacion.textContent = array[0]
    }

    tdHomologacion.style.color = "#3BBE98";
    tr.append(tdHomologacion)
}


function showInputChecked(index){
    document.querySelectorAll('.tableDefault input')[index].checked = true;
}

function showInputCheckedCoordinadora(index){
    document.querySelectorAll('.defaultCoordinadoraDeCalidad input')[index].checked = true;
}

function inputListner(){
    let arr = JSON.parse(localStorage.getItem('AccesoTotal'));
    tableDefault.querySelectorAll('input').forEach((input, index ) =>{
        input.addEventListener('click', () => (input.checked === true ? (arr[index].Homologacion = "Pendiente", localStorage.setItem('AccesoTotal', JSON.stringify(arr))): null ));
    });

    tableDefault.querySelectorAll('input').forEach((input, index ) =>{
        input.addEventListener('click', () => (input.checked === false ? (arr[index].Homologacion = null, localStorage.setItem('AccesoTotal', JSON.stringify(arr))): null ));
    });

    tableDefault.querySelectorAll('input').forEach(input =>{
        input.addEventListener('click', checkChanges);
    })
}

function inputListnerCoordinadora(){
    let arr = JSON.parse(localStorage.getItem('CoordinadoraDeCalidad'));
    tableDefaultCoordinoraDeCalidad.querySelectorAll('input').forEach((input, index ) =>{
        input.addEventListener('click', () => (input.checked === true ? (arr[index].Homologacion = "Pendiente", localStorage.setItem('CoordinadoraDeCalidad', JSON.stringify(arr))): null ));
    });

    tableDefaultCoordinoraDeCalidad.querySelectorAll('input').forEach((input, index ) =>{
        input.addEventListener('click', () => (input.checked === false ? (arr[index].Homologacion = null, localStorage.setItem('CoordinadoraDeCalidad', JSON.stringify(arr))): null ));
    });

    tableDefaultCoordinoraDeCalidad.querySelectorAll('input').forEach(input =>{
        input.addEventListener('click', checkChangesCoordinadora);
    })
}

const checkAllButton = document.querySelector('.checkAll');
const unCheckAllButton = document.querySelector('.unCheckAll');
const checkAllButtonCoordinadora = document.querySelector('.checkAllCoordinadora');
const unCheckAllButtonCoordinadora = document.querySelector('.unCheckAllCoordinadora');

function checkAll(){
    const checkBoxDefault = tableDefault.querySelectorAll('input');
    checkAllButton.addEventListener('click', ()=>{
        checkBoxDefault.forEach(input =>input.checked = true);
        let array = JSON.parse(localStorage.getItem('AccesoTotal'));
        array.forEach(row => row.Homologacion = "Pendiente");
        localStorage.setItem('AccesoTotal', JSON.stringify(array));
        checkChanges();
    });
}

function checkAllCoordinarona(){
    const checkBoxDefaultCoordinadora = tableDefaultCoordinoraDeCalidad.querySelectorAll('input');
    checkAllButtonCoordinadora.addEventListener('click', ()=>{
        checkBoxDefaultCoordinadora.forEach(input =>input.checked = true);
        let array = JSON.parse(localStorage.getItem('CoordinadoraDeCalidad'));
        array.forEach(row => row.Homologacion = "Pendiente");
        localStorage.setItem('CoordinadoraDeCalidad', JSON.stringify(array));
        checkChangesCoordinadora();
    });
}

function unCheckAllCoordinarona(){
    const checkBoxDefaultCoordinadora = tableDefaultCoordinoraDeCalidad.querySelectorAll('input');
    unCheckAllButtonCoordinadora.addEventListener('click', ()=>{
        checkBoxDefaultCoordinadora.forEach(input =>input.checked = false);
        let array = JSON.parse(localStorage.getItem('CoordinadoraDeCalidad'));
        array.forEach(row => row.Homologacion = null);
        localStorage.setItem('CoordinadoraDeCalidad', JSON.stringify(array));
        checkChangesCoordinadora();
    });
}

function unCheckAll(){
    const checkBoxDefault = tableDefault.querySelectorAll('input');
    unCheckAllButton.addEventListener('click', ()=>{
        checkBoxDefault.forEach(input =>input.checked = false);
        let array = JSON.parse(localStorage.getItem('AccesoTotal'));
        array.forEach(row => row.Homologacion = null);
        localStorage.setItem('AccesoTotal', JSON.stringify(array))
        checkChanges();
    });
}


