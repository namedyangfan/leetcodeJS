const helper = (head, k) => {
  const quotient = Math.floor(head.length / k);
  const remainder = head.length % k;
  let result = [];
  for (let i = 0; i < quotient; i++) {
    console.log('i', i);
    const subSet = head.slice(i * k, (i + 1) * k);
    console.log(subSet);
    result = [...result, ...subSet.reverse()]
  }
  if(remainder){
    const subSet = head.slice(remainder*-1)
    result = [...result, ...subSet.reverse()]
  }
  return result
};

const mockHead = [1,];
const k = 1;
const result = reverseKGroup(mockHead, k);
console.log('result: ', result);
