function calculaNota(ex, p1, p2) {
  let nota = ((p1*2)+(p2*3)+(ex*1))/6
  
  if(nota>=9){
    return "A"
  }else if(nota<9 && nota>=7.5){
    return "B"
  }else if(nota<7.5 && nota>=6){
    return "C"
  }else{
    return "D"
  }
}