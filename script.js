const attacker = {
    name: "attacker",
    hull: 20,
    firepower: 5,
    accuracy: 0.7
  };

  class AlienShip {
    constructor() {
        this.name = "defender",
      this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3
          this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2
          this.accuracy = Math.random() * (0.8 - 0.6) + 0.6

  }
  }
  const alienShips = [];
for (let i = 0; i < 6; i++) {
  alienShips.push(new AlienShip());
}
function attack(attacker, defender) {
  if (Math.random() < attacker.accuracy) {
    console.log(`${attacker.name} has hit the ${defender.name} with ${attacker.firepower} firepower!`);
    defender.hull -= attacker.firepower;
  } else {
    console.log(`${attacker.name} has missed the ${defender.name}.`);
  }
  console.log(attacker);
}
function checkStatus(ship) {
  if (ship.hull <= 0) {
    console.log(`${ship.name} has been destroyed!`);
    return true;
  } else {
    return false;
  }
}
let alienShipIndex = 0;
while (alienShipIndex < alienShips.length) {
    const currentAlienShip = alienShips[alienShipIndex];
  console.log(`You are attacking alien ship ${alienShipIndex + 1} of ${alienShips.length}.`);
  attack(attacker, currentAlienShip);
  if (checkStatus(currentAlienShip)) {
    alienShipIndex++;
    if (alienShipIndex === alienShips.length) {
      console.log("Congratulations! You've destroyed all the alien ships!");
      break;
    }
    const nextAction = prompt("Alien ship destroyed! Do you want to attack the next ship or retreat? (attack/retreat)");
    if (nextAction.toLowerCase() === "retreat") {
      console.log("Game over. Better luck next time!");
      break;
    }
    console.log(`Prepare to attack alien ship ${alienShipIndex + 1} of ${alienShips.length}.`);
  }
  attack(currentAlienShip, attacker);
  if (checkStatus(attacker)) {
    console.log("Game over. The aliens have taken over Earth!");
    break;
  }
}