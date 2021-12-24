function solution() {
  let evenNumbers = [];
  for(let i = 1; i < 51; i++) {
    if(i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}