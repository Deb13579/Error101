class Form {

  constructor() {
    this.input = createInput("Name");
    this.input1 = createInput("Age(numbers)");
    this.button = createButton('submit');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.start = createButton('Start');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input1.hide();
    this.title.hide();
  }

  display(){
    this.title.html("LEARN TO DRIVE");
    this.title.position(250, 50);
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
    this.input1.position(550,420);
    this.input1.style('width', '200px');
    this.input1.style('height', '20px');
    this.input1.style('background', 'lavender');


    this.button.mousePressed(()=>{
      
        this.input.hide();
        this.button.hide();
        this.input1.hide();

        playerage  =this.input1.value();
        player.name = this.input.value();
        player.updateID(playerID);
        
        if(playerage>=18){

          this.greeting.style('color', 'white');
          this.greeting.style('font-size', '100px');
          this.greeting.html("Hello "+player.name);
          this.greeting.position(400,250);
      
          var num = "swz"+player.age+1;
          player.age= num;
          player.update();
          player.updateage(playerage);
        
        }

        else if(playerage=="∞"){
          this.greeting.html("You are a fake player<br>No one is ∞ years old<br>Nice try ;)")
          this.greeting.position(550,400)
        }

        else{
          this.greeting.html("Your are not eligible<br>to take the test");
          this.greeting.position(550,400);    
        }

        this.start.mousePressed(() => {
          //player.updateID();
          this.greeting.hide();
          this.start.hide();
          game.update(1);
          
      });
    });

  }
}
