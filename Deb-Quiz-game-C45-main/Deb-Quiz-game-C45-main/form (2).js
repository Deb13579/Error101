/*
class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.start = createButton('Start');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("LEARN TO DRIVE");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.start.position(900, 660);
        this.start.style('width', '100px');
        this.start.style('height', '30px');
        this.start.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            playerID = this.input.value();
            //var num = "IND"+
            player.update();
            player.updateID(playerID);
            this.greeting.html("Hello " + playerID)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
            
        });

        this.start.mousePressed(() => {
            //player.updateID();
            //this.greeting.hide();
            this.start.hide();
            game.update(1);
            
        });

    }
}
*/