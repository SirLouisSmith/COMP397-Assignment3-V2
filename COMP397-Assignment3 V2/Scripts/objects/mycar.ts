module objects {
    export class MyCar extends createjs.Bitmap {

        public width: number;
        public height: number;
        
        //CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("mycar"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = 100;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            createjs.Sound.play("engine", { loop: "-1" });
        }
        //PUBLIC METHODS
        public update() {
            this.y = stage.mouseY;
        }
    }
}    