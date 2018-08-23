//FRONTEND
var diceNumber=0;// set the showing Dice total
var turnscore=0; //running total of the current player
//var total=0;
$(document).ready(function(){

  $("#rollButton").click(function(){
    //the Dice needs to roll and user either keep rolling or loosing all points
  rollDice();
  turnScore();
  instancePlayer.switchButtons();
  $("#rollStatus").text(result);
  });

  $("#holdButton").click(function(){
    //all accumulated ponts are stored and turn goes to another player
  instancePlayer.hold();
  instancePlayer.switchButtons();
  $("#user1Status").text(0);
  $("#userTotal").text(instancePlayer.total);
  alert("Your points are added to your total, now pass the mouse")
  });

  $("#rollButton2").click(function(){
    //the Dice needs to roll and user either keep rolling or loosing all points
  rollDice();
  turnScore2();
  instance1Player.switchButtons1();
  $("#rollStatus").text(result);

  });

  $("#holdButton2").click(function(){
    //all accumulated ponts are stored and turn goes to another player
  instance1Player.hold();
  instance1Player.switchButtons1();
  $("#user2Status").text(0);
  $("#user2Total").text(instance1Player.total);
  alert("Your points are added to your total, now pass the mouse")
  });
});

//BACKEND

function Player(id){
  this.id=id;
  this.total=0;
}

var instancePlayer = new Player(0);
var instance1Player = new Player(1);

var rollDice = function (){
  result = (Math.floor(Math.random()*6)+1);
}

Player.prototype.switchButtons = function(){
  if (turnscore === 0){
    $("#rollButton").hide();
    $("#holdButton").hide();
    $("#rollButton2").show();
    $("#holdButton2").show();
  }
}
Player.prototype.switchButtons1 = function(){
  if (turnscore === 0){
    $("#rollButton").show();
    $("#holdButton").show();
    $("#rollButton2").hide();
    $("#holdButton2").hide();
  }
}
Player.prototype.hold = function(){
  this.total += turnscore
  turnscore = 0;
}

var turnScore = function() {
  if (result === 1) {
    turnscore = 0;
    $("#user1Status").text(0);
    alert("Pass the mouse to the other player, you rolled a 1, your turn has ended")
  }
  else if(instancePlayer.total >= 100) {
  alert("You are the winner!");
  } else {
    turnscore += result
    $("#user1Status").text(turnscore);
}
};

var turnScore2 = function() {
  if (result === 1) {
    turnscore = 0;
    $("#user2Status").text(0);
    alert("Pass the mouse to the other player, you rolled a 1, your turn has ended")
  }
  else if(instance1Player.total >= 100){
  alert("You are the winner!");
  } else {
    turnscore += result
    $("#user2Status").text(turnscore);
}
};
