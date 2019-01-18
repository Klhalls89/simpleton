class Dice {
  constructor() {
    this.sides = 6
  }

  diceRoll() {
    let newRoll = Math.ceil(Math.random() * (6 - 0) + 0);
    return newRoll
  }
}