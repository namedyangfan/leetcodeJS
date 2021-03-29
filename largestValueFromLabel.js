const mockValue = [2, 6, 1, 2, 6];
const mockLabel = [2, 2, 2, 1, 1];

const getLargestValue = (values, labels, num_wanted, use_limit) => {
  const valueLabel = values.map((value, index) => ({
    value: value,
    lable: labels[index],
  }));
  
  valueLabel.sort((a,b)=> a.value - b.value)
  console.log('valueLabel: ', valueLabel);
  const labelCount = {};
  let i = valueLabel.length-1;
  let total = 0;

  while(num_wanted != 0){
    if(i<0){
      break; 
    };

    const label = valueLabel[i].lable;
    if(!labelCount[label] || labelCount[label] < use_limit){
      labelCount[label] = (labelCount[label] + 1) || 1
      total = total + valueLabel[i].value
      num_wanted--
    }
    i--;
  }
  console.log('labelCount: ', labelCount);
  return total;
};

const result = getLargestValue(mockValue, mockLabel, 1, 1);
console.log('result: ', result);