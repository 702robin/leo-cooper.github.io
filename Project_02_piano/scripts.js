//need to write array where all of these can be accessed
//need to write a swtich that accesses different instruments 
//FIX Mixing issue and peaking

//document.querySelectorAll("class/id")[0] <value in the list  works like array a bit . to grab a group(an instrument)
//let boxes = document.querySelectorAll(".box");
//boxes [0].computedStyleMap.backgroundColor ="blue";

let winds = ["wind1","wind2","wind3","wind4","wind5","wind6","wind7","wind8","wind9","wind10","wind11","wind12","wind13","wind14","wind15"];

function audioVolumeOut(q){
  if(q.volume){
     let InT = 1;
     let setVolume = 0;  
     let speed = 0.05;
     q.volume = InT;
     let fAudio = setInterval(function(){
         InT -= speed;
         q.volume = InT.toFixed(1);
         if(InT.toFixed(1) <= setVolume){
            q.pause();
            q.currentTime = 0;
            q.volume = 1;
            clearInterval(fAudio);
         };
     },1);
  };
};

function playAudio(key, id){
  if (a.keyCode == key) {
    document.getElementById(id).play();
  }  
}

function audioVolumeOut(key, id){
  if (a.keyCode == key) {
    document.getElementById(id).audioVolumeOut();
  }
}

document.addEventListener('keydown', function(a) {
    playAudio(65, 'wind1');
    playAudio(87, 'wind2');
    playAudio(83, 'wind3');
    playAudio(69, 'wind4');
    playAudio(68, 'wind5');
    playAudio(70, 'wind6');
    playAudio(84, 'wind7');
    playAudio(71, 'wind8');
    playAudio(89, 'wind9');
    playAudio(72, 'wind10');
    playAudio(74, 'wind11');
    playAudio(73, 'wind12');
    playAudio(75, 'wind13');
    playAudio(79, 'wind14');
    playAudio(76, 'wind15');
    });

  document.addEventListener('keyup', function(a) {
    audioVolumeOut(65, 'wind1');
    audioVolumeOut(87, 'wind2');
    audioVolumeOut(83, 'wind3');
    audioVolumeOut(69, 'wind4');
    audioVolumeOut(68, 'wind5');
    audioVolumeOut(70, 'wind6');
    audioVolumeOut(84, 'wind7');
    audioVolumeOut(71, 'wind8');
    audioVolumeOut(89, 'wind9');
    audioVolumeOut(72, 'wind10');
    audioVolumeOut(74, 'wind11');
    audioVolumeOut(73, 'wind12');
    audioVolumeOut(75, 'wind13');
    audioVolumeOut(79, 'wind14');
    audioVolumeOut(76, 'wind15');
    });

  