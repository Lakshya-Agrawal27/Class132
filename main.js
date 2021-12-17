function setup(){
   canvas = createCanvas(640, 420);
   canvas.center();
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "status: Detecting Object";

}

img = "";
status = "";

function modelLoaded (){
    console.log("Model loaded");
    status = true;
    objectDetector.detect(img, gotResult);
} 
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function preload(){
    img = loadImage('dog_cat.jpg');
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill('blue');
    text("Dog", 45, 75);
    noFill();
    stroke('blue');
    rect(30, 60, 450, 350);

    fill('blue');
    text("Cat", 320, 120);
    noFill();
    stroke('blue');
    rect(300, 90, 270, 320);
}