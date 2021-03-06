class Player {
  constructor(){
    this.name = null;
    this.age = 0;
  }

  getage(){
    var playerageRef = database.ref('playerage');
    playerageRef.on("value",(data)=>{
      playerage = data.val();
    })
  }

  updateage(age){
    database.ref('/').update({
      playerage: age
    });
  }

  update(playerID){
    var playerID = "players/player :" + this.name+this.age;
    database.ref(playerID).set({
      name:this.name,
      age:this.age
    });
  }
}
