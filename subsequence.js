subsequence('hello', 'hello Dear')
subsequence('book', 'brooklyn')
subsequence('abc', 'bac')

function subsequence(str1, str2) {
  let left1 = 0;
  let left2 = 0;
  
  if (str1.length == 0) {
    console.log(true)
    return true
  }
  while(left2 < str2.length) {
    console.log(left1, left2)
    if (str1[left1] == str2[left2]) {
      console.log(str1[left1], str2[left2])
      left1 ++
    } else if (left1 >= str1.length) {
      console.log(true)
      return true
    }
    left2 ++

  }
  console.log(false)
  return false
}