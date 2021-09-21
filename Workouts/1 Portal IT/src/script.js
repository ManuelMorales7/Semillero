const aside = document.querySelector('aside');
const form = document.createElement('form');

const terms = document.createElement('div');
terms.setAttribute('class', 'terms');

const text = document.createElement('div');
text.innerHTML = '<p><input type="checkbox">Al enviar este formulario, autorizo el servicio de software TeamViewer para realizar el acceso remoto, autorizo realizar cambios en el equipo los cuales incluyen puntos de resturación en el sisteme operativo, manifiesto que conozco la política de <strong style="color: #58A0FF">protección de datos</strong> autorizo de manera voluntaria , previa m expresa e inequivoca s SINCOSOFT S.A.S, para tratar mis datos personales y de carácter sensible (en caso de ser necesaria su recolección), de acuerdo con las políticas de tratamiento de datos personales de la empresa y para los fines relacionados con su objeto social y especial para fines legales, contractuales y comerciales de SINCOSOFT S.A.S. De igual manera acepto los <strong style="color: #58A0FF">*términos y condiciones*</strong> establecidos pos SINCOSOFT S.A.S.  </p>';

const submit = document.createElement('input');
submit.setAttribute('type', 'button');
submit.setAttribute('value', 'Soklicitar sesión');

const inputs = [
    {
        type: 'text',
        placeholder: 'Nombre y apellido',
        name: 'names',
    }, 

    {
        type: 'text',
        placeholder: 'NIT o nombre de la compañia',
        name: 'nitOrNameCompany',
    },

    {
        type: 'text',
        placeholder: 'Breve descripción del inconveniente',
        name: 'issue',
    },

    {
        type: 'text',
        placeholder: 'Télefono o celular',
        name: 'phone',
    }, 

    {
        type: 'text',
        placeholder: 'Correo electrónico',
        name: 'email',
    },

]

aside.append(form, terms);
terms.append(text, submit);

inputs.forEach(input =>{
    let div  = document.createElement('div');
    div.setAttribute('class', input.name);

    let entry = document.createElement('input');
    entry.setAttribute('type', input.type);
    entry.setAttribute('placeholder', input.placeholder);
    
    let icon = document.createElement('i');
    icon.setAttribute('class', 'fas fa-info-circle');
    
    let small = document.createElement('small');

    form.append(div);
    div.append(entry, icon, small);

});

const inputNames = form.querySelector('.names input');
const inputNitOrNameCompany = form.querySelector('.nitOrNameCompany input');
const inputIssue = form.querySelector('.issue input');
const inputPhone = form.querySelector('.phone input');
const inputEmail = form.querySelector('.email input');
const checkbox = document.querySelector('input[type="checkbox"]');

function checkInputs(){

    const inputNamesValue = inputNames.value;
    const inputNitOrNameCompanyValue = inputNitOrNameCompany.value.trim();
    const inputIssueValue = inputIssue.value.trim();
    const inputPhoneValue = inputPhone.value.trim();
    const inputEmailValue = inputEmail.value.trim();

    if(inputNamesValue === ''){
        setErrorFor(inputNames, 'El nombre y apellido es obligatorio');
    }else if(!isName(inputNamesValue)){
        setErrorFor(inputNames, 'Ingrese nombres válidos');
    }else{
        setSuccessFor(inputNames); 
    };

    if(inputNitOrNameCompanyValue === ''){
        setErrorFor(inputNitOrNameCompany, 'El NIT o nombre de la compaía es obligatorio');
    }else if(!isName(inputNitOrNameCompanyValue)){
        setErrorFor(inputNitOrNameCompany, 'Ingrese un NIT o nombre de compañía válido');
    }else{
        setSuccessFor(inputNitOrNameCompany); 
    };

    if(inputIssueValue === ''){
        setErrorFor(inputIssue, 'La descripcion del inconvenniente es obligatoria');
    }else{
        setSuccessFor(inputIssue); 
    };

    if(inputPhoneValue === ''){
        setErrorFor(inputPhone, 'El número de teléfono o celular es obligatorio');
    }else if(!isNumber(inputPhoneValue)){
        setErrorFor(inputPhone, 'Ingrese un número de teléfono valido');
    }else{
        setSuccessFor(inputPhone); 
    };

    if(inputEmailValue === ''){
        setErrorFor(inputEmail, 'El correo electrónico es obligatorio');
    }else if(!isEmail(inputEmailValue)){
        setErrorFor(inputEmail, 'Ingrese un correo válido');
    }else{
        setSuccessFor(inputEmail); 
    };
    
    function setErrorFor(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.querySelector('.fa-info-circle').classList.add('visible')
        small.innerText = message; 
    };

    function setSuccessFor(input){
        const formControl = input.parentElement;
        formControl.querySelector('.fa-info-circle').classList.remove('visible')
    };

    function isName(nameUser){
        return /^[a-z ,.'-]+$/i.test(nameUser);   
    };

    function isNumber(phone){
        return /^\d+$/.test(phone);
    };

    function isEmail(email){
        return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };
    
};


submit.addEventListener('click', (e) =>{

    e.preventDefault();
    checkbox.checked == false ? window.alert('Acepte primero los términos y condiciones') : checkInputs();

    const showMessage = document.querySelectorAll('i');
    
    showMessage.forEach(i =>{
        i.addEventListener('mouseenter', () =>{
            i.parentElement.querySelector('small').classList.toggle('show');
        });

        i.addEventListener('mouseleave', () =>{
            i.parentElement.querySelector('small').classList.toggle('show');
        });
    })
});








