function ionianIntro() {
  
  //box
  fill(255);
  rect(200, 150, 700, 400);
  
  //stave
  line(300, 250, 655, 250);
  line(300, 275, 655, 275);
  line(300, 300, 655, 300);
  line(300, 325, 655, 325);
  line(300, 350, 655, 350);
  line(302.5, 375, 337.5, 375);
  
  //notes heads
  fill(0);
  ellipse(320, 375, 25, 20);
  ellipse(365, 362.5, 25, 20);
  ellipse(410, 350, 25, 20);
  ellipse(455, 337.5, 25, 20);
  ellipse(500, 325, 25, 20);
  ellipse(545, 312.5, 25, 20);
  ellipse(590, 300, 25, 20);
  ellipse(635, 287.5, 25, 20);
  
  //notes tails
  fill(0);
  line(332.5, 375, 332.5, 310);
  line(377.5, 362.5, 377.5,297.5);
  line(422.5, 350, 422.5, 285);
  line(467.5, 337.5, 467.5, 278.5);
  line(512.5, 325, 512.5, 260);
  line(557.5, 312.5, 557.5, 247.5);
  line(577.5, 300, 577.5, 365);
  line(622.5, 287.5, 622.5, 352.5);
  
  //sharps&flats
  
  //writing
  textSize(32);
  text("Ionian",450, 450);
  
  //buttons
  PlayIonianMode = createButton("Play Ionian Mode");
  PlayIonianMode.position(725, 250);
  PlayIonianMode.mousePressed(play1);
  
  StopIonianMode = createButton("Stop Ionian Mode");
  StopIonianMode.position(725, 300);
  StopIonianMode.mousePressed(stop1);
  
  GameIonianMode = createButton("Ionian Game");
  GameIonianMode.position(725, 350);
  GameIonianMode.mousePressed(game1);
  
}
