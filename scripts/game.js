class Game {
  constructor() {
    this.dice = new Dice();
    this.board = new Board();
  }

  triggerDiceRoll(){ 
    return this.dice.diceRoll()
  }
}