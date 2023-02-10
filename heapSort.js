let arr = [15, 3, 17, 18, 20, 1, 666]
let heapSize;

heapSort()
console.log(arr)

function buildMaxHeap() {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i --) {
    maxHeapify(i)
  }
}

function maxHeapify(i) {
  let largest;
  let left = i * 2 + 1;
  let right = i * 2 + 2;

  if (left <= heapSize && arr[left] > arr[i]) {
    largest = left;
  } else {
    largest = i;
  }
  if (right <= heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    //swap i with largest
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    //遞迴往下換
    maxHeapify(largest);
  }
}

function heapSort() {
  buildMaxHeap();
  //把index最小的跟index0交換exchange
  for (let i = arr.length - 1; i >= 0; i --) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    //長度減一
    heapSize -= 1;
    //把換上來的值去做maxheap
    maxHeapify(0);
  }

  return arr
}
