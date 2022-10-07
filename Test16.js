function cutIt(arr){
  //coding here...
  let counter = arr[0].length;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < counter) {
      counter = arr[i].length;
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, counter);
  }
  
  return arr;
}