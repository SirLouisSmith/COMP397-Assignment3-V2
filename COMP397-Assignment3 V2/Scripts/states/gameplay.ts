﻿// Author: Louis Smith
// File: gameplay.ts
// Last Modified Date: 18/03/2015
// Description: This is the state where the game plays

module states {
    export class GamePlay {
        // Game Objects
        public game: createjs.Container;

        public gas: objects.Gas;
        public mycar: objects.MyCar;
        public car1 = [];
        public car2 = [];
        public scoreboard: objects.ScoreBoard;
        // Constructor
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Gas Object
            this.gas = new objects.Gas();
            this.game.addChild(this.gas);

            // MyCar Object
            this.mycar = new objects.MyCar();
            this.game.addChild(this.mycar);

            // Car1 Object
            this.car1[0] = new objects.Car(0);
            this.car1[1] = new objects.Car(7);
            for (var i = 0; i < 2; i++) {
                this.game.addChild(this.car1[i]);
            }

            // Car2 Object
            for (var c = 0; c < 3; c++) {
                this.car2[c] = new objects.Car2(1 + (c * 2));
                this.game.addChild(this.car2[c]);
            }

            // ScoreBoard Object
            this.scoreboard = new objects.ScoreBoard(this.game);

            stage.addChild(this.game);
        }
        // DISTANCE CHECKING METHOD
        public distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }
        // CHECK COLLISION METHOD
        public checkCollision(collider: objects.GameObject) {
            if (this.scoreboard.active) {
                var carPosition: createjs.Point = new createjs.Point(this.mycar.x, this.mycar.y);
                var objectPosition: createjs.Point = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(carPosition, objectPosition);
                if (theDistance < ((this.mycar.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding !== true) {
                        if (!this.mycar.safe) {
                            createjs.Sound.play(collider.sound);
                            if (collider.name === "car1" || collider.name === "car2") {
                                this.mycar.hit();
                                this.scoreboard.lives--;
                            }
                            if (collider.name === "gas") {
                                this.scoreboard.score += constants.POINTS;
                                this.gas.reset();
                            }
                        }
                    }
                    collider.isColliding = true;
                } else {
                    collider.isColliding = false;
                }
            }
        }// checkCollision Method

        public update() {
            this.gas.update();
            this.checkCollision(this.gas);

            this.mycar.update();
            for (var i = 0; i < 2; i++) {
                this.car1[i].update();
                this.checkCollision(this.car1[i]);
            }
            for (var car = 0; car < 3; car++) {
                this.car2[car].update();
                this.checkCollision(this.car2[car]);
            }
            this.scoreboard.update();

            if (this.scoreboard.lives < 1) {
                this.scoreboard.active = false;
                createjs.Sound.stop();
                currentScore = this.scoreboard.score;
                if (currentScore > highScore) {
                    highScore = currentScore;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
            stage.update();
        }
    }
}  