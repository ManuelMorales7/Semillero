function createSingleElement(type){
    let name = document.createElement(type);
    return name;
}

function createDiv(atribute, value){
    let name = document.createElement('div');
    name.setAttribute(atribute, value);
    return name;    
}

const main = createSingleElement('main');
const borderClock = createDiv('class' ,'border-clock');
const containerHandles = createDiv('class' ,'container-handles');
const secondsHandle = createDiv('class' ,'seconds-handle handles');
const minutesHandle = createDiv('class' ,'minutes-handle handles');
const hourHandle = createDiv('class' ,'hours-handle handles');

document.body.append(main);
main.append(borderClock);
borderClock.append(containerHandles);
containerHandles.append(secondsHandle, minutesHandle, hourHandle);

function setMovementForHandles(){

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60)*360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDegrees = ((hours / 12) * 360 + ((minutes /60 ) *30) + 90);

    secondsHandle.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHandle.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHandle.style.transform = `rotate(${hoursDegrees}deg)`; 
}

setInterval(setMovementForHandles, 1000);
setMovementForHandles();