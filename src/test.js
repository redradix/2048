const { moveMatrixRight, moveRowRight, moveMatrixLeft, moveRowLeft, moveMatrixUp, moveMatrixDown } = require("./lib");

describe("2048", () => {
  describe("move right", () => {
    it("should return all zeroes if all zeroes", () => {
      const matrix1 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      expect(moveMatrixRight(matrix1)).toEqual(matrix2);
    });
    it("should not move right most elements", () => {
      const matrix1 = [[0, 0, 0, 2], [0, 0, 0, 0], [0, 0, 0, 2], [0, 0, 0, 0]];
      const matrix2 = [[0, 0, 0, 2], [0, 0, 0, 0], [0, 0, 0, 2], [0, 0, 0, 0]];
      expect(moveMatrixRight(matrix1)).toEqual(matrix2);
    });
    it("should go to the right correctly (1 number)", () => {
      const matrix1 = [[0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[0, 0, 0, 0], [0, 0, 0, 2], [0, 0, 0, 0], [0, 0, 0, 0]];
      expect(moveMatrixRight(matrix1)).toEqual(matrix2);
    });
    it("should go to the right correctly (2 different numbers)", () => {
      const matrix1 = [[0, 0, 0, 0], [0, 2, 4, 0], [2, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[0, 0, 0, 0], [0, 0, 2, 4], [0, 0, 0, 2], [0, 0, 0, 0]];
      expect(moveMatrixRight(matrix1)).toEqual(matrix2);
    });
    it("should go to the right correctly (2 equal numbers)", () => {
      const matrix1 = [[0, 0, 0, 0], [0, 2, 2, 0], [2, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[0, 0, 0, 0], [0, 0, 0, 4], [0, 0, 0, 2], [0, 0, 0, 0]];
      expect(moveMatrixRight(matrix1)).toEqual(matrix2);
    });
    it("should go to the right correctly (2 equal numbers with another to the right)", () => {
      const matrix1 = [[0, 0, 0, 0], [0, 2, 2, 8], [2, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[0, 0, 0, 0], [0, 0, 4, 8], [0, 0, 0, 2], [0, 0, 0, 0]];
      expect(moveMatrixRight(matrix1)).toEqual(matrix2);
    });
    it("should go to the right correctly (2 equal numbers with another to the left)", () => {
      const matrix1 = [[0, 0, 0, 0], [0, 8, 2, 2], [2, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[0, 0, 0, 0], [0, 0, 8, 4], [0, 0, 0, 2], [0, 0, 0, 0]];
      expect(moveMatrixRight(matrix1)).toEqual(matrix2);
    });
    it("should go to the right correctly (3 equal numbers)", () => {
      const row1 = [0, 2, 2, 2]
      const row2 = [0, 0, 2, 4]
      expect(moveRowRight(row1)).toEqual(row2);
    });
    it("should go to the right correctly (3 equal numbers with another to the right)", () => {
      const row1 = [2, 2, 2, 8]
      const row2 = [0, 2, 4, 8]
      expect(moveRowRight(row1)).toEqual(row2);
    });
    it("should go to the right correctly (3 equal numbers with another to the left)", () => {
      const row1 = [8, 2, 2, 2]
      const row2 = [0, 8, 2, 4]
      expect(moveRowRight(row1)).toEqual(row2);
    });
    it("should not move when all numbers different to the next", () => {
      const row1 = [2, 8, 2, 8]
      const row2 = [2, 8, 2, 8]
      expect(moveRowRight(row1)).toEqual(row2);
    });
    it("should go to the right correctly (4 equal numbers)", () => {
      const row1 = [2, 2, 2, 2]
      const row2 = [0, 0, 4, 4]
      expect(moveRowRight(row1)).toEqual(row2);
    });
  });

  describe("move left", () => {
    it("should return all zeroes if all zeroes", () => {
      const matrix1 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      expect(moveMatrixLeft(matrix1)).toEqual(matrix2);
    });
    it("should not move left most elements", () => {
      const matrix1 = [[2, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[2, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      expect(moveMatrixLeft(matrix1)).toEqual(matrix2);
    });
    it("should go to the left correctly (1 number)", () => {
      const matrix1 = [[0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      expect(moveMatrixLeft(matrix1)).toEqual(matrix2);
    });
    it("should go to the left correctly (2 different numbers)", () => {
      const row1 = [0, 2, 4, 0]
      const row2 = [2, 4, 0, 0]
      expect(moveRowLeft(row1)).toEqual(row2);
    });
    it("should go to the left correctly (2 equal numbers)", () => {
      const row1 = [0, 2, 2, 0]
      const row2 = [4, 0, 0, 0]
      expect(moveRowLeft(row1)).toEqual(row2);
    });
    it("should go to the left correctly (2 equal numbers with another to the right)", () => {
      const row1 = [0, 2, 2, 8]
      const row2 = [4, 8, 0, 0]
      expect(moveRowLeft(row1)).toEqual(row2);
    });
    it("should go to the left correctly (2 equal numbers with another to the left)", () => {
      const row1 = [0, 8, 2, 2]
      const row2 = [8, 4, 0, 0]
      expect(moveRowLeft(row1)).toEqual(row2);
    });
    it("should go to the left correctly (3 equal numbers)", () => {
      const row1 = [0, 2, 2, 2]
      const row2 = [4, 2, 0, 0]
      expect(moveRowLeft(row1)).toEqual(row2);
    });
    it("should go to the left correctly (3 equal numbers with another to the right)", () => {
      const row1 = [2, 2, 2, 8]
      const row2 = [4, 2, 8, 0]
      expect(moveRowLeft(row1)).toEqual(row2);
    });
    it("should go to the left correctly (3 equal numbers with another to the left)", () => {
      const row1 = [8, 2, 2, 2]
      const row2 = [8, 4, 2, 0]
      expect(moveRowLeft(row1)).toEqual(row2);
    });
    it("should not move when all numbers different to the next", () => {
      const row1 = [2, 8, 2, 8]
      const row2 = [2, 8, 2, 8]
      expect(moveRowLeft(row1)).toEqual(row2);
    });
    it("should go to the left correctly (4 equal numbers)", () => {
      const row1 = [2, 2, 2, 2]
      const row2 = [4, 4, 0, 0]
      expect(moveRowLeft(row1)).toEqual(row2);
    });
  });

  describe("move up", () => {
    it("should return all zeroes if all zeroes", () => {
      const matrix1 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      expect(moveMatrixUp(matrix1)).toEqual(matrix2);
    });
    it("should move 1 number up", () => {
      const matrix1 = [[0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      expect(moveMatrixUp(matrix1)).toEqual(matrix2);
    });
  })

  describe("move down", () => {
    it("should return all zeroes if all zeroes", () => {
      const matrix1 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      expect(moveMatrixDown(matrix1)).toEqual(matrix2);
    });
    it("should move 1 number down", () => {
      const matrix1 = [[0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      const matrix2 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0]];
      expect(moveMatrixDown(matrix1)).toEqual(matrix2);
    });
  })
});
