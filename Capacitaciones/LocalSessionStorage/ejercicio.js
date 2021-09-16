const formulario = document.getElementById('formularioRegistro');
const llaveLocalStorage = 'listadoEjercicio';


function guardar(){
    obtenerDatosFormulario();
    const listado = JSON.parse(localStorage.getItem(llaveLocalStorage)) || [];
    listado.push(datos);
    localStorage.setItem(llave, JSON.stringify(listado));
}

function obtenerDatosLocalStorage(){
    return JSON.parse(localStorage.getItem(llave));
}

function asignarDatosLocalStorage(llave, valor){
    localStorage.setItem(llave, JSON.stringify(valor));
}


function obtenerDatosFormulario() {
    const formData = new FormData(formulario);
    let datos = {};

    formData.forEach((valor, key) => {
        datos[key] = valor;
    });

    return datos;
};

(()=>{
    formulario.addEventListener('submit', guardar);
})();
