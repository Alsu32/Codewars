function firstToLast(str,c){
  //coding here..
  let index = str.indexOf(c);
  let counter = 0;
  
  if (index >= 0) {
    for (let i = 1; i < str.length;i++) {
      if (str.indexOf(c, index + 1) < 0) {
          return counter;
      } else {
          index = str.indexOf(c, index + 1);
          counter = i + 1;
      }
    }
  } else if (index < 0) {return index;}
  
}