let addUser=(email,password)=>{
    var users=JSON.parse(localStorage.getItem('users'))||[]
    users.push({'name':email,'password':password})
    localStorage.setItem('users',JSON.stringify(users))
}

let submitData=()=>{
    let email=document.getElementById("emails").value
    let password=document.getElementById("password").value
    let password1=document.getElementById("password1").value
     if(password!=password1){
        window.alert("password not match")
        
       
     }
     else{
      addUser(email,password)
      window.alert("you are registered")
       }
}




