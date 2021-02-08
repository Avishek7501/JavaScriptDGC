let Username = document.getElementById('name')
let Password = document.getElementById('pwd')
let button = document.getElementById('btn1')
const divinp = document.querySelector(".inp")


button.addEventListener("click",(e)=>{
    e.preventDefault()
    if (Username.value == 'Avishek') {
        if(Password.value == '12345'){
        let p = document.createElement("p")
        p.innerText = 'username and password correct'
        divinp.appendChild(p)
        }else{
            let p = document.createElement("p")
            p.innerText = ' password incorrect'
            divinp.appendChild(p)
        }
   
       
        
    } else {
        if(Username.value == ""){
            if (Password.value == "" ) {
                let p = document.createElement("p")
                p.innerText =' Enter your Username & Password'
                divinp.appendChild(p)  
                
            }
        }else{
        let p = document.createElement("p")
        p.innerText =' Username doesnot exist'
        divinp.appendChild(p)
      
        Username.value =""
        }
    }
        Password.value = ""
        
})