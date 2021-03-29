/**
 * @param {string} digits
 * @return {string[]}
 */

 const numDict = {
  '2': 'abc',
  '3': 'def'
}
const getCombination = (digits) => {
  let result = ['', '' , ''];
  let newResult = [];
  
  for(let digit of digits){
      for(let j=0;  j<result.length; j++){
          for (let char of numDict[digit]) {
            newResult = [...newResult, `${result[j]}${char}`]
          }           
      }
      console.log('newResult: ', newResult);
      result = newResult
      newResult = []
  }
  console.log('result', result)
} 

getCombination('23')