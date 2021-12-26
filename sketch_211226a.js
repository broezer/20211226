// Based on https://editor.p5js.org/cacheflowe/sketches/JWQn2Wn4E
// A template for rendering a looping animation to video file.
// Step 1:
// Import the following Javascript in index.html:
// <script type="module" src="https://cacheflowe.github.io/haxademic.js/src/p5-recorder.es6.js"></script>
// Step 2: 
// Copy the code above `setup()` below
// Step 3:
// In `draw()` call `updateLoopRecording()` after you've draw your stuff:
// `if(saveVideo) updateLoopRecording();`
// Step 4:
// Download your video with the button that shows up under your sketch
// Step 5:
// Convert your downloaded .webm video to mp4 here: 
// https://ffmpegwasm.netlify.app/

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Editable properties:
// Edit `loopFrames` to change the loop duration
// And disable `saveVideo` while you're working on your sketch
var loopFrames = 400; // 8-second loop (50fps * 8)
let saveVideo = true;
let xStep = 0;

// Loop properties that help you loop elements in your animation.
// These are updated in `updateLoopRecording()`
let frameCountLooped = 1;
let loopProgress = 0;
let loopProgressRadians = 0;

// call this function at the end of `draw()`
var recorder = null;
function updateLoopRecording() {
  // create a looped framecount & normalized progress
  frameCountLooped = frameCount % loopFrames;
  loopProgress = frameCountLooped / loopFrames;
  loopProgressRadians = loopProgress * TWO_PI;
  // update video recorder
  if(saveVideo) {
    if(!recorder) recorder = new p5Recorder(loopFrames);
    recorder.renderVideo();
  }
}
/////////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////////



function setup() {
  
  createCanvas(400, 400);
  frameRate(50);
  background('black');
}

function draw() {

  var w = width;
  var h = height;
  
 
  
  rotate(PI);
  translate(-w, -h);
  push();
  translate(-w/3, h/3);
  for (var i=0; i<7; i+=1){
    drawLoopedShapes();
    translate(w * 0.15, h/2 * xStep); 
    scale(0.7);
  }
  pop();
  
  push();
  translate(w/3, h/3);
  for (var i=0; i<7; i+=1){
    drawLoopedShapes();
    translate(w * 0.15, h/2 * xStep); 
    scale(0.7);
  }
  pop();
  for (var i=0; i<7; i+=1){
    drawLoopedShapes();
    translate(w * 0.15, h/2 * xStep); 
    scale(0.7);
  }
  
  
  updateLoopRecording();

}

function drawLoopedShapes() {
  // draw something on a loop!
  var w = width;
  var h = height;

  
  fill('white');
  triangle( (w/4), h, (w/2), h/2, (w/4) * 3, w)
  
  //console.log(loopProgressRadians);
  xStep = xStep + (0.001 * cos(loopProgressRadians));
}
