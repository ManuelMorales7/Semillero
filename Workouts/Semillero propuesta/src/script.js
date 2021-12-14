function selectTab(){
    document.querySelectorAll('.tabs span').forEach(span=>{
        span.addEventListener('click', ()=>{
            document.querySelectorAll('.tabs span').forEach(element => element.classList.remove('focus'))   
            span.classList.add('focus');     
        })
    })
}

selectTab();

function getTitle(){
    document.querySelectorAll('.tabs span').forEach(span =>{
        span.addEventListener('click', ()=>{
            span.textContent == 'Resumen' ? showResumenForm(): null;
            span.textContent == 'Control Maquinaria' ? showControlMaquinariaForm(): null;
            span.textContent == 'Mantenimiento' ? showMantenimientoForm(): null;
            span.textContent == 'Tarifas' ? showTarifasForm(): null;
        })
    })
}

getTitle();

function showResumenForm(){
    document.querySelector('.controlMaquinaria').style.width = '50%';
    document.querySelector('.controlMaquinaria').style.height = '55%';
    document.querySelector('.display').style.flexDirection = 'row'
    document.querySelector('.display').innerHTML = `
    <div class="infoContainer">
    <p class="first">Equipo</p>
    <input type="text" disabled value="PRB BSA - 0121323">

    <p>Grupo de Mantenimiento</p>
    <input type="text" disabled value="Volquetas prueba">
    
    <p>Plan de mantenimiento</p>
    <input type="text" disabled value="Internacional Hr/Km">    
    </div>
    <div class="photoContainer"></div>
    `;
    hideEquipo()
    document.querySelector('.display').style.height = "350px"  
    document.querySelector('.controlMaquinaria').style.overflow = "visible";
}

function showControlMaquinariaForm(){
    document.querySelector('.controlMaquinaria').style.width = '90%';
    document.querySelector('.controlMaquinaria').style.height = '90%';
    document.querySelector('.display').style.height = "950px";
    document.querySelector('.controlMaquinaria').style.overflow = "scroll";
    showEquipo();    
    document.querySelector('.display').style.flexDirection = 'column';
    document.querySelector('.display').innerHTML = `
    <div class="ctrlMantenimiento">
    <div class="titleTab">
        <h3>Mantenimiento</h3>
    </div>
    <div class="input">
        <p>Esquema de Control</p>
        <select>
            <option>Busqueda...</option>
        </select>
    </div>
    <div class="input">
        <p>Grupo de Mantenimiento</p>
        <input type="text"  id="">
    </div>
    <div class="input">
        <p>Plan de Mantenimiento</p>
        <input type="text"  id="">
    </div>
    <div class="input">
        <p>Frecuencia control operacional</p>
        <select>
            <option>Busqueda...</option>
        </select>
    </div>
    <div class="input">
        <p>Esquema de Control</p>
        <select>
            <option>Busqueda...</option>
        </select>
    </div>
    <div class="input checkContainer">
        <div class="check">
            <p>Consume combustible</p>
            <input class="checkCombustible" type="checkbox" name="" id="">
        </div>
        <div class="check">
            <p>Control neumáticos</p>
            <input type="checkbox" name="" id="">
        </div>
    </div>
</div>
<div class="combustibles tabCombustible hidden">
    <div class="titleTab">
        <h3>Combustible</h3>
    </div>
    <div class="input">
        <p>Cantidad(Gal/Hr)</p>
        <input type="text"  id="">
    </div>
    <div class="input">
        <p>Cantidad(Km/Gal)</p>
        <input type="text"  id="">
    </div>
    <div class="input">
        <p>Cantidad del tanque</p>
        <input type="text"  id="">
    </div>
    <div class="input check">
        <p>Consumo libre de combustible</p>
        <input type="checkbox" name="" id="">
    </div>
</div>
<div class="Obras tabCombustible hidden">
    <div class="titleTab">
        <h3>Obras y rendimiento</h3>
    </div>
    <div class="input">
        <p>Frente de Obra</p>
        <input type="text" class="search">
    </div>
    <div class="input">
        <p>Rendimiento(Km/Gal)</p>
        <input type="text"  id="">
    </div>
    <div class="input">
        <p>Rendimiento(Gal/Hr)</p>
        <input type="text"  id="">
    </div>
</div>
<div class="ctrlMedidores">
    <div class="titleTab">
        <h3>Medidores</h3>
    </div>
    <div class="input">
        <p>Medidor</p>
        <input type="text" class="search">
    </div>
    <div class="input">
        <p>Unidad de medida</p>
        <input type="text" >
    </div>
    <div class="input">
        <p>Medidor Inicial</p>
        <input type="text" >
    </div>
    <div class="input">
        <p>Fecha medidor inicial</p>
        <input type="date" >
    </div>
    <div class="input">
        <p>Medidor actual</p>
        <input type="text" >
    </div>
    <div class="input">
        <p>Fecha medidor Actual</p>
        <input type="date" >
    </div>
    <div class="input">
        <p>Trabajo Acumulado</p>
        <input type="text" >
    </div>

    <div class="input check">
        <p>Añadir otra medida</p>
        <input type="checkbox" class="nuevaMedida" id="">
    </div>

</div>
<div class="ctrlMedidores ctrlMedidoresDos hidden">
    <div class="titleTab">
        <h3>Segundo medidor</h3>
    </div>
    <div class="input">
        <p>Medidor</p>
        <input type="text" class="search">
    </div>
    <div class="input">
        <p>Unidad de medida</p>
        <input type="text" >
    </div>
    <div class="input">
        <p>Medidor Inicial</p>
        <input type="text" >
    </div>
    <div class="input">
        <p>Fecha medidor inicial</p>
        <input type="date" >
    </div>
    <div class="input">
        <p>Medidor actual</p>
        <input type="text" >
    </div>
    <div class="input">
        <p>Fecha medidor Actual</p>
        <input type="date" >
    </div>
    <div class="input">
        <p>Trabajo Acumulado</p>
        <input type="text" >
    </div>
</div>
<div class="ctrlAsignacionPresupuestal">
    <div class="titleTab">
        <h3>Asignacioón presupuestal</h3>
    </div>
    <div class="input">
        <p>Obra</p>
        <input type="text" class="search">
    </div>
    <div class="input">
        <p>Ítem combustible</p>
        <input type="text" class="search">
    </div>
    <div class="input">
        <p>Ítem servicio externo</p>
        <input type="text" class="search">
    </div>
    <div class="input">
        <p>Ítem mantenimiento</p>
        <input type="text" class="search">
    </div>                               
</div>
    `;

    document.querySelector('.nuevaMedida').addEventListener('click', ()=>{
        document.querySelector('.nuevaMedida').checked == true ? (document.querySelector('.ctrlMedidoresDos').classList.add('visible'),
        document.querySelector('.display').style.height = "1300px"
        ):(document.querySelector('.ctrlMedidoresDos').classList.remove('visible'),
        document.querySelector('.display').style.height = "950px"
        );
    })

    document.querySelector('.checkCombustible').addEventListener('click', ()=>{
        document.querySelector('.checkCombustible').checked == true  
        ?(document.querySelector('.display').style.height = "1300px", document.querySelectorAll('.tabCombustible').forEach(e =>e.classList.add('visible')))
        :(document.querySelector('.display').style.height = "950px",document.querySelectorAll('.tabCombustible').forEach(e =>e.classList.remove('visible')))
    })

}

