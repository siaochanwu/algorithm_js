function frequency(str1, str2) {
  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (!counter1[str1[i]]) {
      counter1[str1[i]] = 1
    } else {
      counter1[str1[i]] ++
    }
  }
  console.log(counter1)
  for (let j = 0; j < str2.length; j++) {
    if (!counter2[str2[j]]) {
      counter2[str2[j]] = 1
    } else {
      counter2[str2[j]] ++
    }
  }
  console.log(counter2)


  for (const property in counter1) {
    if (!counter2[property]) {
    }
    if (counter2[property] != counter1[property]) {
      return false
    }
  }
  return true

}


console.log(frequency('abba', 'baab'))