function updateTime() {
    let today = new Date();
    let thisHour = today.getHours();

    // Array of MP3 file URLs, one for each hour of the day
    let audioUrls = [
        'audio/midnight.mp3', // Audio for 0:00 | Midnight by Artist
        'audio/1_am.mp3', // Audio for 1:00 AM
        // Add more audio URLs as needed
        'audio/1_pm.mp3', // Audio for 1:00 PM
        'audio/2_pm.mp3', // Audio for 2:00 PM
        // Add more audio URLs as needed
    ];

    // Load and play the corresponding audio for the current hour
    let audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = audioUrls[thisHour];
}

// Call updateTime function initially
updateTime();

// Update the audio every hour
setInterval(updateTime, 3600000); // Update every hour (3600000 milliseconds)