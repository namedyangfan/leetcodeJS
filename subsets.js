// find subset equals to k memo method
const mockInput = Array(15).fill(1);
const k = 3;
let memo = {};
const getSubSetsToAmount = (inputArray, i, remain) => {
  const key = `${remain} : ${i}`;
  let result = 0;

  if (memo[key]) {
    return memo[key];
  } else if (i == inputArray.length) {
    return 0;
  } else if (inputArray[i] > remain) {
    result = getSubSetsToAmount(inputArray, i + 1, remain);
  } else if (inputArray[i] == remain) {
    result = getSubSetsToAmount(inputArray, i + 1, remain) + 1;
  } else {
    result =
      getSubSetsToAmount(inputArray, i + 1, remain - inputArray[i]) +
      getSubSetsToAmount(inputArray, i + 1, remain);
  }
  memo[key] = result;
  return result;
};

const result = getSubSetsToAmount(mockInput, 0, k);
console.log('memo: ', memo);
console.log('result: ', result);

// find subset equals to k, video method
const method2 = (inputArray, i, total) => {
  if (total == 0) {
    return 1;
  } else if (i == inputArray.length) {
    return 0;
  } else if (total < 0) {
    return 0;
  } else if (inputArray[i] > total) {
    return method2(inputArray, i + 1, total);
  } else {
    return (
      method2(inputArray, i + 1, total) + method2(inputArray, i + 1, total - inputArray[i])
    );
  }
};
const newCount = method2(mockInput, 0, k);
console.log('newCount: ', newCount);