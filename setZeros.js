function setZeros(matrix) {
  let row = [];
  let column = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  for (let i = 0; i < row.length; i++) {
    if (row[i]) {
      nullifyRow(matrix, i);
    }
  }

  for (let j = 0; j < column.length; j++) {
    if (column[j]) {
      nullifyColumn(matrix, j);
    }
  }
}

function nullifyRow(matrix, row) {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[row][j] = 0;
  }
}

function nullifyColumn(matrix, col) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

const matrix = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1],
]

setZeros(matrix);
console.log(matrix);