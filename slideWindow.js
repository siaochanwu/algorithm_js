// maxSum([2,7,3,0,6,1,-5,-12,-11], 3) //12
// minSum([2,7,3,0,6,1,-5,-12,-11], 3) //-28
maxSum_improve([2,7,3,14,0,6,1,-5,-12,-11], 3)

function maxSum_improve(arr, size) {
  if (size > arr.length) {
    return null
  }

  let max = 0;
  for(let i = 0; i < size; i++) {
    max += arr[i]
  }
  
  let temp = max;
  for (let j = size; j < arr.length; j++) {
    temp = temp + arr[j] - arr[j - size]

    if (temp > max) {
      max = temp
    }
  }
  console.log('max', max)
  return max
}

function maxSum(arr, size) {
  if(arr.length < size) {
    return false
  }

  let max = -Infinity;
  for(let i = 0; i <= arr.length - size; i ++) {
    let attemp = 0
    for (let j = i; j < i + size; j ++) {
      attemp += arr[j]
    }
    if (attemp > max) {
      max = attemp
    }
    console.log('max', max)
    return max
  }
}

// function minSum(arr, size) {
//   if(arr.length < size) {
//     return false
//   }

//   let min = Infinity;
//   for(let i = 0; i <= arr.length - size; i ++) {
//     let attemp = 0;
//     for (let j = i; j < i + size; j ++) {
//       // console.log(i,j)
//       attemp += arr[j]
//     }

//     if (attemp < min) {
//       min = attemp
//     }
//   }
//   console.log('min', min)
//   return min
// }