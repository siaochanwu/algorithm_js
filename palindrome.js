palindrome("tacocat")
palindrome("amananplanacanalpanama")
palindrome("asdfsafeaw")

function palindrome(str) {
  let right = str.length -1;
  let left = 0;
  while(left < right) {
    console.log(left, right)
    console.log(str[left], str[right])
    if (str[left] == str[right]) {
      left ++;
      right --;
    } else {
      console.log('not palindrome')
      return
    }
  }
  console.log('palindrome')
}