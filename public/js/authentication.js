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
    document.getElementById('passwordl').style.borderColor='r'
    document.getElementById('passwordl').style.borderColor='red'
  return true
  }
  else if(getuser===true && getpassword===false){
    document.getElementById('passwordl').style.borderColor='red'
    return false
  }
  else{
    document.getElementById('loginemail').style.border='1px solid red'

   return false
  }
}
