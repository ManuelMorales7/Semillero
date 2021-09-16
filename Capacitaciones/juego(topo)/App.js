const agujeros = document.querySelectorAll('.agujero');
const tableroPuntos = document.querySelector('#tableroPuntos');
const topos = document.querySelectorAll('.topo');
const dificultad = document.querySelector('#desplegableDificultad');

let ultimoAgujero;
let timepoFinalizado = false;
let puntaje;

function CalcularTiempoAletorio(minimo, maximo){
    return Math.round(Math.random() * (maximo - minimo) * minimo);
}

function CalcularAgujeroAleatorio(agujeros){
    const ubicacion = Math.floor(Math.random() * agujeros.length);
    const agujeroExtraido = agujeros[ubicacion];

    if(agujeroExtraido === ultimoAgujero){
        return CalcularAgujeroAleatorio(agujeros)
    };
    
    ultimoAgujero = agujeroExtraido;
    return agujeroExtraido;
};

function ejecutar(){
    let tiempoJuego;

    switch(dificultad.value){
        case "1": 
            tiempoJuego = CalcularTiempoAletorio(1000, 2500);
            break;

        case "2":
            tiempoJuego = CalcularTiempoAletorio(500, 1000);
            break;
        
        case "3":
            tiempoJuego = CalcularTiempoAletorio(400, 600);
            break;
        
        case "4":
            tiempoJuego = CalcularTiempoAletorio(50, 200);
            break;

        default:
            tiempoJuego = CalcularTiempoAletorio(1000, 2500);
            
    }
    const agujero = CalcularAgujeroAleatorio(agujeros);
    agujero.classList.add('up');

    setTimeout(() => {
        agujero.classList.remove('up'); 
        if(!timepoFinalizado) ejecutar();       
    }, tiempoJuego);
};

function IniciarJuego(){
    tableroPuntos.textContent = 0;
    puntaje = 0;
    timepoFinalizado = false;
    ejecutar();
    setTimeout(() => timepoFinalizado = true, 10000);
};

function CalcularGolpes(e) {
    if(!e.isTrusted) return;
    puntaje++;
    this.parentNode.classList.remove('up');
    tableroPuntos.textContent = puntaje;
    ejecutar();
    
}

topos.forEach(topo => topo.addEventListener('click', CalcularGolpes))
