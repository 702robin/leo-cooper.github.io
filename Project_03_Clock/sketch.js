let audioPlayer = document.getElementById('audioPlayer');

function updateTime() {
    let today = new Date();
    let thisHour = today.getHours();
    let song = getSong(thisHour);
    let artist = getArtist(thisHour);

    if (hour === 18){
    document.getElementById('song').innerHTML = "testMIDNIGHT";
    document.getElementById('artist').innterHTML = "Khruangbin";
    }

    //audioooo
    let audioUrl = getAudioUrl(thisHour);

    audioPlayer.src = audioUrl;

    if (audioPlayer.paused) {
        audioPlayer.play();
    }

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