const rowDirections = ['left', 'right']
const columnDirections = ['up', 'down']

const collapseRowToRight = (row) => {
  return collapseRowToLeft(row.slice().reverse()).reverse()
}

const rowCollapsed = row => row.length === 0 || row.length === 1
const shouldMove = ([head]) => head === 0
const shouldCollapse = ([head, second]) => head === second

const collapseRowToLeft = (row) => {
  if (rowCollapsed(row)) {
    return row
  }
  const [head, second, ...tail] = row.filter(x => x).concat([0, 0, 0, 0]).slice(0, row.length)
  if (shouldCollapse(row)) {
    return [head + second, ...collapseRowToLeft(tail), 0]
  }
  return [head, ...collapseRowToLeft([second, ...tail])]
}

const transpose = board =>
  board.map(row => row.slice().reverse()).slice().reverse()


const collapseRows = (direction, board) => {
  return board.map(direction === 'left' ? collapseRowToLeft : collapseRowToRight)
}

const collapseColumns = (direction, board) => {
  const transposed = transpose(board)
  return transposed.map(direction === 'up' ? collapseRowToLeft : collapseRowToRight)
}

module.exports = (direction, board) =>
  rowDirections.includes(direction) ? collapseRows(direction, board) : collapseColumns(direction, board)
