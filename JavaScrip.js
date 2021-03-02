//Welcome to the game
var playerId = window.prompt("What is your user name?");

//user stats
let playerHero = {
    name : playerId,
    health : 100,
    attack : 25,
    speed: 4,
    level : 1,
};

//enemy stats
var EnemyLvlOne= {
    name: 'Xerox',
    health : 30,
    attack : 10,
    speed: 1,
    level : 1,
};
var EnemyLvlTwo= {
    name : 'Unicron',
    health : 50,
    attack : 15,
    speed: 2,
    level : 2,
};
var EnemyLvlThree= {
    name : 'Redestrox',
    health : 70,
    attack : 20,
    speed : 3,
    level : 3,
};

var EnemyLvlFour = {
    name : 'Trivoclex',
    health : 90,
    attack : 25,
    speed : 4,
    level : 4,
};

//enemy array
var Enemies = [EnemyLvlOne, EnemyLvlTwo, EnemyLvlThree, EnemyLvlFour];
console.log(Enemies);

//opponent randomizer
function RandomOpponent(){
    var randomIndex = Math.floor(Math.random() * Enemies.length);
    var randomEnemy = Enemies[randomIndex];
    console.log(randomEnemy.name);
    alert(randomEnemy.name + 'has appeared.' )

    return randomEnemy;
};
console.log(RandomOpponent());
//how can i make it the same opponent?
var randomEnemy = RandomOpponent()



function fight(){    
    while(playerHero.health > 0 && randomEnemy.health> 0) {
    
        promptAttack = confirm(randomEnemy.name + ' has challanged you. Do you wish to fight?');
        if (promptAttack=== true){
            window.alert (playerId + ' , you are a worthy warrior');

            randomEnemy.health = randomEnemy.health - (playerHero.attack);
            playerHero.health = playerHero.health - (randomEnemy.attack);
        
            
            window.alert(randomEnemy.name + ' has ' + randomEnemy.health);
            console.log(randomEnemy.name + ' has ' + randomEnemy.health);
            window.alert("you have " + playerHero.health +" points of health left");
            console.log("you have " + playerHero.health +" points of health left");
        
        }else{ 
            window.alert('You were defeated long before battle');
            playerHero.level - Math.floor(randomEnemy.level/3);
            window.alert('your cowardice costed you ' + Math.floor(randomEnemy.level/3) +' Levels. You are now at Level ' + playerHero.level);

            break;
        };
    };
};
fight();

    
//     Enemies.health[i]  = Enemies.health[i] - playerHero.attack;
//     console.log( Enemies.name[i] + " still has " + Enemies.health[i] + " life. ");
//     playerHero.health = playerHero - Enemies.attack[i];
//     console.log( playerHero.name + " has " + playerHero.health + " life! ");

//     if (Enemies.health <= 0){
//         window.alert(Enemies.name[i] + ' has died x.x ');
//         playerHero.level = playerHero.level + Enemies.level[i];
        
//     } else {
//         window.alert(Enemies.name[i] + ' still has ' + Enemies.health[i] + ' health left... ');
//     };


// while (playerName.health > 0 && Enemies.health > 0){
//     var readyPrompt = window.prompt(" type 'Fight' or 'Skip' below")
//         if (promptFight === "SKIP" || promptFight === "skip" ){
//             var confirmSkip = window.confirm('are you sure you want to quit?');
//             if (confirmSkip){
//                 window.alert(playerName + ' has left, shame on you');
//                 playerName.level = level - 1;
//                 console.log(playerName.level);
//                 break;
//             }
//         }
//     };
// }




