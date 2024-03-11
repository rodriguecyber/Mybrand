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
        return false
       
     }
     else{
      addUser(email,password)
      window.alert("you are registered")
      return true
       }
}


// .....................................................................................................





let  validateSignPage=()=>{
    var email = document.getElementById('emails').value;
    var password = document.getElementById('password').value;
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        window.alert('Please enter a valid email address.');
        return false; 
    }
    if (password.length < 5 || !/\d/.test(password)) {
       window.alert('Password must have at least 5 characters and contain at least one number.');
        return false;

    }
    return submitData()
    return true
}