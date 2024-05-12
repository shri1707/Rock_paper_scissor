console.log("hello world");

function getCompChoice(){
   let x = Math.floor(Math.random() * (3 - 0))
   console.log(x)
   if (x===0){
    console.log("Rock");
   }
   else if(x===1){
    console.log("Paper");
   }
   else{
    console.log("Scissor");
   }
}

getCompChoice()