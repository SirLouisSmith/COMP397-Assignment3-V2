/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/road.ts" />
/// <reference path="objects/car.ts" />
/// <reference path="objects/mycar.ts" />
/// <reference path="objects/gas.ts" />
// Global game Variables
var canvas;
var stage;
var assetLoader;
// Game Objects 
var road;
var gas;
var mycar;
var car1 = [];
var car2 = [];
var lanes = [0, 0, 0, 0, 0, 0, 0, 0];
var manifest = [
    { id: "mycar", src: "assets/images/mycar.png" },
    { id: "road", src: "assets/images/road.png" },
    { id: "car1", src: "assets/images/car1.png" },
    { id: "car2", src: "assets/images/car2.png" },
    { id: "gas", src: "assets/images/gas.png" },
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
    gas.update();
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
    //Gas Object
    gas = new objects.Gas();
    stage.addChild(gas);
    //MyCar Object
    mycar = new objects.MyCar();
    stage.addChild(mycar);
    for (var car = 0; car < 4; car++) {
        car1[car] = new objects.Car("car1", car * 2);
        stage.addChild(car1[car]);
    }
    for (var car = 0; car < 4; car++) {
        car2[car] = new objects.Car("car2", 1 + (car * 2));
        stage.addChild(car2[car]);
    }
}
//# sourceMappingURL=game.js.map