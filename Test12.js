function giveMeFive(obj){
  let arr = [];
  for (var key in obj) {
    let tempKey = key;
    let tempVal = obj[key];
    if (tempKey.length == 5) arr.push(tempKey);
    if (tempVal.length == 5) arr.push(tempVal);
  }
  return arr;
}