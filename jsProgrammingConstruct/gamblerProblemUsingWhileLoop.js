let wins=0

let loss=0

let count=100
while(count>0 && count<200){
    let temp = Math.floor(Math.random() * 10)%2
    if(temp == 1){
        wins++
        count++
    }else{
        loss++
        count--
    }
}
let totalBets = wins+loss
console.log("total bets: "+totalBets)
if(count == 0){
    console.log("player lost")
}else if(count == 200){
    console.log("player wins")
}