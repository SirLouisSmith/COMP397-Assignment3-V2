module objects {
    export class Gas extends createjs.Bitmap {

        public width: number;
        public height: number;
        private _dx: number = 4;

        //CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("gas"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //This is x
            this.x = 720;
            this.y = 32 + (Math.random() * (480 - 64));

            this.reset();
        }
        //PUBLIC METHODS
        public update() {
            this.x -= this._dx;
            if (this.x <= -(this.width / 2) - 10) { //if road is passed certain point
                this.reset();
            }
        }
        public reset() {
            this.x = 720;
            this.y = 32 + (Math.random() * (480 - 64));
        }
    }
}      