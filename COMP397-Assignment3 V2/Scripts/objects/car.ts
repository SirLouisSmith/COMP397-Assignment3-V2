//Author: Louis Smith
//File: car.ts
//Last Modified Date: 18/03/2015
//Description: This is the first enemy that drives in a straight line

module objects {
    export class Car extends objects.GameObject {

        public width: number;
        public height: number;
        private _lane: number;

        //CONSTRUCTOR
        constructor(lane: number) {
            super("car1");

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this._lane = lane;

            this.x = 720;
            this.y = (32 + this.height * 0.5) + ((this.height + 2) * this._lane);

            this._dx = Math.floor((Math.random() * 3) + 4);
            this.reset();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        //PUBLIC METHODS
        public update() {
            this.x -= this._dx;
            if (this.x <= 0 - this.width) { //if island left the bottom of the screen
                this.reset();
            }
        }

        public reset() {
            this.x = 720;
            this._dx = Math.floor((Math.random() * 4) + 5);
        }
    }
}    