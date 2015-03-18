// Author: Louis Smith
// File: car2.ts
// Last Modified Date: 18/03/2015
// Description: This is a second version of the enemy,
//  with a random chance to change lanes

module objects {
    export class Car2 extends objects.GameObject {

        public width: number;
        public height: number;
        private _lane: number;

        // LANE CHANGE VARIABLES
        private _lane1: number;
        private _lane2: number;
        private _up: boolean = false;
        private _magicNum: number;
        private _picker: number;

        // CONSTRUCTOR
        constructor(lane: number) {
            super("car2");

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this._lane = lane;

            this.x = 720;
            this.y = (32 + this.height * 0.5) + ((this.height + 2) * this._lane);
            this._lane1 = this.y;
            this._lane2 = this.y + this.height + 2;

            this._dx = Math.floor((Math.random() * 3) + 4);
            this._dy = 1;
            this.reset();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._magicNum = Math.floor(Math.random() * constants.RND_RANGE);
            this._picker = Math.floor(Math.random() * constants.RND_RANGE);
        }
        // PUBLIC METHODS
        public update() {
            this.x -= this._dx;
            if (this._magicNum === this._picker) {
                if (!this._up) {
                    this.y += this._dy;
                    if (this.y >= this._lane2) {
                        this._up = true;
                        this._picker = Math.floor(Math.random() * constants.RND_RANGE);
                    }
                }
                if (this._up) {
                    this.y -= this._dy;
                    if (this.y <= this._lane1) {
                        this._up = false;
                        this._picker = Math.floor(Math.random() * constants.RND_RANGE);
                    }
                }
            }
            if (this._magicNum !== this._picker) {
                this._picker = Math.floor(Math.random() * constants.RND_RANGE);
            }

            if (this.x <= 0 - this.width) {
                this.reset();
            }
        }

        public reset() {
            this.x = 720;
            this._dx = Math.floor((Math.random() * 4) + 5);
        }
    }
}     