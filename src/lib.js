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

function notEmptySpot(spot) {
  return spot !== 0
}

function padEmptySpotsRight(list) {
  if (list.length === 4)
    return list

  return padEmptySpotsRight([...list, 0])
}

function moveRowLeft(input) {
  return padEmptySpotsRight(collapse(input.filter(notEmptySpot)))
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
  moveRight,
  moveRowLeft,
  moveRowRight,
  moveUp,
  moveDown,
  rotateClockwise,
  rotateCounterClockwise
}