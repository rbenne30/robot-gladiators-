var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

<<<<<<< HEAD
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
=======
var enemyName = "Roborto";
>>>>>>> 5a00d2203d001b73e1e1a0550287a668f1fc3d9c
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};
 var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
 // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
   // remove enemy's health by subtracting the amount set in the playerAttack variable
   enemyHealth = enemyHealth - playerAttack;
   console.log(
<<<<<<< HEAD
     playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
=======
     playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
>>>>>>> 5a00d2203d001b73e1e1a0550287a668f1fc3d9c
   );
 
   // check enemy's health
   if (enemyHealth <= 0) {
<<<<<<< HEAD
     window.alert(enemyNames + " has died!");
   } else {
     window.alert(enemyNames + " still has " + enemyHealth + " health left.");
=======
     window.alert(enemyName + " has died!");
   } else {
     window.alert(enemyName + " still has " + enemyHealth + " health left.");
>>>>>>> 5a00d2203d001b73e1e1a0550287a668f1fc3d9c
   }
 
   // remove player's health by subtracting the amount set in the enemyAttack variable
   playerHealth = playerHealth - enemyAttack;
   console.log(
     enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
   );
 
   // check player's health
   if (playerHealth <= 0) {
     window.alert(playerName + " has died!");
   } else {
     window.alert(playerName + " still has " + playerHealth + " health left.");
   }
   // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
   // confirm player wants to skip
   var confirmSkip = window.confirm("Are you sure you'd like to quit?");
 
   // if yes (true), leave fight
   if (confirmSkip) {
     window.alert(playerName + " has decided to skip this fight. Goodbye!");
     // subtract money from playerMoney for skipping
     playerMoney = playerMoney - 2;
   }
   // if no (false), ask question again by running fight() again
   else {
     fight();
   }
 }
 
 
 