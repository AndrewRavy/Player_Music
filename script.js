const songName = document.getElementById('song-name');
const song = document.getElementById('audio');
const bandName = document.getElementById('band-name');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const currentProgress = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');
const shuffleButton = document.getElementById('shuffle');


const aLittlePiece = {
    songName : 'A Little Piece Of Heaven',
    artist : 'Avenged Sevenfold',
    file : 'a-little-piece-of-heaven'
};

const AndAllThings = {
    songName : 'And All Things Will End',
    artist : 'Avenged Sevenfold',
    file : 'And-All-Things-Will-End'
};

const DearGod = {
    songName : 'DearGod',
    artist : 'Avenged Sevenfold',
    file : 'DearGod'
};

const Gunslinger = {
    songName : 'Gunslinger',
    artist : 'Avenged Sevenfold',
    file : 'Gunslinger'
};

let isPlaying = false;

const playlist = [aLittlePiece,AndAllThings,Gunslinger,DearGod];
let index = 0;

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
    }
    else {
        playSong();
    }
}

function initializeSong(){
    cover.src = `Imagens/${playlist[index].file}.jpeg`;
    song.src = `songs/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

function previousSong(){
    if(index === 0){
        index = playlist.length - 1;
    }
    else {
        index -= 1;
    }
    initializeSong();
    playSong();
}

function nextSong(){
    if(index === playlist.length - 1){
        index = 0;
    }
    else {
        index += 1;
    }
    initializeSong();
    playSong();
}

function updateProgressBar(){
    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`);
}

function jumpTo(event){
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX
    const jumpToTime = (clickPosition/width)*song.duration;
    song.currentTime = jumpToTime;
}

function shuffleButtonClicked(){
    
}

initializeSong();
play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);

song.addEventListener('timeupdate', updateProgressBar)
progressContainer.addEventListener('click', jumpTo);
shuffleButton.addEventListener('click', shuffleButtonClicked);