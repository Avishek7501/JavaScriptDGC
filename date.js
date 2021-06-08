function dte(){
    var d = new Date()
var e = d.getHours()
var f = d.getMinutes()
var g = d.getSeconds()
let body = document.querySelector("body")
   if(e < 12){
   document.getElementById("demo").innerText= e +":" + f + ":"+ g +" " +"AM" 
   body.style = "background-color:white;color:black;"
   if(e < 10){
       document.getElementById("demo").innerText =0 + e +":" + f + ":"+ g +" " +"AM" 
   }
    if (g < 10) {
        document.getElementById("demo").innerText =e +":" + f + ":"+ 0 + g +" " +"AM" 
    }
    if (f < 10) {
        document.getElementById("demo").innerText =e +":" + 0 + f + ":"+ g +" " +"AM" 
    }
   
   
   }else{
       document.getElementById("demo").innerHTML = e +":" + f + ":"+ g +" " + "PM" 
       body.style = "background-color:black;color:white;"
       if(e < 10){
        document.getElementById("demo").innerText =0 + e +":" + f + ":"+ g +" " +"PM" 
    }
     if (g < 10) {
         document.getElementById("demo").innerText =e +":" + f + ":"+ 0 + g +" " +"PM" 
     }
     if (f < 10) {
        document.getElementById("demo").innerText =e +":" + 0 + f + ":"+ g +" " +"PM" 
     }
    }
   
}
setInterval(function(){ dte()}, 1000);

function name(){
    return "hello"
}
console.log(name)