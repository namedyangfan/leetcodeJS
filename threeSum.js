// const getThreeSum = (array, i, sumSet, result, total = 0) => {
//   if (i == array.length) {
//     return;
//   } else if (sumSet.length == 2 && array[i] == total) {
//     const match = [...sumSet, array[i]].sort();
//     const key = match.toString();
//     if (!result[key]) {
//       result[key] = match;
//     }
//     getThreeSum(array, i + 1, sumSet, result, total);
//   } else if (sumSet.length == 3) {
//     return;
//   } else {
//     getThreeSum(array, i + 1, [...sumSet, array[i]], result, total - array[i]);
//     getThreeSum(array, i + 1, sumSet, result, total);
//   }
// };

// const getThreeSum2 = (array, i, set, remain) => {
//   // console.log('set: ', set);
//   // console.log('remain', remain);
//   // console.log('array[i]', array[i]);
//   if (i == array.length) {
//     return [];
//   }
//   if (set.length == 2 && remain == array[i]) {
//     const value = [...set, array[i]];
//     const key = JSON.stringify(value);
//     const result = {}
//     result[key] = value
//     return result;
//   } else if (array[i] > remain) {
//     return [];
//   } else if(set.length == 3){
//     return [];
//   }
//   else {
//     const withOutI = getThreeSum2(array, i + 1, [...set], remain);

//     if(!withOutI){
//       return []
//     } else {
//       const withI = getThreeSum2(
//         array,
//         i + 1,
//         [...set, array[i]],
//         remain - [array[i]]
//       );
//       const result = {...withI, ...withOutI};
//       // console.log('withI: ', withI);
//       // console.log('withOutI: ', withOutI);
//       return result;
//     }
//   }
// };

// const getThreeSum3 = (array) => {
//   console.log('array: ', array);
//   const result = {};
//   const arrayLength = array.length;
//   for (let i=0; i<(arrayLength-2); i++){
//     if(i >0 && array[i]==array[i-1]){
//       continue
//     }
//     for (let j=i+1; j<(arrayLength-1); j++){
//       if(j>i+1 && array[j]==array[j-1]){
//         continue
//       }
//       let sumij = array[i] + array[j];
//       if (sumij > 0){
//         break
//       }
//       for (let k=j+1; k<arrayLength; k++){
//         if(k>j+1 && array[k]==array[k-1]){
//           continue
//         }
//         // console.log(`i: ${array[i]}, j:${array[j]}, k:${array[k]}`);
//         // console.log('sum before: ', sumij);
//         // console.log('array[k]: ', array[k]);
//         const sumijk = sumij + array[k]
//         // console.log('sum: ', sumijk);
        
//         if(sumijk == 0){
//           const combination = [array[i], array[j], array[k]]
//           const key = JSON.stringify(combination)
//           result[key] = combination
//         } else if (sumijk > 0){
//           break
//         }
//       }
//     }
//   }
//   return result;
// }

// const getThreeSum4 = (array) => {
//   const arrayLength = array.length;
//   let result = [];
//   for(let i=0; i<(arrayLength-2); i++){
//     if(i>0 && array[i] == array[i-1]){
//       continue
//     } else{
//       let l = i+1
//       let r = arrayLength -1
//       while(l < r){
//         let sum = array[i] + array[l] + array[r]
//         if (sum > 0){
//           r = r - 1
//         } else if (sum <0){
//           l = l + 1
//         } else {
//           result = [...result, [array[i], array[l], array[r]]]
//           l = l + 1
//           while(array[l]==array[l-1] && l < r){
//             l = l +1
//           }
//         }
//       }
//     }
//   }
//   return result
// }

const getThreeSum4 = (array) => {
  const length = array.length
  const result = []
  for(let i = 0; i<(length-2); i++){
    if(i>0 && array[i]==array[i-1]){
      continue
    } else {
      let l = i+1;
      let r = length-1;
      while(l<r){
        let sum = array[i] + array[l] + array[r];
        
        if(sum >0){
          r = r-1;
        } else if (sum<0){
          l = l +1;
        } else {
          result.push([array[i], array[l], array[r]])
          l=l+1
          while(l<r && array[l-1]==array[l]){
            l = l+1
          }
        }
      }
    }
  }
  return result
}

const main = () => {

  const mockInput = [0,0,0,0]
  mockInput.sort((a,b)=> a-b)
  const result = getThreeSum4(mockInput);
  console.log('result: ', result);
};

main();
