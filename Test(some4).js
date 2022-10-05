function removeEveryOther(arr){
  //your code here
  let counter = 1;
  for (let i = 0; i < arr.length; i++) {
    arr.splice(counter, 1);
    counter++;
  }
  return arr;
}