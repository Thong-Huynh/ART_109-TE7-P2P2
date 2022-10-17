var bird_sound = new Howl({
    src: ['./assets/seagull-on-beach.mp3'],
    loop: true,
    volume: 0.5,
});
bird_sound.play();


// function bird_play() {
//     bird_sound.play();
// }

// function bird_pause() {
//     bird_sound.pause();
// }

// function bird_stop() {
//     bird_sound.stop();
// }

function bird_mute() {
    bird_sound.volume(0);
}

function bird_unMute() {
    bird_sound.volume(1);
}



function bird_volUp() {
    var vol = bird_sound.volume();
    vol += 0.1;
    if (vol > 1) {
        vol = 1;
    }
    bird_sound.volume(vol);
}

function bird_volDown() {
    var vol = bird_sound.volume();
    vol -= 0.1;
    if (vol < 0) {
        vol = 0;
    }
    bird_sound.volume(vol);
}