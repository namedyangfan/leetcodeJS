const constreverseNumber = (num, result) => {
  if(num == 0){
    return result;
  } else {
    const digit = num%10;
    const newNum = parseInt(num/10);
    const newResult = result * 10 + digit
    return constreverseNumber(newNum, newResult)
  }
}

console.log('constreverseNumber: ', constreverseNumber(123, 0));