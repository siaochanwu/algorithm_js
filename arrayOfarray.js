let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];


function CheckArray(arr1) {
  let result = [];
  findString(arr1)

  function findString(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      //檢查是否為array
      if (Array.isArray(arr2[i])) {
        findString(arr2[i])
      } else {
        result.push(arr2[i])
      }
    }
  }
  console.log(result)
  return result
}

CheckArray(arrs)