function initGame() {
  return null
}

function countCells(board) {
  return 2
}

function moveRight(input) {
  return input.map(moveRowRight)
}

function moveLeft(input) {
  return input.map(moveRowLeft)
}

function collapse(list) {
  if (list.length < 2) return list
  if (list[0] === list[1]) {
    return [list[0] + list[1], ...collapse(list.slice(2))]
  }
  return [list[0], ...collapse(list.slice(1))]
}

function moveRowLeft(input) {
  const output = collapse(input.filter(cell => cell !== 0))
  while (output.length < 4) {
    output.push(0)
  }

  return output
}

function moveRowRight(input) {
  return moveRowLeft(input.reverse()).reverse()
}

function moveUp(input) {
  return rotateCounterClockwise(moveRight(rotateClockwise(input)))
}

function moveDown(input) {
  return rotateCounterClockwise(moveLeft(rotateClockwise(input)))
}

function rotateCounterClockwise(input) {
  return rotateClockwise(rotateClockwise(rotateClockwise(input)))
}

function rotateClockwise(input) {
  return input.reduce((output, row, i) => {
    for(let j = 0; j<4; j++){
      output[j][3-i] = row[j]
    }
    return output
  }, [[],[],[],[]])
}

module.exports = {
  initGame,
  countCells,
  moveRight,
  moveRowLeft,
  moveRowRight,
  moveUp,
  moveDown,
  rotateClockwise,
  rotateCounterClockwise
}