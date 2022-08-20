//Drum-machine//

//Drums from HTML//
const clap = document.getElementById('clapDrum');
const hiHat = document.getElementById('hiHatDrum');
const kick = document.getElementById('kickDrum');
const openHat = document.getElementById('openHatDrum');
const ride = document.getElementById('rideDrum');
const snare = document.getElementById('snareDrum');
const tink = document.getElementById('tinkDrum');
const tom = document.getElementById('tomDrum');

//Drum-btn from HTML//
const clapBtn = document.getElementById('clapBtn');
const hiHatBtn = document.getElementById('hiHatBtn');
const kickBtn = document.getElementById('kickBtn');
const openHatBtn = document.getElementById('openHatBtn');
const rideBtn = document.getElementById('rideBtn');
const snareBtn = document.getElementById('snareBtn');
const tinkBtn = document.getElementById('tinkBtn');
const tomBtn = document.getElementById('tomBtn');

/*Functions who makes the sounds using click and mouse*/

/* Clap-Drum*/
let clapSound = function (e) {
  // clap.currentTime = 0;
  clap.play();
};
clapBtn.addEventListener('click', clapSound, false);

/* hihat-Drum*/
let hiHatSound = function (e) {
  // hihat.currentTime = 0;
  hiHat.play();
};
hiHatBtn.addEventListener('click', hiHatSound, false);

/* Kick-Drum*/
let kickSound = function (e) {
  // kick.currentTime = 0;
  kick.play();
};
kickBtn.addEventListener('click', kickSound, false);

/* Openhat-Drum*/
let openHatSound = function (e) {
  // openhat.currentTime = 0;
  openHat.play();
};
openHatBtn.addEventListener('click', openHatSound, false);

/* Ride-Drum*/
let rideSound = function (e) {
  // ride.currentTime = 0;
  ride.play();
};
rideBtn.addEventListener('click', rideSound, false);

/* Snare-Drum*/
let snareSound = function (e) {
  // snare.currentTime = 0;
  snare.play();
};
snareBtn.addEventListener('click', snareSound, false);

/* Tink-Drum*/
let tinkSound = function (e) {
  // tink.currentTime = 0;
  tink.play();
};
tinkBtn.addEventListener('click', tinkSound, false);

/* Tom-Drum*/
let tomSound = function (e) {
  // tom.currentTime = 0;
  tom.play();
};
tomBtn.addEventListener('click', tomSound, false);

/* Play sound using keys Y-U-I-H-J-K-B-M*/

document.addEventListener(
  'keydown',
  (event) => {
    if (event.code === 'KeyB') {
      clapSound();
    }
    if (event.code === 'KeyH') {
      hiHatSound();
    }
    if (event.code === 'KeyM') {
      kickSound();
    }
    if (event.code === 'KeyY') {
      openHatSound();
    }
    if (event.code === 'KeyI') {
      rideSound();
    }
    if (event.code === 'KeyJ') {
      snareSound();
    }
    if (event.code === 'KeyK') {
      tinkSound();
    }
    if (event.code === 'KeyU') {
      tomSound();
    }
  },
  false
);
