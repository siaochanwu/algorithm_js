averagePair([-11, 0,1,2,3,9,14,17,21], 1.5);

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while(left < right) {
    console.log(arr[left], arr[right])
    let average = (arr[left] + arr[right]) / 2;
    console.log('average', average)
    if (average > avg) {
      right --
    } else if (average < avg) {
      left ++
    } else if (average == avg) {
      result.push([arr[left], arr[right]])
      right --;
      left ++;
    }
  }
  console.log('result', result)
  return result
}