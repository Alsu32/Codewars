function isolateIt(arr){
  //coding here...
  return arr.map((t)=>{
    let half = t.length / 2
    if (t.length % 2 == 0) {
      let str = t.slice(0, half) + "|" + t.slice(half)
      return str
    } else {
        half = Math.floor(half)                          
        return t.slice(0, half).concat("|", t.slice(half + 1))                   
    }
  })
}