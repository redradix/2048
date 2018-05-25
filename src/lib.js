const rowDirections = ['left', 'right']
const columnDirections = ['up', 'down']

const collapeseRows = (direction, board) => board
const collapeseColumns = (direction, board) => board

module.exports = (direction, board) => {
  if (rowDirections.includes(direction)) {
    return collapseRows(direction, board)
  }
  return collapseColumns(direction, board)
}
