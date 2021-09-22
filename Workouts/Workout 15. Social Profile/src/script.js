import { songs } from "./songs.js";
import { lists } from "./lists.js";

const cards = [...document.querySelectorAll('.cards')];
const playBoton = document.querySelector('.play');
const pauseBoton = document.querySelector('.pause');
const repeatButonDefault = document.querySelector('.repeatDefault');
const repeatButonSelected = document.querySelector('.repeatSelected');
const randomDefault = document.querySelector('.randomDefault');
const randomSelected = document.querySelector('.randomSelected');
const library = document.querySelector('.library');
const myLists = document.querySelector('.lists');


cards.forEach(card => { 
    card.addEventListener('click', ()=>{        
        card.classList.toggle('active');        
});
});

playBoton.addEventListener('click', ()=>{
    playBoton.classList.toggle('active');
    pauseBoton.classList.toggle('active');
});

pauseBoton.addEventListener('click', ()=>{
    playBoton.classList.toggle('active');
    pauseBoton.classList.toggle('active');
});

repeatButonDefault.addEventListener('click', ()=>{
    repeatButonDefault.classList.toggle('active');
    repeatButonSelected.classList.toggle('active');
});

repeatButonSelected.addEventListener('click', ()=>{
    repeatButonDefault.classList.toggle('active');
    repeatButonSelected.classList.toggle('active');
});

randomDefault.addEventListener('click', ()=>{
    randomDefault.classList.toggle('active');
    randomSelected.classList.toggle('active');
});

randomSelected.addEventListener('click', ()=>{
    randomDefault.classList.toggle('active');
    randomSelected.classList.toggle('active');
});

songs.forEach(song =>{

    const songList = document.createElement('div');
    songList.classList.add('songList');

    songList.addEventListener('click', ()=>{
        const durationSong = document.querySelector('.final');
        const start = document.querySelector('.start');
        const nameSongTop = document.querySelector('.nameSongTop');
        const nameAlbum = document.querySelector('.nameAlbum');
        const albumCover = document.querySelector('.CoverAlbunm');

        durationSong.textContent = song.duration;
        start.textContent = '0:00';
        nameSongTop.textContent = song.song;
        nameAlbum.textContent = song.album;
        albumCover.setAttribute('src', song.image); 

    });

    const albumCoverList = document.createElement('div');
    albumCoverList.classList.add('albumCoverList');
    const albumImage = document.createElement('img');
    albumImage.setAttribute('src', song.image);     

    const nameSong = document.createElement('div');
    nameSong.classList.add('nameSong');
    nameSong.classList.add('sameList');
    const nameSongList = document.createElement('p');
    nameSongList.textContent = song.song;

    const artist = document.createElement('div');
    artist.classList.add('artist');
    artist.classList.add('sameList');
    const artistList = document.createElement('p');
    artistList.textContent = song.artist;
    
    const albumName = document.createElement('div');
    albumName.classList.add('albumName');
    albumName.classList.add('sameList');
    const albumNameList = document.createElement('p');
    albumNameList.textContent = song.album;

    const durationSong = document.createElement('div');
    durationSong.classList.add('durationSong'); 
    durationSong.classList.add('sameList');  
    const durationList = document.createElement('p'); 
    durationList.textContent = song.duration;
    
    library.append(songList);
    songList.append(albumCoverList, nameSong, artist, albumName, durationSong);
    albumCoverList.append(albumImage)
    nameSong.append(nameSongList);
    artist.append(artistList);
    albumName.append(albumNameList);
    durationSong.append(durationList);   
    
});

lists.forEach(list =>{
    const square = document.createElement('div');
    square.classList.add('square');
    
    const imageList = document.createElement('img');
    imageList.setAttribute('src', list.image);

    myLists.append(square);
    square.append(imageList);

})


