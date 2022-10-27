function countGrade(scores){
  //coding here...
  let obj = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0
  }
  
  scores.filter((t)=>{
      if (t==100) {
        obj.S +=1
      } else if (t>=90) {
        obj.A +=1
      } else if (t>=80) {
        obj.B +=1
      } else if (t>=60) {
        obj.C +=1
      } else if(t>=0) {
        obj.D +=1
      } else  if(t== -1) {
        obj.X +=1}
    
  })
  
  return obj;
  
}