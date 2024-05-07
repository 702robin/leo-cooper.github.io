//need to write array where all of these can be accessed
//need to write a swtich that accesses different instruments 
//FIX Mixing issue and peaking

//document.querySelectorAll("class/id")[0] <value in the list  works like array a bit . to grab a group(an instrument)
//let boxes = document.querySelectorAll(".box");
//boxes [0].computedStyleMap.backgroundColor ="blue";

//let winds = ["wind1","wind2","wind3","wind4","wind5","wind6","wind7","wind8","wind9","wind10","wind11","wind12","wind13","wind14","wind15"];

var keyAudioMap = {
  // a
  65: ['wind1', 'peak1'],
  // w
  87: ['wind2', 'peak2'],
  // s
  83: ['wind3', 'peak3'],
  // e
  69: ['wind4', 'peak4'],
  // d
  68: ['wind5', 'peak5'],
  // f
  70: ['wind6', 'peak6'],
  // t
  84: ['wind7', 'peak7'],
  // g
  71: ['wind8', 'peak8'],
  // y
  89: ['wind9', 'peak9'],
  // h
  72: ['wind10', 'peak10'],
  // u
  85: ['wind11', 'peak11'],
  // j
  74: ['wind12', 'peak12'],
  // k
  75: ['wind13', 'peak13'],
  // o
  79: ['wind14', 'peak14'],
  // l
  76: ['wind15', 'peak15']
};

function playAudio(audioIds) {
  audioIds.forEach(function(audioId) {
    var audio = document.getElementById(audioId);
    if (audio && audio.paused) {
      audio.currentTime = 0;
      audio.volume = 1;
      audio.play();
    }
  });
}

function fadeOutAudio(keyCode) {
  var audioIds = keyAudioMap[keyCode];
  if (audioIds) {
    audioIds.forEach(function(audioId) {
      var audio = document.getElementById(audioId);
      if (audio) {
        var initialVolume = audio.volume;
        var fadeSpeed = 0.1; // Adjust the fade speed as needed
        var minVolume = 0.05; // Minimum volume threshold

        var fadeOutInterval = setInterval(function() {
          if (audio.volume > minVolume) {
            audio.volume -= fadeSpeed; // Reduce volume by the fade speed
          } else {
            audio.pause();
            audio.currentTime = 0; // Reset playback position to beginning
            audio.volume = initialVolume; // Reset volume to initial level
            clearInterval(fadeOutInterval);
          }
        }, 100); // 100 milliseconds interval for smooth fading
      }
    });
  }
}

document.addEventListener('keydown', function(event) {
  var keyCode = event.keyCode;
  playAudio(keyAudioMap[keyCode]); // Play all audio files associated with the key
});

document.addEventListener('keyup', function(event) {
  var keyCode = event.keyCode;
  fadeOutAudio(keyCode);
});


// Function to handle keydown event
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is the desired one (e.g., 'w')
  if (event.key === 'a') {
    // Get the element with id "Csharp"
    var cElement = document.getElementById("C");
    // If the element exists, change its background color
    if (cElement) {
      cElement.style.background = "linear-gradient(to right, red, orange)";
    }
  }
  
  if (event.key === 'w') {
    // Get the element with id "Csharp"
    var cSharpElement = document.getElementById("Csharp");
    // If the element exists, change its background color
    if (cSharpElement) {
      cSharpElement.style.background = "linear-gradient(to right, orange, yellow)";
    }
  }

  // Variation for 's' key
if (event.key === 's') {
  var dElement = document.getElementById("D");
  if (dElement) {
    dElement.style.background = "linear-gradient(to right, yellow, green)";
  }
}

// Variation for 'e' key
if (event.key === 'e') {
  var dSharpElement = document.getElementById("Dsharp");
  if (dSharpElement) {
    dSharpElement.style.background = "linear-gradient(to right, green, cyan)";
  }
}

// Variation for 'd' key
if (event.key === 'd') {
  var eElement = document.getElementById("E");
  if (eElement) {
    eElement.style.background = "linear-gradient(to right, cyan, blue)";
  }
}

// Variation for 'f' key
if (event.key === 'f') {
  var fElement = document.getElementById("F");
  if (fElement) {
    fElement.style.background = "linear-gradient(to right, blue, indigo)";
  }
}

