let selectUser=()=>{
    username=document.getElementById('emaill').value
    passwordl=document.getElementById('passwordl').value
  var users=JSON.parse(localStorage.getItem('users'))||[]
  users.forEach((user)=>{

    if(user.name===username){
        if(user.password===passwordl){
            window.alert('password  match')
        }
        
        else{
        window.alert('password do not match')
        }
        
       }
       
       else{
        window.alert('no user found')
       }
   
  });  
}
