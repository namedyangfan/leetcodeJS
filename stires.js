const numStair = 4;
const allowedSteps = [1, 2];
const memo = {};

const helper = (stepsToTake, remain) => {
  const key = `${stepsToTake} : ${remain}`;
  if(memo[key]){
    return memo[key];
  } else if(stepsToTake == remain){
    return 1;
  } else if (stepsToTake > remain){
    return 0;
  } else {
    const newRemain = remain - stepsToTake;
    const result = helper(allowedSteps[0], newRemain) + helper(allowedSteps[1], newRemain);
    memo[key] = result;
    return result;
  };
};

const result = helper(allowedSteps[0], numStair) + helper(allowedSteps[1], numStair);
console.log('result: ', result);