// Variation for 't' key
if (event.key === 't') {
  var fSharpElement = document.getElementById("Fsharp");
  if (fSharpElement) {
    fSharpElement.style.background = "linear-gradient(to right, indigo, violet)";
  }
}

// Variation for 'g' key
if (event.key === 'g') {
  var gElement = document.getElementById("G");
  if (gElement) {
    gElement.style.background = "linear-gradient(to right, violet, magenta)";
  }
}

// Variation for 'y' key
if (event.key === 'y') {
  var gSharpElement = document.getElementById("Gsharp");
  if (gSharpElement) {
    gSharpElement.style.background = "linear-gradient(to right, magenta, red)";
  }
}

// Variation for 'h' key
if (event.key === 'h') {
  var aElement = document.getElementById("A");
  if (aElement) {
    aElement.style.background = "linear-gradient(to right, red, yellow)";
  }
}

// Variation for 'u' key
if (event.key === 'u') {
  var aSharpElement = document.getElementById("Asharp");
  if (aSharpElement) {
    aSharpElement.style.background = "linear-gradient(to right, yellow, green)";
  }
}

// Variation for 'j' key
if (event.key === 'j') {
  var bElement = document.getElementById("B");
  if (bElement) {
    bElement.style.background = "linear-gradient(to right, green, cyan)";
  }
}

// Variation for 'j' key
if (event.key === 'k') {
  var bElement = document.getElementById("C");
  if (cElement) {
    cElement.style.background = "linear-gradient(to right, cyan, blue)";
  }
}

// Variation for 'j' key
if (event.key === 'o') {
  var bElement = document.getElementById("Csharp");
  if (cSharpElement) {
    cSharpElement.style.background = "linear-gradient(to right, blue, indigo)";
  }
}

// Variation for 'j' key
if (event.key === 'l') {
  var dElement = document.getElementById("D");
  if (dElement) {
    dElement.style.background = "linear-gradient(to right, indigo, violet)";
  }
}

});



// Function to handle keyup event
document.addEventListener('keyup', function(event) {
  // Check if the released key is the desired one (e.g., 'w')
  // Variation for 'w' key

// Variation for 'a' key
if (event.key === 'a') {
  var cElement = document.getElementById("C");
  if (cElement) {
    cElement.style.background = "linear-gradient(to right, black, black)";
  }
}

if (event.key === 'w') {
  var cSharpElement = document.getElementById("Csharp");
  if (cSharpElement) {
    cSharpElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 's' key
if (event.key === 's') {
  var dElement = document.getElementById("D");
  if (dElement) {
    dElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 'e' key
if (event.key === 'e') {
  var dSharpElement = document.getElementById("Dsharp");
  if (dSharpElement) {
    dSharpElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 'd' key
if (event.key === 'd') {
  var eElement = document.getElementById("E");
  if (eElement) {
    eElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 'f' key
if (event.key === 'f') {
  var fElement = document.getElementById("F");
  if (fElement) {
    fElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 't' key
if (event.key === 't') {
  var fSharpElement = document.getElementById("Fsharp");
  if (fSharpElement) {
    fSharpElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 'g' key
if (event.key === 'g') {
  var gElement = document.getElementById("G");
  if (gElement) {
    gElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 'y' key
if (event.key === 'y') {
  var gSharpElement = document.getElementById("Gsharp");
  if (gSharpElement) {
    gSharpElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 'h' key
if (event.key === 'h') {
  var aElement = document.getElementById("A");
  if (aElement) {
    aElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 'u' key
if (event.key === 'u') {
  var aSharpElement = document.getElementById("Asharp");
  if (aSharpElement) {
    aSharpElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 'j' key
if (event.key === 'j') {
  var bElement = document.getElementById("B");
  if (bElement) {
    bElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 'k' key
if (event.key === 'k') {
  var cElement = document.getElementById("C");
  if (cElement) {
    cElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 'o' key
if (event.key === 'o') {
  var cSharpElement = document.getElementById("Csharp");
  if (cSharpElement) {
    cSharpElement.style.background = "linear-gradient(to right, black, black)";
  }
}

// Variation for 'l' key
if (event.key === 'l') {
  var dElement = document.getElementById("D");
  if (dElement) {
    dElement.style.background = "linear-gradient(to right, black, black)";
  }
}

});
