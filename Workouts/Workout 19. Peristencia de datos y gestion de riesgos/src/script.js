import { impactos, probabilidad, tiposDeRiesgos, evaulacionDeRiesgos } from "/src/tablas.js";
const listaSpans = [...document.querySelectorAll('aside span')];
const listaTablas = [...document.querySelectorAll('section table')];
const listaBotonesAgregar = [...document.querySelectorAll('.titulo button')];

if(localStorage.getItem('Contador') == null){
    localStorage.setItem('Contador', 0);
    localStorage.setItem('impactos', JSON.stringify(impactos));
    localStorage.setItem('probabilidad', JSON.stringify(probabilidad));
    localStorage.setItem('tiposDeRiesgos', JSON.stringify(tiposDeRiesgos));
    localStorage.setItem('evaulacionDeRiesgos', JSON.stringify(evaulacionDeRiesgos));
};

let TablaActual = "";

if(localStorage.getItem('TablaActual') == null || 'impacto' ){
    listaTablas.forEach(tabla => tabla.classList.add('invisible'));  
    document.querySelector('.impacto').classList.remove('invisible');  
}

if(localStorage.getItem('TablaActual') == 'probabilidad'){
    listaTablas.forEach(tabla => tabla.classList.add('invisible'));  
    document.querySelector('.probabilidad').classList.remove('invisible');
    document.querySelector('.titulo p').textContent = "Probabilidades";  
}

if(localStorage.getItem('TablaActual') == 'tipo'){
    listaTablas.forEach(tabla => tabla.classList.add('invisible'));  
    document.querySelector('.tipo').classList.remove('invisible');
    document.querySelector('.titulo p').textContent = "Tipo de Riesgos";  
}

if(localStorage.getItem('TablaActual') == 'evaluacion'){
    listaTablas.forEach(tabla => tabla.classList.add('invisible'));  
    document.querySelector('.evaluacion').classList.remove('invisible');
    document.querySelector('.titulo p').textContent = "Evaluación de Riesgos";  
}


listaSpans.forEach(span =>{
    span.addEventListener('click', () =>{
        listaTablas.forEach(tabla => tabla.classList.add('invisible'));
        document.querySelector('.' + span.dataset['table']).classList.remove('invisible'); 
        listaBotonesAgregar.forEach(boton=>boton.classList.add('hidden'));
        document.querySelector('.' +span.dataset['button']).classList.remove('hidden');
        document.querySelector('.titulo p').textContent = span.dataset['titulo'];
        TablaActual = span.dataset['table'];
    });
});

listaBotonesAgregar.forEach(boton =>{
    boton.addEventListener('click', () => {
        document.querySelector('.' + boton.dataset['name']).classList.remove('hidden');
        document.querySelector('.' + boton.dataset['name'] + ' section button').addEventListener('click', () => {
            document.querySelector('.' + boton.dataset['name']).classList.add('hidden');
        });

        let array = JSON.parse(localStorage.getItem(boton.dataset['objeto']));
        let objeto = {};
        document.querySelectorAll('.' + boton.dataset['name'] + ' form input').forEach((input) =>{
            input.disabled = false;
            input.setAttribute("value", "");
            input.addEventListener('input', ()=>{
               let llave = input.dataset['key'];
               objeto[llave]=input.value.trim();
            });
        });
        
        validarInputsAgregar(document.querySelector('.' + boton.dataset['name']), boton.dataset['objeto']);

        let submit = document.querySelector('.' + boton.dataset['name'] + ' button[type="submit"]');  
        submit.addEventListener('click', ()=>{
            array.push(objeto);
            if(TablaActual != ''){
                localStorage.setItem('TablaActual', TablaActual);
            } 
            localStorage.setItem(boton.dataset['objeto'], JSON.stringify(array));
        });
    });
});

