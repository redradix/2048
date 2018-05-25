const moveMatrixLeft = matrix => matrix.map(moveRowLeft);
const moveRowLeft = row => {
  let newArray = [];
  row.filter(el => el !== 0).forEach(el => {
      if (newArray[newArray.length - 1] === el) {
        newArray[newArray.length - 1] = el * 2;
      } else {
        newArray.push(el);
      }
  });
  const missingZeros = row.length - newArray.length;
  return newArray.concat(new Array(missingZeros).fill(0))
};

const moveMatrixRight = matrix => matrix.map(moveRowRight);
const moveRowRight = row => {
  let newArray = [];
  row.reverse().filter(el => el !== 0).forEach(el => {
      if (newArray[newArray.length - 1] === el) {
        newArray[newArray.length - 1] = el * 2;
      } else {
        newArray.push(el);
      }
  });
  const missingZeros = row.length - newArray.length;
  return new Array(missingZeros).fill(0).concat(newArray.reverse());
};

module.exports = {
  moveMatrixRight,
  moveRowRight,
  moveMatrixLeft,
  moveRowLeft
};
