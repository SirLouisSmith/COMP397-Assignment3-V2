module states {
    export class Menu {
        //Game Objects
        public game: createjs.Container;
        public road: objects.Road;
        //Constructor
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            //Road Object
            this.road = new objects.Road();
            this.game.addChild(this.road);

            stage.addChild(this.game);
        }

        public update() {
            this.road.update();

            stage.update();
        }
    }
} 