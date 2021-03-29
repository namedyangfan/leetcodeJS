var generateMatrix = function (n) {
  let left = 0;
  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  let count = 1;

  let matrix = Array(n)
    .fill()
    .map((item) => Array(n).fill());

  while (left<=right && top<=bottom) {
    for (let j = left; j <= right; j++) {
      matrix[top][j] = count;
      count++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = count;
      count++;
    }
    right--;

    for (let j = right; j >= left; j--) {
      matrix[bottom][j] = count;
      count++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      console.log(i);
      matrix[i][left] = count;
      count++;
    }
    left++;
  }
  return matrix
};

console.log('generateMatrix: ', generateMatrix(3));
