//Welcome to the game
var playerName = window.prompt("What is your user name?");

//user stats
let playerHero = {
    name : playerName,
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
    return randomEnemy;
    
};
console.log(RandomOpponent())




function fight(){
    
    var promptfight = window.prompt(RandomOpponent + ' has entered the battlefield, do u fight?');
    if (promptfight){
        window.alert (playerName + ' you are a worthy warrior');

    }else{ 
        window.alert('see you later!');
    };
};

fight();


// function fight(){
    
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




