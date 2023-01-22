//遞迴
function recursion(n) {
  console.log(`do recursion(${n})`)
  if (n == 1) {
    return 10
  } else {
    return recursion(n - 1) + 15
  }
}

console.log(recursion(3))