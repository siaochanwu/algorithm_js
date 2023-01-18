uniLetterString('thisishowwedoit')

function uniLetterString (str) {
  let start = 0;
  let end = 0;
  let maxLength = 0;

  while(start < str.length) {
    let counter = {}
    for (let i = start; i <= end; i ++) {
      if (counter.has(str[i])){
        start ++
        end ++
        console.log('start update', start)
      } else {
        counter[str[i]] = 0
      }
      console.log('www', counter)
    }
  }

  return maxLength
}