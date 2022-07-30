//for responsive
// const mql = window.matchMedia('(max-width: 520px)');
// function screenTest(mql) {
//   if (mql.matches) {
    
//   } else {

//   }
// }

// mql.addEventListener('change', screenTest);
let handpointer=document.getElementsByClassName("handpointer")
let a=window.matchMedia("(max-width: 520px)")
let b=window.matchMedia("(min-width: 520px)")
function width_change(a){
    if(a.matches){
        handpointer[2].classList.remove("fa-3x")
        handpointer[2].classList.add("fa-2x")
        handpointer[3].classList.remove("fa-3x")
        handpointer[3].classList.add("fa-2x")
        handpointer[4].classList.remove("fa-3x")
        handpointer[4].classList.add("fa-2x")
    }
    else{
        console.log("Not matched")
    }
}
function width_change2(b){
    if(b.matches){
        handpointer[2].classList.remove("fa-2x")
        handpointer[2].classList.add("fa-3x")
        handpointer[3].classList.remove("fa-2x")
        handpointer[3].classList.add("fa-3x")
        handpointer[4].classList.remove("fa-2x")
        handpointer[4].classList.add("fa-3x")
    }
    else{
        console.log("Not matched")
    }
}
a.addEventListener("change",width_change)
b.addEventListener("change",width_change2)



//for  song
let index=0
let music=new Audio("others/songs/1.mp3")
let playbtn=document.getElementById("playbutton")
let prebtn=document.getElementById("previous")
let nxtbtn=document.getElementById("next")
let gif=document.getElementById("gif")
let progressbar=document.getElementById("progressbar")
let song_img=document.getElementsByClassName("song-img")
let song_names=document.getElementsByClassName("songName")
let songItemPlaybtn=document.getElementsByClassName("songItemPlay")
let masterSongName=document.getElementById("masterSongName")
// song_img[3].src="others/covers/2.jpg"
let song_list=[
    {song_name:"Song 1",filepath:"others/songs/1.mp3",coverpath:"others/covers/1.jpg"},
    {song_name:"Song 2",filepath:"others/songs/2.mp3",coverpath:"others/covers/2.jpg"},
    {song_name:"Song 3",filepath:"others/songs/3.mp3",coverpath:"others/covers/3.jpg"},
    {song_name:"Song 4",filepath:"others/songs/4.mp3",coverpath:"others/covers/4.jpg"},
    {song_name:"Song 5",filepath:"others/songs/5.mp3",coverpath:"others/covers/5.jpg"},
    {song_name:"Song 6",filepath:"others/songs/6.mp3",coverpath:"others/covers/6.jpg"},
    {song_name:"Song 7",filepath:"others/songs/7.mp3",coverpath:"others/covers/7.jpg"},
    {song_name:"Song 8",filepath:"others/songs/8.mp3",coverpath:"others/covers/8.jpg"},
    {song_name:"Song 9",filepath:"others/songs/9.mp3",coverpath:"others/covers/9.jpg"},
    {song_name:"Song 10",filepath:"others/songs/10.mp3",coverpath:"others/covers/10.jpg"},
]
for(let i=0;i<song_img.length;i++){
    // song_img[4].src=song_list[0].coverpath
    song_img[i].src=song_list[i].coverpath
}
for(let i=0;i<song_names.length;i++){
    song_names[i].innerHTML=song_list[i].song_name
}
function makeallpause(){
    for(let i=0;i<songItemPlaybtn.length;i++){
         songItemPlaybtn[i].classList.remove("fa-pause-circle")
         songItemPlaybtn[i].classList.add("fa-play-circle")
    }
}
for(let i=0;i<songItemPlaybtn.length;i++){
    songItemPlaybtn[i].addEventListener("click",()=>{
            makeallpause();
            songItemPlaybtn[i].classList.remove("fa-play-circle")
            songItemPlaybtn[i].classList.add("fa-pause-circle")
            music.src=song_list[i].filepath
            music.currentTime=0
            playbtn.classList.remove("fa-play-circle")
            playbtn.classList.add("fa-pause-circle")
            gif.style.opacity="1"
            index=i
            masterSongName.innerHTML=song_list[index].song_name
            music.play()
        // else{
        //     music.pause()
        //     songItemPlaybtn[i].classList.remove("fa-pause-circle")
        //     songItemPlaybtn[i].classList.add("fa-play-circle")
        //     playbtn.classList.remove("fa-pause-circle")
        //     playbtn.classList.add("fa-play-circle")
        //     gif.style.opacity="0"
        // }
        
    })
}
playbtn.addEventListener("click",()=>{
    if(music.paused || music.currentTime==0){
        music.play()
        masterSongName.innerHTML=song_list[index].song_name
        songItemPlaybtn[index].classList.remove("fa-play-circle")
        songItemPlaybtn[index].classList.add("fa-pause-circle")
        playbtn.classList.remove("fa-play-circle")
        playbtn.classList.add("fa-pause-circle")
        gif.style.opacity="1"
    }
    else{
        music.pause()
        makeallpause();
        playbtn.classList.remove("fa-pause-circle")
        playbtn.classList.add("fa-play-circle")
        gif.style.opacity="0"
    }
})
nxtbtn.addEventListener("click",()=>{
    if(index==9){
        index=0;
    }
    else{
        index=index+1
    }
    makeallpause();
    songItemPlaybtn[index].classList.remove("fa-play-circle")
    songItemPlaybtn[index].classList.add("fa-pause-circle")
    music.src=song_list[index].filepath
    music.currentTime=0
    playbtn.classList.remove("fa-play-circle")
    playbtn.classList.add("fa-pause-circle")
    gif.style.opacity="1"
    masterSongName.innerHTML=song_list[index].song_name
    music.play()
})
prebtn.addEventListener("click",()=>{
    if(index==0){
        index=9;
    }
    else{
        index=index-1
    }
    makeallpause();
    songItemPlaybtn[index].classList.remove("fa-play-circle")
    songItemPlaybtn[index].classList.add("fa-pause-circle")
    music.src=song_list[index].filepath
    music.currentTime=0
    playbtn.classList.remove("fa-play-circle")
    playbtn.classList.add("fa-pause-circle")
    gif.style.opacity="1"
    masterSongName.innerHTML=song_list[index].song_name
    music.play()
})
music.addEventListener("timeupdate",()=>{
    progress=parseInt((music.currentTime/music.duration*100))
    progressbar.value=progress
})
progressbar.addEventListener("change",()=>{
    music.currentTime=progressbar.value*music.duration/100
})