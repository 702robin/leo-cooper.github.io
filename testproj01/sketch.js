//NOTES
// need to smoothen audioreaction using envelope -- connect size change and color change to envelope

// '//' means safe keeping or idk what it does

//line 29 and 58. why doesn't oscillator work?

//mvmt sphere var
var x = 0;
var speed = 4;
//let xOff = 0;
//let yOff = 1;
//let zOff = 2;

//mvmt orbital
let counter = 0;


//audio
let mic;
let fft;

//envelope
let t1 = 5; //attack time in seconds
let l1 = 0.5; // attack level 0.0 to 1.0
let t2 = 2; // decay time in seconds
let l2 = 0.5; // decay level 0.0 to 1.0
let env;

//background
class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }
}

//------------------------------------------------
//START
function setup() {
  let cnv = createCanvas(1000, 1000, WEBGL);
  cnv.mousePressed(userStartAudio);
  //cnv.mousePressed(playOscillator);
  //osc = new p5.Oscillator('sine');
  
//mic begin  
  mic = new p5.AudioIn();
  mic.start();
  
//fft (fastfouriertransform) isolates frequencies
  fft = new p5.FFT();
  fft.setInput(mic);
  
//envelope
  env = new p5.Envelope(t1,l1,t2,l1);
  
function playEnv() {
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
    env.play(micLevel);
  }

}
//------------------------------------------------
function draw() {
  background("beige");
  
//mic
  //CHANGE LEVELS HERE
  micLevel = mic.getLevel() * 20;
  let y = height + micLevel * 100
  

//oscillator
  //freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  //amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);
  
  //if (playing) {
    //osc.freq(freq, 0.1);
    //osc.amp(amp, 0.1);
  //}
  //function playOscillator() {
  //osc.start();
  //playing = true;
  //}
  
 //function mouseReleased() {
   //osc.amp(0, 0.5);
   //playing = false;
 //}
  
//fft
  let spectrum = fft.analyze();
  
  fill("red");
  beginShape();
  for (i = 0; i < spectrum.length/2; i++) {
    vertex(i - 250, map(spectrum[i * 2], 50, 300, height/6, 0));
  }
  endShape();
  
//line
  noStroke();
  fill(20 + micLevel * 500, 0 + micLevel * 100, 300 - micLevel * 100,);
  rect(0, -62, 2, 125);
  
//middleBOX
  let c = color ("black");
  let value = alpha(c);
  fill(value);
  stroke(200);
  strokeWeight(1);
  push();
  rotateY(millis() / 1000);
  rotateX(millis() / 1200);
  box(10,10);
  pop();  
  
//orbit
  background("rgba(0,0,0,0.01)");
  let Orby = (sin(counter) * 100);
  let Orbx = (cos(counter) * 100);
  fill("black");
  stroke("white");
  ellipse(Orbx * 2.5, Orby * 2.5, 12, 12);
  
  counter += 100353;
  
//innersphere
  noFill();
  stroke(300 - micLevel * 200, 300 - micLevel * 200, 300 - micLevel * 200);
  strokeWeight(0.5);
  push();
  translate(0, 0, x/50);
  rotateY(millis() / -2000);
  sphere(100 - height * micLevel/20);
  pop();

//outtersphere
  noFill();
  stroke(100 + micLevel * 200, 100 + micLevel * 200, 100 + micLevel * 200);
  strokeWeight(0.5);
  push();
  translate(0, 0, x/50);
  //translate(noise(xOff), noise(yOff), + noise(zOff));
  rotateY(millis() / 8000);
  sphere(200 + height * micLevel/10);
  pop();


  ///xOff += 0.001;
  //yOff += 0.001;
  //zOff += 0.001;


  
//mvmt
  if (x > width) {
    speed = -4;
  }
  
  if (x < -width) {
    speed = 4;
  }
  x = x + speed
  
}