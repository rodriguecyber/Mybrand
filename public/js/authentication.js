let changestyle=(Element)=>{
  Element.style.visibility='visible'
}

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
    document.getElementById('passwordl').style.borderColor=''
    document.getElementById('passwordl').style.borderColor=''
  return true
  }
  else if(getuser===true && getpassword===false){
    document.getElementById('passwordvalid').style.visibility = "visible";
    setTimeout(function() {     
    
      document.getElementById('passwordvalid').style.visibility = "hidden";
  }, 2000);
    return false
  }
  else{
    
    document.getElementById('emailvalid').style.visibility = "visible";


setTimeout(function() {
    
    document.getElementById('emailvalid').style.visibility = "hidden";
}, 2000);

   return false
  }
}
