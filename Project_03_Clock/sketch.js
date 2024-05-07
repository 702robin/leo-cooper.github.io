let audioPlayer = document.getElementById('audioPlayer');

function updateSongAndArtist(hour) {
    if (hour === 0) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 1) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 2) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 3) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 4) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 5) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 6) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 7) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 8) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 9) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 10) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 11) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 12) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 13) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 14) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 15) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 16) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 17) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 18) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 19) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 20) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 21) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 22) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
    else if (hour === 23) {
        document.getElementById('song').innerHTML = "testMIDNIGHT";
        document.getElementById('artist').innerHTML = "Khruangbin";
    }
}


function updateTime() {
    let today = new Date();
    let thisHour = today.getHours();
    let song = getSong(thisHour);
    let artist = getArtist(thisHour);

    }
    //audioooo
    let audioUrl = getAudioUrl(thisHour);

    audioPlayer.src = audioUrl;

    if (audioPlayer.paused) {
        audioPlayer.play();
    }


// Function to get the audio URL based on the hour
function getAudioUrl(hour) {
    if (hour === 0) return "./tracks/midnight.mp3";
    else if (hour >= 1 && hour <= 11) return "./tracks/" + hour + "am.mp3";
    else if (hour === 12) return "./tracks/noon.mp3";
    else return "./tracks/" + (hour - 12) + "pm.mp3";
}

// Call updateTime function initially
updateSongAndArtist();
updateTime();

// Update the audio every hour
setInterval(updateTime, 3600000);
setInterval(updateSongAndArtist, 3600000);