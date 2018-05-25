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

const collapseRight = (row) => collapseRow(row.reverse()).reverse()

module.exports = {
    collapseRow,
    collapseRight,
    addPairs
}