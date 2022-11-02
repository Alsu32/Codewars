function bigToSmall(arr){
  //coding here...
  return [].concat(...arr).sort(function s(a, b) {return b-a;}).join(">");
   
