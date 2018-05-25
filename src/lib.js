const equalFunction = row => {
  let newArray = [];
  row.filter(el => el !== 0).forEach(el => {
    if (newArray[newArray.length - 1] === el) {
      newArray[newArray.length - 1] = el * 2;
    } else {
      newArray.push(el);
    }
  });
  return newArray;
};

const moveMatrixLeft = matrix => matrix.map(moveRowLeft);
const moveRowLeft = row => {
  const newArray = equalFunction(row);
  const missingZeros = row.length - newArray.length;
  return newArray.concat(new Array(missingZeros).fill(0));
};

const moveMatrixRight = matrix => matrix.map(moveRowRight);
const moveRowRight = row => {
  const newArray = equalFunction(row.reverse());
  const missingZeros = row.length - newArray.length;
  return new Array(missingZeros).fill(0).concat(newArray.reverse());
};

const createTranspuest = matrix => matrix.reduce((acum, row) => {
    row.forEach((el, i) => {
      acum[i].push(el)
    })
    return acum
  }, [[], [], [], []])

const reverseTranspuest = transpuest => createTranspuest(transpuest)

const moveMatrixUp = matrix => {
  const transpuest = createTranspuest(matrix);
  return reverseTranspuest(moveMatrixLeft(transpuest))
}

const moveMatrixDown = matrix => {
  const transpuest = createTranspuest(matrix);
  return reverseTranspuest(moveMatrixRight(transpuest))
}

module.exports = {
  moveMatrixRight,
  moveRowRight,
  moveMatrixLeft,
  moveRowLeft,
  moveMatrixUp,
  moveMatrixDown,
};
