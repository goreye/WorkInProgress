var ionian, lydian, mixolydian, dorian, phrygian, aeolian, locrian;
var PlayIonianMode;
var StopIonianMode;
var GameIonianMode;
var play1;
var stop1;
var game1;

function setup() {
  createCanvas(1100, 700);
  background(100, 60, 180);

}

function draw() {
  ionian = createButton("ionian");
  ionian.position(100, 50);
  ionian.mousePressed(ionianIntro);
}
