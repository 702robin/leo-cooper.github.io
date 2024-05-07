let audioPlayer = document.getElementById('audioPlayer');

function getAudioTitle(hour) {
    if (hour === 0) return "Midnight - Krhuangbin";
    else if (hour >= 1 && hour <= 11) return hour + " AM by Meek Mill";
    else if (hour === 12) return "Noon - Some Artist";
    else return (hour - 12) + " PM by Some Artist";
}

function updateTime() {
    let today = new Date();
    let thisHour = today.getHours();

    //audioooo
    let audioUrl = getAudioUrl(thisHour);
    let audioTitle = getAudioTitle(thisHour);

    audioPlayer.src = audioUrl;

    if (audioPlayer.paused) {
        audioPlayer.play();
    }

    let audioTitleElement = document.getElementById('audioTitle');
    console.log(audioTitleElement);

    if (thisHour === 0) {
        audioTitleElement.textContent = "Midnight - Krhuangbin";
    } else if (thisHour === 1) {
        audioTitleElement.textContent = "1AM by Meek Mill";
    } else if (thisHour === 2) {
        audioTitleElement.textContent = "2am";
    } else if (thisHour === 3) {
        audioTitleElement.textContent = "3am";
    } else if (thisHour === 4) {
        audioTitleElement.textContent = "4am";
    } else if (thisHour === 5) {
        audioTitleElement.textContent = "5am";
    } else if (thisHour === 6) {
        audioTitleElement.textContent = "6am";
    } else if (thisHour === 7) {
        audioTitleElement.textContent = "7am";
    } else if (thisHour === 8) {
        audioTitleElement.textContent = "8am";
    } else if (thisHour === 9) {
        audioTitleElement.textContent = "9am";
    } else if (thisHour === 10) {
        audioTitleElement.textContent = "10am";
    } else if (thisHour === 11) {
        audioTitleElement.textContent = "11am";
    } else if (thisHour === 12) {
        audioTitleElement.textContent = "12";
    } else if (thisHour === 13) {
        audioTitleElement.textContent = "1";
    } else if (thisHour === 14) {
        audioTitleElement.textContent = "2";
    } else if (thisHour === 15) {
        audioTitleElement.textContent = "3";
    } else if (thisHour === 16) {
        audioTitleElement.textContent = "4";
    } else if (thisHour === 17) {
        audioTitleElement.textContent = "5";
    } else if (thisHour === 18) {
        audioTitleElement.textContent = "6";
    } else if (thisHour === 19) {
        audioTitleElement.textContent = "7";
    } else if (thisHour === 20) {
        audioTitleElement.textContent = "8";
    } else if (thisHour === 21) {
        audioTitleElement.textContent = "9";
    } else if (thisHour === 22) {
        audioTitleElement.textContent = "10";
    } else if (thisHour === 23) {
        audioTitleElement.textContent = "11";
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
updateTime();

// Update the audio every hour
setInterval(updateTime, 3600000); // Update every hour (3600000 milliseconds)
