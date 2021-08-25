function singleElement(tipo){
    let name = document.createElement(tipo);
    return name;
}

function createDiv(clase){
    let name = document.createElement('div');
    name.setAttribute('class', clase);
    return name;
}

function anyElement(tipo, clase, valor){
    let name = document.createElement(tipo);
    name.setAttribute(clase, valor);
    return name;
}

function text(tipo, texto, clase, valor){
    let name = document.createElement(tipo);
    name.setAttribute(clase, valor);
    name.textContent = texto;
    return name;
}

function darkMode(){       
    let background = document.getElementById('section');
    background.classList.toggle("darkMode");    

    let text = document.getElementsByClassName('dinamicText');
    let longitud = text.length;
    for(let i = 0; i<longitud; i++){
        text[i].classList.toggle('lightText');
    }  
    
    if(document.getElementById('check').checked){        
        let comprobacion = document.getElementById('headerBck');
        comprobacion.classList.remove("headerBackgroundLight");
        comprobacion.classList.add("headerBackground");
    }else{
        let comprobacion = document.getElementById('headerBck');
        comprobacion.classList.remove("headerBackground");
        comprobacion.classList.add("headerBackgroundLight");
    }
}    



let main = singleElement('main');
let header = singleElement('header');
header.setAttribute('id', 'headerBck');
let article = singleElement('article');
let aside = singleElement('aside');
let text_article = text('h1', 'Social Media Dashboard', 'class', 'dinamicText');
let p_article = text('p', 'Total Followers: 23,004', 'class', 'staticText');
let label = anyElement('label', 'class', 'switch');
let input = anyElement('input', 'type', 'checkbox');
input.setAttribute('id', 'check');
let span = anyElement('span', 'class', 'slider dot');
let section = singleElement('section');
section.setAttribute('id', 'section');
let divTop = createDiv('top');
let divBottom = createDiv('bottom');
let card_1 = createDiv('faceCard mainCard');
let card_2 = createDiv('twCard mainCard');
let card_3 = createDiv('instaCard mainCard');
let card_4 = createDiv('ytCard mainCard');
let h2Sec = text('h2', 'Overview - Today', 'class', 'dinamicText ups');
let section_1 = singleElement('section');
section_1.setAttribute('class', 'topSec');
let section_2 = singleElement('section');
section_2.setAttribute('class', 'bottomSec');
let overvCard_1 = createDiv('overVCard faceCard_1');
let overvCard_2 = createDiv('overVCard faceCard_2');
let overvCard_3 = createDiv('overVCard instaCard_1');
let overvCard_4 = createDiv('overVCard instaCard_2');
let overvCard_5 = createDiv('overVCard twCard_1');
let overvCard_6 = createDiv('overVCard twCard_2');
let overvCard_7 = createDiv('overVCard ytCard_1');
let overvCard_8 = createDiv('overVCard ytCard_2');


document.body.append(main);
main.append(header);
header.append(article);
header.append(aside);
article.append(text_article);
article.append(p_article);
aside.append(label);
label.append(input);
label.append(span);
main.append(section);
section.append(h2Sec);
section.append(divTop);
section.append(divBottom);
divTop.append(card_1);
divTop.append(card_2);
divTop.append(card_3);
divTop.append(card_4);
divBottom.append(section_1);
divBottom.append(section_2);
section_1.append(overvCard_1);
section_1.append(overvCard_2);
section_1.append(overvCard_3);
section_1.append(overvCard_4);
section_2.append(overvCard_5);
section_2.append(overvCard_6);
section_2.append(overvCard_7);
section_2.append(overvCard_8);


input.addEventListener('click', () => {
    darkMode();
})



