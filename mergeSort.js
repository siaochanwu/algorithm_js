function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i ++;
    } else {
      result.push(arr2[j])
      j ++;
    }
  }

  //left elements need to be added to the result
  while(i < arr1.length) {
    result.push(arr1[i])
    i ++;
  }
  while(j < arr2.length) {
    result.push(arr2[j])
    j ++;
  }
  console.log('result', result)
  return result
}


function mergeSrot(arr) {
  if (arr.length == 1) {
    return arr
  } else {
    //切分array
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    console.log('left', left);
    let right = arr.slice(middle, arr.length);
    console.log('right', right)
    //不斷組成新array => 造成空間複雜度高
    //遞迴
    return merge(mergeSrot(left), mergeSrot(right))
  }
}


// console.log(merge([1, 15, 22], [-3, 9, 16]))
console.log(mergeSrot([15, 3, 17, 18, 35, 11, 0, 36, -336, 1054]))