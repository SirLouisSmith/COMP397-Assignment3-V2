//Author: Louis Smith
//File: mycar.ts
//Last Modified Date: 18/03/2015
//Description: This is the player character that can move up and down

module objects {
    export class MyCar extends createjs.Bitmap {

        public width: number;
        public height: number;
        public safe: boolean = false;

        private _hit: boolean = false;
        private _counter: number = 0;
        private _maxSpin: number;
        private _drotate: number;
        
        //CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("mycar"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = 100;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            createjs.Sound.play("engine", { loop: "-1" });

            this._drotate = 20;
            this._maxSpin = 360 * 3;
        }
        //PUBLIC METHODS
        public update() {
            this.y = stage.mouseY;
            if (this._hit) {
                this.rotation += this._drotate;
                this._counter += this._drotate;
                if (this._counter === this._maxSpin) {
                    this._counter = 0;
                    this._hit = false;
                    this.safe = false;
                    this.alpha = 1;
                }
            }
        }

        public hit() {
            this._hit = true;
            this.safe = true;
            this.alpha = 0.7;
        }
    }
}    