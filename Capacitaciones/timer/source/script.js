function singleElement(tipo){
    let name = document.createElement(tipo);
    return name;
  }
  
  function input(type, valorT, clase, valor, value, valorV){
    let name = document.createElement('input');
    name.setAttribute(type, valorT);
    name.setAttribute(clase, valor);
    name.setAttribute(value, valorV);
    return name;
  }

  
  function text(tipo, texto){
    let name = document.createElement(tipo);
    name.textContent = texto;
    return name;
  }
  
  function createDiv(valor){
    let name = document.createElement('div');
    name.setAttribute('class', valor);
    return name;
  }
  

let main = singleElement('main');
let section = singleElement('section');
let aside = singleElement('aside');
let countDown = text('p','5:00');
let containerButtons = createDiv('containerButtons');
let firstCountDown = input('type', 'button', 'class', 'buttons buttonType1', 'value', '1:00')
let secondCountDown = input('type', 'button', 'class', 'buttons buttonType2', 'value', '5:00');
let thirdCountDown = input('type', 'button', 'class', 'buttons buttonType1', 'value', '15:00');
let fourthCountDown = input('type', 'button', 'class', 'buttons buttonType2', 'value', '30:00');
let customCountDown = input('type', 'text', 'class', 'buttons buttonType1 custom', 'placeholder', 'Custom');
let startButton = input('type', 'button', 'class', 'startButton', 'value', 'GO!' )


document.body.append(main);
main.append(section, aside);
section.append(countDown, startButton);
aside.append(containerButtons);
containerButtons.append(firstCountDown, secondCountDown,thirdCountDown, fourthCountDown, customCountDown)


const buttons = document.querySelectorAll('.buttons');
let startingMinutes;
let time;

for(let i=0; i<buttons.length-1; i++){
  buttons[i].addEventListener('click', ()=>{
    startingMinutes = buttons[i].value;
    countDown.innerHTML = startingMinutes;
  })

}

function convertTime(startingMinutes){
  
  if(startingMinutes.length === 3){ 
    time = startingMinutes[0];
    time *= 60;    
  }
  
  if(startingMinutes.length === 4){
    time = startingMinutes[0] + startingMinutes[1];
    time *= 60;    
  }

  setInterval(timer, 1000)
  timer(time);
  
}


function timer(time){
  const minutes = Math.floor(time/60);
  let seconds = time % 60;

  countDown.innerHTML = `${minutes}: ${seconds}`;
  time--;
}

startButton.addEventListener('click', ()=>{
  convertTime(startingMinutes);
})


