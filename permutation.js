const permutation = (nums, set, collection, numlength) => {
  if(!nums) return
  nums.forEach((num,index) => {
      let newSet = [...set, num]
      
      if(newSet.length == numlength){
          // collection = [...collection, newSet]
          collection.push(newSet)
      } else {
          const numsCopy = [...nums];
          numsCopy.splice(index,1);
          permutation(numsCopy, newSet, collection, numlength)
      }
  })
};

var permute = function(nums) {
  let collection = []
  let numlength = nums.length;
  permutation(nums, [], collection, numlength);
  return collection
};

permute([1,2])
