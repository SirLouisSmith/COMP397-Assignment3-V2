/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/ocean.ts" />



// Global game Variables
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;


// Game Objects 
var road: objects.Road;
var mycar: objects.MyCar;
var car1 = [];
var car2 = [];

var manifest = [
    { id: "mycar", src: "assets/images/mycar.png" },
    { id: "road", src: "assets/images/road.png" },
    { id: "car1", src: "assets/images/car1.png" },
    { id: "car2", src: "assets/images/car2.png" },
    { id: "engine", src: "assets/audio/engine.ogg" }
];


function Preload() {
    assetLoader = new createjs.LoadQueue(); // create a new preloader
    assetLoader.installPlugin(createjs.Sound); // need plugin for sounds
    assetLoader.on("complete", init, this); // when assets finished preloading - then init function

    assetLoader.loadManifest(manifest);

}


function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}


// UTILITY METHODS
/*
// DISTANCE CHECKING METHOD
function distance(p1: createjs.Point, p2: createjs.Point): number {
    return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
}

// CHECK COLLISION METHOD
function checkCollision(collider: objects.GameObject) {
    var planePosition: createjs.Point = new createjs.Point(plane.x, plane.y);
    var cloudPosition: createjs.Point = new createjs.Point(collider.x, collider.y);
    var theDistance = distance(planePosition, cloudPosition);
    if (theDistance < ((plane.height * 0.5) + (collider.height * 0.5))) {
        if (collider.isColliding != true) {
            createjs.Sound.play(collider.sound);
        }
        collider.isColliding = true;
    } else {
        collider.isColliding = false;
    }
}
*/

function gameLoop() {

    road.update();
    mycar.update();
    for (var car = 0; car < 4; car++) {
        car1[car].update();
        car2[car].update();
    }
    stage.update();

}


// Our Game Kicks off in here
function main() {

    //Road Object
    road = new objects.Road();
    stage.addChild(road);

    //MyCar Object
    mycar = new objects.MyCar();
    stage.addChild(mycar);

    //Car1 Object
    for (var car = 0; car < 4; car++) {
        car1[car] = new objects.Car("car1", car);
        stage.addChild(car1[car]);
    }

    //Car2 Object
    for (var car = 0; car < 4; car++) {
        car2[car] = new objects.Car("car2", car + 4);
        stage.addChild(car2[car]);
    }
}