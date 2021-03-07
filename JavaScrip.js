//Welcome to the game
var playerId = window.prompt("What is your user name?");

//user stats
let playerHero = {
    name: playerId,
    health: 100,
    attack: 25,
    speed: 4,
    level: 1,
};

//enemy stats
var EnemyLvlOne = {
    name: 'Xerox',
    health: 30,
    attack: 10,
    speed: 1,
    level: 1,
};
var EnemyLvlTwo = {
    name: 'Unicron',
    health: 50,
    attack: 15,
    speed: 2,
    level: 2,
};
var EnemyLvlThree = {
    name: 'Redestrox',
    health: 70,
    attack: 20,
    speed: 3,
    level: 3,
};

var EnemyLvlFour = {
    name: 'Trivoclex',
    health: 90,
    attack: 25,
    speed: 4,
    level: 4,
};


//enemy array
var Enemies = [EnemyLvlOne, EnemyLvlTwo, EnemyLvlThree, EnemyLvlFour];
console.log(Enemies);

var fightBtn = document.getElementById("fightButton");


fightBtn.addEventListener('click', fight());

function RandomOpponent() {
    var randomIndex = Math.floor(Math.random() * Enemies.length);
    var randomEnemy = Enemies[randomIndex];
    console.log(randomEnemy.name);
    alert(randomEnemy.name + 'has appeared.')
    return randomEnemy;
};

function fight() {

    var randomEnemy = RandomOpponent()
    console.log(randomEnemy);

    promptAttack = confirm(randomEnemy.name + ' has challanged you. Do you wish to fight?');
    if (promptAttack === true) {

        while (playerHero.health > 0 && randomEnemy.health > 0) {
            
            window.alert(playerId + ' and ' + randomEnemy.name + ' exchange blows');

            randomEnemy.health = randomEnemy.health - (playerHero.attack);
            playerHero.health = playerHero.health - (randomEnemy.attack);

            window.alert(randomEnemy.name + ' has ' + randomEnemy.health);
            console.log(randomEnemy.name + ' has ' + randomEnemy.health);
            window.alert("you have " + playerHero.health + " points of health left");
            console.log("you have " + playerHero.health + " points of health left");

            if (playerHero.health <= 1 || randomEnemy.health <= 1){
                
                console.log('enemy has been defeated');
                return;
            };
            
        };
    } else {
        window.alert('You were defeated long before battle');
        playerHero.level - Math.floor(randomEnemy.level / 3);
        window.alert('your cowardice costed you ' + Math.floor(randomEnemy.level / 3) + ' Levels. You are now at Level ' + playerHero.level);

    };

};

