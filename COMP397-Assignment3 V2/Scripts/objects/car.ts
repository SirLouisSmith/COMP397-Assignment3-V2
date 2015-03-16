module objects {
    export class Car extends createjs.Bitmap {

        public width: number;
        public height: number;
        private _dx: number;
        private _lane: number;

        //CONSTRUCTOR
        constructor(name: string, lane: number) {
            super(assetLoader.getResult(name));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this._lane = lane;

            this.x = 720;
            this.y = (32 + this.height * 0.5) + ((this.height + 2) * this._lane);
            console.log("Lane " + this._lane + ": " + this.y);

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