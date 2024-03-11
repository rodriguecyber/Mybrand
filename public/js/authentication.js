let selectUser=()=>{
    username=document.getElementById('emaill').value
    passwordl=document.getElementById('passwordl').value
  var users=JSON.parse(localStorage.getItem('users'))||[]
  var getuser=false
   var getpassword=false
  users.forEach((user)=>{
   
    if(user.name===username){
      getuser=true;
        if(user.password===passwordl){
          getpassword=true;
            return;
        }
        
        else{
    getpassword=false
        }
        return;
       }
       
       else{
        getuser=false
       }
   
  }); 
  if(getuser ===true && getpassword===true) {
    window.alert("Login Succesfully")
  return true
  }
  else if(getuser===true && getpassword===false){
    window.alert("Wrong Password");
    return false
  }
  else{
   window.alert("User does not exist");
   return false
  }
}
