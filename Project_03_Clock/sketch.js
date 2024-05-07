function updateTime() {
    let today = new Date();
    let thisHour = today.getHours();

    // Array of YouTube video IDs, one for each hour of the day
    let videoIds = [
        'VIDEO_ID_HOUR_0', // Video for 0:00
        'VIDEO_ID_HOUR_1', // Video for 1:00
        // Add more video IDs as needed
        'VIDEO_ID_HOUR_13', // Video for 1:00 PM
        'VIDEO_ID_HOUR_14', // Video for 2:00 PM
        // Add more video IDs as needed
    ];

    // Load the corresponding video for the current hour
    player.loadVideoById({
        videoId: videoIds[thisHour],
        playerVars: {
            controls: 0, // Hide controls to prevent user interaction
            modestbranding: 1,
            playsinline: 1, // Play the video inline on mobile devices
        },
    });
}

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360', // Change height to maintain square aspect ratio
        width: '360', // Change width to maintain square aspect ratio
        playerVars: {
            controls: 0, // Hide controls to prevent user interaction
            modestbranding: 1,
            playsinline: 1, // Play the video inline on mobile devices
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Start with loading the video for the current hour
    updateTime();
    setInterval(updateTime, 3600000); // Update the video every hour (3600000 milliseconds)

    // Ensure the video plays
    player.playVideo();
    player.setLoop(true); // Loop the video until the next hour
}

function updateTime() {
    let today = new Date();

    let thisMonth = today.getMonth();

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December",]

    let thisDate = today.getDate();

    let thisWeekday = today.getDay();

    let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]

    let thisYear = today.getFullYear();

    //adding innerHTML

    let dateElement = document.getElementById("dateHere");

    dateElement.innerHTML = months[thisMonth] + " " + thisDate + ", " + thisYear;

    let thisHour = today.getHours();

    let thisMinute = today.getMinutes();

    let thisSecond = today.getSeconds();

    //conditional
    if(thisHour > 12) {
        thisHour = thisHour - 12
    }

    if(thisSecond < 10) {
        thisSecond = "0" + thisSecond;
    }

    //60 FPS could give you access to a frame

    if(thisSecond % 10) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "green";
    }

    //add innerHTML

    let timeElement = document.getElementById("timeHere");

    timeElement.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;
}

setInterval(updateTime, 1000);
