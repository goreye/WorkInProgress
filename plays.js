var oscIonC;
var playing = false;
var freqIon =  [261.63, 293.67, 329.63, 349.63, 392, 440, 493.88, 523.25];
  
function play1() {
  oscIonC = new p5.Oscillator();
  oscIonC.setType('sine');
  oscIonC.freq(240);
  oscIonC.amp(0);
  oscIonC.start();

    if (!playing) {
      // ramp amplitude to 0.5 over 0.1 seconds
      oscIonC.amp(0.5, 0.05);
      playing = true;
    } 
}


function stop1() {
  // ramp amplitude to 0 over 0.5 seconds
  oscIonC.amp(0, 0.5);
  playing = false;
}