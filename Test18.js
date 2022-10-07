function splitAndMerge(string, separator) {
  let arr = string.split(" ");
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").join(separator);
  }
  
  return arr.join(" ");
}