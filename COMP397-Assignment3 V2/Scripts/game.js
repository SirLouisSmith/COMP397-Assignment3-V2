/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="objects/road.ts" />
/// <reference path="objects/car2.ts" />
/// <reference path="objects/car.ts" />
/// <reference path="objects/mycar.ts" />
/// <reference path="objects/gas.ts" />
/// <reference path="objects/scoreboard.ts" />
// Global game Variables
var canvas;
var stage;
var assetLoader;
var currentScore = 0;
var highScore = 0;
// Game Objects 
var currentState;
var currentStateFunction;
var stateChanged = false;
var menu;
var gameplay;
var gameover;
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
    currentState = constants.MENU_STATE;
    changeState(currentState);
}
function gameLoop() {
    if (stateChanged) {
        changeState(currentState);
        stateChanged = false;
    }
    else {
        currentStateFunction.update();
    }
}
//This chages the state of the game
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case constants.PLAY_STATE:
            // instantiate game play screen
            gameplay = new states.GamePlay();
            currentStateFunction = gameplay;
            break;
        case constants.GAME_OVER_STATE:
            // instantiate game over screen
            gameover = new states.GameOver();
            currentStateFunction = gameover;
            break;
    }
}
//# sourceMappingURL=game.js.map