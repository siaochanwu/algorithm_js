function bubbleSort(arr) {
  let step = 0;
  for (let i = 0; i < arr.length - 2; i ++) {
    console.log('iiii', i)
    for (let j = arr.length - 1; j >= i + 1; j --) {
      console.log('jjjjj', j)
      if (arr[j] < arr[j - 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        step ++;
      }
    }
  }
  console.log(`It takes ${step} steps`)
  console.log(arr)
  return arr
}

// bubbleSort([5,4,1,7,2])

let testArray = [];
for (let i = 0; i < 100; i ++) {
  testArray.push(Math.floor(Math.random() * 100))
}

bubbleSort(testArray)
