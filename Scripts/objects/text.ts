//Author: Louis Smith
//File: text.ts
//Last Modified Date: 18/03/2015
//Description: This managers the text labels that can be placed in the game

module objects {
    export class Text extends createjs.Text {
        constructor(x:number,y:number,labelText:string) {
            super(labelText, "40px Impact", "#ff0000");
            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
            this.x = x;
            this.y = y;
        }
    }
}  