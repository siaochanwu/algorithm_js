insertionsort([14, -4, 17, 6, 22, 1, -5])

function insertionsort(arr) {
  for (let j = 1; j < arr.length; j++) {
    let key = arr[j]
    let i = j - 1;
    while(i >= 0 && arr[i] > key) {
      //swap
      arr[i + 1] = arr[i];
      i -= 1;
    }
    console.log(arr)
    arr[i + 1] = key;
  }
  // console.log(arr)
  return arr
}