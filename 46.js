const mockData = [1,2,3];
const result = [];

const getPermutation = (data, index, result, temp) => {
  if(index === data.length){
    return
  }
  if(temp.length === data.length -1 ){
    result.push([...temp, data[index]])
  }else{
    getPermutation(data, index+1, result, temp)
    getPermutation(data, index+1, result, [...temp, data[index]])
  }
}


getPermutation(mockData, 0, result, [])
console.log('result: ', result);
