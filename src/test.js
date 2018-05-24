
const {
  moveRight,
  moveRowLeft,
  moveRowRight,
  moveUp,
  moveDown,
  rotateClockwise,
  rotateCounterClockwise
} = require('./lib')

describe('2048', () => {
  describe('Move right', () => {
    it('Moves single value right', () => {
      const input = [0, 2, 0, 0]
      const output = [0, 0, 0, 2]
      expect(moveRowRight(input)).toEqual(output)
    })

    it('Moves two diferent values as right as they can', () => {
      const input = [2, 0, 4, 0]
      const output = [0, 0, 2, 4]
      expect(moveRowRight(input)).toEqual(output)
    })

    it('Moves two equal values and adds them as right as they can', () => {
      const input = [2, 0, 2, 0]
      const output = [0, 0, 0, 4]
      expect(moveRowRight(input)).toEqual(output)
    })

    it('Moves three equal values as right as they can, adding only the two righter ones', () => {
      const input = [2, 2, 2, 0]
      const output = [0, 0, 2, 4]
      expect(moveRowRight(input)).toEqual(output)
    })

    it('Moves three equal values as right as they can, adding only the two righter ones', () => {
      const input = [2, 2, 2, 2]
      const output = [0, 0, 4, 4]
      expect(moveRowRight(input)).toEqual(output)
    })

    it('Moves three equal values as right as they can, adding only the two righter ones', () => {
      const input = [4, 2, 2, 0]
      const output = [0, 0, 4, 4]
      expect(moveRowRight(input)).toEqual(output)
    })
  })

  describe('Move left', () => {
    it('Moves single value left', () => {
      const input = [0, 0, 2, 0]
      const output = [2, 0, 0, 0]
      expect(moveRowLeft(input)).toEqual(output)
    })

    it('Moves two diferent values as left as they can', () => {
      const input = [0, 4, 0, 2]
      const output = [4, 2, 0, 0]
      expect(moveRowLeft(input)).toEqual(output)
    })

    it('Moves two equal values and adds them as left as they can', () => {
      const input = [0, 2, 0, 2]
      const output = [4, 0, 0, 0]
      expect(moveRowLeft(input)).toEqual(output)
    })

    it('Moves three equal values as left as they can, adding only the two lefter ones', () => {
      const input = [0, 2, 2, 2]
      const output = [4, 2, 0, 0]
      expect(moveRowLeft(input)).toEqual(output)
    })

    it('Moves three equal values as left as they can, adding only the two lefter ones', () => {
      const input = [2, 2, 2, 2]
      const output = [4, 4, 0, 0]
      expect(moveRowLeft(input)).toEqual(output)
    })

    it('Moves three equal values as left as they can, adding only the two lefter ones', () => {
      const input = [0, 4, 2, 2]
      const output = [4, 4, 0, 0]
      expect(moveRowLeft(input)).toEqual(output)
    })
  })

  describe('Move up', () => {
    const input = [
      [0, 0, 2, 0], 
      [2, 2, 2, 4], 
      [0, 2, 2, 2], 
      [2, 2, 2, 2]]
    const output = [
      [4, 4, 4, 4], 
      [0, 2, 4, 4], 
      [0, 0, 0, 0], 
      [0, 0, 0, 0]]
    
    it('Moves up the entire board', () => {
      expect(moveUp(input)).toEqual(output)
    })
  })

  describe('Move down', () => {
    const input = [
      [0, 0, 2, 0],
      [2, 2, 2, 4],
      [0, 2, 2, 2],
      [2, 2, 2, 2]]
    const output = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 2, 4, 4],
      [4, 4, 4, 4]]

    it('Moves up the entire board', () => {
      expect(moveDown(input)).toEqual(output)
    })
  })

  describe('Rotate clockwise', () => {
    const input = [
      [0, 0, 2, 0],
      [2, 2, 2, 4],
      [0, 2, 2, 2],
      [2, 2, 2, 2]]
    const output = [
      [2, 0, 2, 0],
      [2, 2, 2, 0],
      [2, 2, 2, 2],
      [2, 2, 4, 0]]
    it('Rotates the array clockwise', () => {
      expect(rotateClockwise(input)).toEqual(output)
    })
  })

  describe('Rotate counter clockwise', () =>  {
    const output = [
      [0, 0, 2, 0],
      [2, 2, 2, 4],
      [0, 2, 2, 2],
      [2, 2, 2, 2]]
    const input = [
      [2, 0, 2, 0],
      [2, 2, 2, 0],
      [2, 2, 2, 2],
      [2, 2, 4, 0]]
    it('Rotates the array counter clockwise', () => {
      expect(rotateCounterClockwise(input)).toEqual(output)
    })
  })
})
