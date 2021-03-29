const getUpDirection = (i,j,matrix) => {
  let count =1
  i--
  while (i>=0) {
    if(matrix[i][j]==0){
      return count
    }
    count++
    i--
  }
  return 100;
} 

const getDownDirection = (i,j,matrix) => {
  let count =1
  i++
  while (i<matrix.length) {
    if(matrix[i][j]==0){
      return count
    }
    i++
    count++
  }
  return 100;
} 

const getLeftDirection = (i,j,matrix) => {
  let count =1
  j--
  while (j>=0) {
    if(matrix[i][j]==0){
      return count
    }
    count++
    j--
  }
  return 100;
} 

const getRightDirection = (i,j,matrix) => {
  j++
  let count =1
  while (j<matrix[0].length) {
    if(matrix[i][j]==0){
      return count
    }
    count++
    j++
  }
  return 100;
} 

const mockMatrix = [
  [0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [1, 0, 1, 1, 1],
  [1, 0, 0, 0, 1],
];

const updateMatrix = (matrix) => {
  const result = matrix.map((row, i) =>
    row.map((elements, j) => {
      if(matrix[i][j]==1){
        const resultUp = getUpDirection(i, j, mockMatrix);
        const resultDown = getDownDirection(i, j, mockMatrix);
        const resultLeft = getLeftDirection(i, j, mockMatrix);
        const resultRight = getRightDirection(i, j, mockMatrix);
  
        return Math.min(resultUp, resultDown, resultLeft, resultRight);
      } else {
        return 0
      }

    })
  );
  console.log('result: ', result);
  return result
};

updateMatrix(mockMatrix)