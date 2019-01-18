
const game = new Game();
document.querySelector('.rollBtnWord').addEventListener('click', changeDisplayNum);

function changeDisplayNum(num) {
  const newRoll = game.triggerDiceRoll()
  document.querySelector('.diceDisplayNum').innerText = num
}
