selectSort([14, -4, 17, 6, 22, 1, -5])

function selectSort(arr) {
  for (let i = 0; i <= arr.length - 2; i ++) {
    let minIndex = i;
    for (let j = i; j <= arr.length - 1; j ++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //swap
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
    console.log('swap', arr)
  }
  console.log(arr)
  return arr
}