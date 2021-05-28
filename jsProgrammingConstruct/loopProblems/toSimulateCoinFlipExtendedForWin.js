let heads=0

let tails=0

let count=0
while(heads < 11  && tails < 11){
   let temp = Math.floor(Math.random() * 10)%2;
   if(temp == 1){
       heads++
   }else{
       tails++
   }
   count++
}
if(heads == 11){
  console.log(heads+" head comes , head wins")  
}else{
    console.log(tails+" tails comes , tails wins")
}


