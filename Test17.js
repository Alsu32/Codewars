function firstToLast(str,c){
  //coding here..
  let index = str.indexOf(c);
  
  if (index >= 0) {
    for (let i = index; i < str.length;) {
      if (str.indexOf(c, i + 1) < 0) {
        return i - index;
      } else {
          i = str.indexOf(c, i + 1);
      }
    }
  } else if (index < 0) {return index;}
  
}