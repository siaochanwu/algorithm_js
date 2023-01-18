minSubArr([8,1,6,15,3,16,5,7,14,30,12], 60)

function minSubArr(arr, number) {
  let start = 0;
  let end = 0;

  let minlength = Infinity;
  while (start < arr.length) {
    console.log('range',start, end)
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += arr[i]
    }
    if (sum < number) {
      end ++
      if (end > arr.length - 1) {
        console.log(666, minlength)
        return minlength
      }
    } else if (sum >= number) {
      console.log('sum is: ', sum, '& number is: ', number)
      let length = end - start + 1;
      console.log('length', length)
      if (length < minlength) {
        minlength = length;
        console.log('min', minlength)
      }
      start ++
    }
  }
  console.log(minlength)
  return minlength
}