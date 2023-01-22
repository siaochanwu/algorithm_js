uniLetterString('thisishowwedoit')

function uniLetterString (str) {
  let start = 0;
  let end = 0;
  let maxLength = -Infinity;
  let counter = {}

  while(end < str.length) {

    if (counter[str[end]]){
      //有重複
      counter[str[start]]--;
      start ++
      console.log('有重複')
    } else {
      counter[str[end]] = 1
      end ++
      if (end - start > maxLength) {
        maxLength = end - start
        console.log(111, maxLength)
      }
    }
    console.log('counter', counter)

    if (maxLength == -Infinity) {
      console.log('cannot find')
      return null
    }
  }

  console.log(maxLength)
  return maxLength
}