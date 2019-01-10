function bruteForceTwoSum(a, sum){
  let sumPairs = [];
  for(let i = 0; i < a.length; i++){
    if(a[i] < sum){
      for(let j = 0; j < a.length; j++){
        if(sum - a[i] === a[j]){
          if(!sumPairs.find(arr => arr.includes(a[i]) && arr.includes(a[j]))){
            sumPairs.push([a[i], a[j]]);
          }
        }
      }
    }
  }
  return sumPairs;
}

function binarySearchTwoSum(a, sum){
  let sumPairs = [];
  a = mergeSort(a);
  for(let i = 0; i < a.length; i++){
    if(a[i] < sum){
      let x = binarySearch(a, sum - a[i])
      if(!sumPairs.find(arr => arr.includes(a[i]) && arr.includes(x))){
        sumPairs.push([a[i],x]);
      }
    }
  }
  return sumPairs;
}

function merge(firstHalf, secondHalf){
  let sortedArray = [];
  let min;
  while (firstHalf.length > 0 && secondHalf.length > 0){
    min = findAndRemoveMin(firstHalf, secondHalf);
    sortedArray.push(min);
  }
  return sortedArray.concat(firstHalf).concat(secondHalf);
}

function findAndRemoveMin(firstHalf, secondHalf){
  let min1 = firstHalf;
  let min2 = secondHalf;
  if(min1[0] < min2[0]){
    return min1.shift();
  } else {
    return min2.shift();
  }
}
function mergeSort(array){
  let mid = array.length/2;
  let firstHalf = array.slice(0, mid);
  let secondHalf = array.slice(mid, array.length);
  if(array.length < 2){
    return array;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}

function binarySearch(array, target){
  let mid = Math.floor(array.length/2);
  if(array[mid] === target){
    return array[mid];
  } else if(array.length === 1 && array[0] === target) {
    return array[0];
  } else if(array[mid] > target && array.length > 1){
    return binarySearch(array.slice(0, mid), target);
  } else if(array[mid] < target && array.length > 1) {
    return binarySearch(array.slice(mid, array.length), target);
  } else {
    return false;
  }
}

function binaryMatch(sortedArray, missingNum){
  return !!binarySearch(sortedArray, missingNum)
}

function hashTwoSum(array, sum){
  let hash = {};
  let pairs = [];
  for (let i = 0; i < array.length; i++){
    hash[array[i]] = array[i];
  }
  for(let i = 0; i < array.length; i++){
    if(hash[sum - array[i]] && (!pairs.find(arr => arr.includes(array[i]) && arr.includes(sum - array[i])))){
      pairs.push([array[i], sum - array[i]])
    }
  }
  return pairs;
}
