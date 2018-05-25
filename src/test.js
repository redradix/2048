
const { collapseRow, addPairs, collapseRight, collapseBottom, collapseTop } = require('./lib')

describe('2048', () => {
    describe('Collapsing Left', () => {
        it('if row contains only one number result contains same number to the left', () => {
            const row = [0, 0, 0, 2]
            expect(collapseRow(row)).toEqual([2, 0, 0, 0])
            const row2 = [0, 4, 0, 0]
            expect(collapseRow(row2)).toEqual([4,0,0,0])
            const rowWith2Numbers = [2,0,0,4]
            expect(collapseRow(rowWith2Numbers)).toEqual([2,4,0,0])
        })
        it('if row contains only two equal numbers, they are moved and added at the beginning', () => {
            const row = [2,0,0,2]
            expect(collapseRow(row)).toEqual([4,0,0,0])
        })
    })

    describe('addPairs', () => {
        it('if it receives an array of 1 or less elements, it returns the same array', () => {
            expect(addPairs([1])).toEqual([1])
        })
        it('if it receives an array with 2 equal elements, it returns the addition', () => {
            expect(addPairs([2,2])).toEqual([4])
        })
        it('if first and second are different, it returns first element and recurses', () => {
            expect(addPairs([2,4])).toEqual([2, 4])
        })
    })

    describe('Collapsing Right', () => {
        it('if row contains different numbers result contains same numbers to the right', () => {
            const row = [0, 2, 0, 4]
            expect(collapseRight(row)).toEqual([0, 0, 2, 4])
        })
        it('if it receives an array with two equal numbers and return the sum of them to the right', () => {
            const row = [2, 2, 0, 0]
            expect(collapseRight(row)).toEqual([0, 0, 0, 4])
        })
    })

    describe('Collapsing bottom', () => {
        it('if colum contains diferent numbers sult contains same numbers to the bottom', () => {
            const matrix = [
                [2, 0, 0, 4],
                [0, 0, 0, 4],
                [4, 0, 8, 0],
                [0, 0, 0, 0]
            ]
            expect(collapseBottom(matrix)).toEqual([
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [2, 0, 0, 0],
                [4, 0, 8, 8]
            ])
        })
    })

    describe('Collapsing top', () => {
        it('if colum contains diferent numbers sult contains same numbers to the bottom', () => {
            const matrix = [
                [2, 0, 0, 4],
                [0, 0, 0, 4],
                [4, 0, 8, 0],
                [0, 0, 0, 0]
            ]
            expect(collapseTop(matrix)).toEqual([
                [2, 0, 8, 8],
                [4, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ])
        })
    })

})
