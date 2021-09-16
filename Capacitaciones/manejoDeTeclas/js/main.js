const keys = Array.from(document.querySelectorAll('.key'));

window.addEventListener('keydown', function(e){
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);


    if(!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
});

keys.forEach(key => key.addEventListener('transitioned', removeTransition));

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    
    
};