function showMantenimientoForm(){
    document.querySelector('.controlMaquinaria').style.width = '90%';
    document.querySelector('.controlMaquinaria').style.height = '60%';
    showEquipo();
    document.querySelector('.display').style.flexDirection = 'column';
    document.querySelector('.display').style.height = "350px"  
    document.querySelector('.controlMaquinaria').style.overflow = "visible";
    document.querySelector('.display').innerHTML =  `
    <div class="informacionMantenimiento">
    <div class="titleTab">
        <h3>Medidores</h3>
    </div>
    <div class="input">
        <p>Grupo de Mantenimiento</p>
        <select>
            <option>Busqueda...</option>
        </select>
    </div>
    <div class="input">
        <p>Plan de Mantenimiento</p>
        <select>
            <option>Busqueda...</option>
        </select>
    </div>
    <div class="input">
        <p>Fecha último ciclo </p>
        <input type="date" >
    </div>

    </div>
    <div class="medidorUnoInfo">
    <div class="titleTab">
        <h3>Medidores</h3>
    </div>
    <div class="input">
        <p>Ciclo anterior OT</p>
        <input type="text"  id="">
    </div>
    <div class="input">
        <p>Medida Anterior O.T(Hr)</p>
        <input type="text"  id="">
    </div>
    <div class="input">
        <p>Acumulado Anterior O.T(Hr)</p>
        <input type="text"  id="">
    </div>
    <small>Nota: Equipos controlados por fechas, solo cargan rutinas de mantenimiento configuradas por días en su primer medidor</small>
    </div>
    `
}

function showTarifasForm(){
    document.querySelector('.controlMaquinaria').style.width = '90%';
    document.querySelector('.controlMaquinaria').style.height = '50%';
    showEquipo();
    document.querySelector('.display').style.flexDirection = 'column';
    document.querySelector('.display').style.height = "350px"  
    document.querySelector('.controlMaquinaria').style.overflow = "visible";
    document.querySelector('.display').innerHTML = `
    <div class="tarifaContainer">
    <div class="titleTab">
        <h3>Tarifas</h3>
    </div>
    <div class="input">
        <p>Fecha medidor inicial</p>
        <input type="date" >
    </div>
    <div class="input">
        <p>Frente de Obra</p>
        <input type="text" class="search">
    </div>
    <div class="input">
        <p>Rendimiento(Km/Gal)</p>
        <input type="text"  id="">
    </div>
    <div class="input">
        <p>Rendimiento(Km/Gal)</p>
        <input type="text"  id="">
    </div>
    <div class="input">
        <p>Frente de Obra</p>
        <input type="text" class="search">
    </div>
    <div class="input check">
        <p>Consumo libre de combustible</p>
        <input type="checkbox" name="" id="">
    </div>
    <small>Nota: Sí el valor en los campos de stand by mes es 0 (cero), se tomarán los datos configurados para la obra que se liquide el equipo  </small>
</div>
    `
}

function showEquipo(){
    document.querySelector('.activo').classList.remove('invisible');
    document.querySelector('.activo').classList.add('visible')
}

function hideEquipo(){
    document.querySelector('.activo').classList.remove('visible')
    document.querySelector('.activo').classList.add('invisible');
}


