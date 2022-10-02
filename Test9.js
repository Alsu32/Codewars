function padIt(str,n){
  let sym= "*"
  let strNew = str;
  while(n > 0) {
   (n % 2 != 0) ? strNew = sym + strNew : strNew += sym;
    n--;
  }
  return strNew;
}