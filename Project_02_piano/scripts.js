const sounds = {
    'KeyW': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/tom1.ogg',
    'KeyA': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/tom2.ogg',
    'KeyS': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/tom3.ogg',
    'KeyD': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/pad1.ogg',
    'KeyJ': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/snare1.ogg',
    'KeyK': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/crash1.ogg',
    'KeyL': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/kik.ogg'
  }
  
  const play = sound => {
    console.log("playing",sound)
    var audio = new Audio(sound);
    audio.play();
  }
  
  
  document.getElementById('drumSet').addEventListener('click', function(e) {
    const tgt = e.target.closest('button');
    if (tgt) play(sounds[tgt.id])
  })
  
  window.addEventListener('keypress', function(e) { console.log(e.code)
    if (sounds[e.code]) {
      console.log("clicking",e.code)
      document.getElementById(e.code).click()
    }  
  })