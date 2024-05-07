const audioElement = new Audio("songs/1.mp3");
// audioElement.play();
const masterPlay = document.getElementById("masterPlay");
const gif = document.getElementById("gif");
const myProgressBar = document.getElementById("myProgressBar");
const masterSongName = document.getElementById("masterSongName");

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = "1";
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = "0";
  }
});

// ami ekhane chaichi j amar ganer j duration sei onujai amar progress bar ta update hobe,,(formula ta holo jatota gan choleche / gane total duration * 100).......(Example: (1.5/3)*100)...

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
  // console.log(progress); // i can see with this example how it works.
  // atara dara gan jatota barche progress bar er value tao barche.
  updateMasterPlayTime();
});

myProgressBar.addEventListener("change", () => {
  // amar dorkar chilo j progress bar ta jadi ami icha kore tane bariye diy tahole gan er timing tao update hobe thik sei jaygay ami jotota obdi bar ta tanechi.
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
  },
];

// const songItems = Array.from(document.querySelector(".songItem"));
let songItems = Array.from(document.getElementsByClassName("songItem"));

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.querySelector(".songName").innerHTML = songs[i].songName;
});


const makeAllPlays = () => {
  Array.from(document.querySelectorAll(".songItemPlay")).forEach((e) => {
    e.classList.remove("fa-pause-circle");
    e.classList.add("fa-play-circle");
  });
};

const songItemPlay = Array.from(document.querySelectorAll(".songItemPlay"));
songItemPlay.forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(e.target);
    songIndex = parseInt(e.target.id);
    // console.log(index);
    // Toggle play/pause for all song items
    makeAllPlays();
    if (audioElement.paused || audioElement.currentTime <= 0) {
      // If audio is paused or not started, show pause icon
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.play();
      gif.style.opacity = "1";
      audioElement.currentTime = 0;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    } else {
      // If audio is playing, show play icon
      e.target.classList.remove("fa-pause-circle");
      e.target.classList.add("fa-play-circle");
      audioElement.pause();
      gif.style.opacity = "0";
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
    }

    
  });
});


const next = document.getElementById("next");
next.addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.play();
  gif.style.opacity = "1";
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

const previous = document.getElementById("previous");
previous.addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`; // jakhn previous a click korchi takhn prevoius index a jache r sei index er sathe 1 minus hoche.takhn sei present index er sathe ekhane 1 plus hoche and gan ta play hoche.
  audioElement.play();
  gif.style.opacity = "1";
  masterSongName.innerText = songs[songIndex].songName; // songindex ta to ekhane uppor thele set hoche tai jai index a ami click krchi sei index tai ekhnae name hisabe chole jache.
  audioElement.currentTime = 0;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

function updateMasterPlayTime() {
  const { currentTime, duration } = audioElement;
  const formattedTime = `${formatTime(currentTime)} / ${formatTime(duration)}`;
  masterSongName.innerText = `${formattedTime} ${songs[songIndex].songName}`;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

function padZero(number) {
  return number < 10 ? `0${number}` : number;
}