function pintarTabla(objeto, tabla, clase){
    let objetoCopia = JSON.parse(localStorage.getItem(objeto));
    objetoCopia.forEach(function callback(row, index){

        let tr = document.createElement('tr');
        tabla.append(tr);

        Object.values(row).forEach(value => {
            let td = document.createElement('td');
            td.textContent = value;
            tr.append(td);
        });

        let tdEventos = document.createElement('td');
        tdEventos.classList.add('tdEventos');

            let imageUpdate = document.createElement('img');
            imageUpdate.setAttribute('src', '/design/pen.png');
            tdEventos.append(imageUpdate);

            let imageDelete = document.createElement('img');
            imageDelete.setAttribute('src', '/design/bin.png');
            tdEventos.append(imageDelete);

        tr.append(tdEventos);

        imageDelete.addEventListener('click', () =>{
            objetoCopia.splice(index, 1);
            localStorage.setItem(objeto, JSON.stringify(objetoCopia));
            if(TablaActual != ''){
                localStorage.setItem('TablaActual', TablaActual);
            }
            location.reload();      
        });
        
        imageUpdate.addEventListener('click', () =>{
            let form;
            let submit;
            let emergente = document.querySelector('.'+ clase);
            emergente.classList.remove('hidden');
            emergente.querySelector('section button').addEventListener('click', () => emergente.classList.add('hidden')); 

            Object.keys(row).forEach((key, index) =>{
                let input = emergente.querySelector('form .'+ key + ' input');
                input.setAttribute('value', Object.values(row)[index]);
            });

            validarInputsEditar(emergente);
            
            Object.keys(row).forEach(key => {
                let formInput = emergente.querySelector('form .'+ key + ' input');               
                formInput.addEventListener('input', () => {
                    row[key] = formInput.value.trim();
                }); 

                form = emergente.querySelector('form .'+ key).parentElement;               
                submit = form.querySelector('button[type="submit"]');
            });    
            
            submit.addEventListener('click', () =>{
                if(TablaActual != ''){
                    localStorage.setItem('TablaActual', TablaActual);
                }                   
                localStorage.setItem(objeto, JSON.stringify(objetoCopia));
            });       
        });
    });
};

pintarTabla('impactos', document.querySelector('.impacto'), 'nuevoImpacto');
pintarTabla('probabilidad', document.querySelector('.probabilidad'), 'nuevaProbabilidad');
pintarTabla('tiposDeRiesgos', document.querySelector('.tipo'), 'nuevoRiesgo');
pintarTabla('evaulacionDeRiesgos', document.querySelector('.evaluacion'), 'nuevaEvaluacion');

function validarInputsEditar(emergente){
    let lista = emergente.querySelectorAll('input')
    emergente.querySelector('.codigo input').disabled = true;
    
    lista.forEach(input =>{
        let data = input.dataset['key'];

        if(data == 'descripcion'){
            validarCamposString(input);
        }

        if(data == 'valor'|| data == 'valorMinimo' || data == 'valorMaximo'){
            validarCamposNumericos(input);
        }

        if(data == 'interno'){
            validarCamposBo(input);
        }

    });
}

function validarInputsAgregar(emergente, array){
    let lista = emergente.querySelectorAll('input');
    
    lista.forEach(input =>{
        let data = input.dataset['key'];
        let inputCodigo = emergente.querySelector('input');   
        validarExistenciaCodigo(array, inputCodigo);
        
        if(data == 'descripcion'){
            validarCamposString(input);
        }

        if(data == 'valor'|| data == 'valorMinimo' || data == 'valorMaximo'){
            validarCamposNumericos(input);
        }

        if(data == 'interno'){
            validarCamposBo(input);
        }
    });
}

function validarCamposNumericos(input){
    input.addEventListener('input', () =>{
        let value = input.value.trim()
        
        if(value === ''){
            setError(input);
        }else if(!isNumber(value)){
            setError(input);
        }else{
            setSuccers(input);
        }

        function isNumber(number){
            return /^\d+$/.test(number);
        };
    });    
}

function validarCamposString(input){

    input.addEventListener('input', () =>{
        let value = input.value.trim()
        
        if(value === ''){
            setError(input);
        }else if(!noNumbers(value)){
            setError(input);
        }else{
            setSuccers(input);
        }

        function noNumbers(string){
            return /^[a-z ,.'-]+$/i.test(string);   
        }
    });
}


function validarCamposBo(input){
    input.addEventListener('input', () =>{
        let value = input.value.trim()
        
        if(value === ''){
            setError(input);
        }

        if(value == 'true' || value == 'false'){
            setSuccers(input);
        }

    });
}

function setError(input){
    let contenedor = input.parentElement;
    contenedor.querySelector('i').classList.remove('invisible');
    contenedor.parentElement.querySelector('form button').classList.add('invisible');
}

function setSuccers(input){
    let contenedor = input.parentElement;
    contenedor.querySelector('i').classList.add('invisible');
    contenedor.parentElement.querySelector('form button').classList.remove('invisible');
}

function validarExistenciaCodigo(lista, input){
    let array = JSON.parse(localStorage.getItem(lista));      
    
    if(input.dataset['key'] == "codigo"){
        let codigo;
        input.addEventListener('input', ()=>{
            codigo = input.value;
            array.forEach((row, index) => {
                let value = array[index].codigo;
                if(value == codigo){
                    input.parentElement.querySelector('i').classList.remove('invisible');
                    input.parentElement.parentElement.querySelector('button').classList.add('invisible');
                }  
            });
        });        
    }    
}

