let sendMessage=(sender,email,text)=>{
    var messages =JSON.parse(localStorage.getItem("message"))||[]
    messages.push({names:sender,address:email,body:text})
    localStorage.setItem("message",JSON.stringify(messages))
}
let message=()=>{
 sender=document.getElementById('name').value
 email.getElementById('email').value
 text=document.getElementById('message').value  
 sendMessage(sender,email,text)

}

// let getMessage = ()=>{
//     var messages=JSON.parse(localStorage.getItem("message"))||[]
//     array.forEach((message) {
     
//     });   

    
// }