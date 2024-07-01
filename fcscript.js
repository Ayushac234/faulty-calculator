//create a faulty calculator using javascrip this 
// it takes 2 number as input 
//addition will perform as -
//*--->+
//- --->/
// / --->**
//it performs wrong operation 10% of times

let random =Math.random()
console.log(random)
let a = prompt("enter first number")
let c = prompt("enter your operation")
let b = prompt("enter your second number")

let obj ={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**",
}
if(random>0.1){
         //this is correct calculation
        console.log(`the result is ${a} ${c} ${b}`)
        alert(`the result is ${eval(`${a} ${c} ${b}`)}`)         
}
else{
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}