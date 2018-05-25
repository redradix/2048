function addPairs(row){
    if(row.length <= 1){
        return row
    }
    const [first, second, ...rest] = row
    if ( first === second) {
        return [first + second, ...addPairs(rest)]
    } else {
        return [first, ...addPairs([second, ...rest])]
    }
}

const collapseRow = (row) => {
    const nonZeros = row.filter(x => x !== 0)
    return addPairs(nonZeros)
        .concat(Array(4).fill(0))
        .slice(0,4)
}

const collapseRight = (row) =>
    collapseRow(row.reverse()).reverse()

const transpose = matrix => {
    const result = [ [], [] , [], [] ]
    // counterclockwise
    for(let row=0; row < 4; row++){
        for(let col=0; col < 4; col++){
            result[col][row] = matrix[row][col]
        }
    }
    return result
}

const collapseBottom = (matrix) => {
    const transposed = transpose(matrix)
    return transpose(transposed.map(collapseRight))
}

const collapseTop = matrix => {
    const transposed = transpose(matrix)
    return transpose(transposed.map(collapseRow))
}

module.exports = {
    collapseRow,
    collapseRight,
    collapseBottom,
    collapseTop,
    addPairs
}