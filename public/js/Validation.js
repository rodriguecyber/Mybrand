let selectUser=async()=>{
    event.preventDefault()
    const alert=document.createElement('p')
    alert.classList.add('alert')
      username=document.getElementById('emaill').value
      password=document.getElementById('passwordl').value
      const user={
        email:username,
        password:password
      }
      try{
        await fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/login',{
      method:'POST',
       headers:{
        'Content-Type':'application/json',
        
       },
       body:JSON.stringify(user)
      
     })
     .then(response=>response.json())
     .then(async(result)=>{
       console.log(result)
      if(result.message==='Password does not match'){
        document.getElementById('emailvalid').innerText=result.message
        document.getElementById('emailvalid').style.visibility='visible'
      }
      else if(result.message=='Logged in'){
        storeMyToken(result.token)
  
      }
      else if(result.message===`User ${username} not found`){
        document.getElementById('emailvalid').innerText=result.message
        document.getElementById('emailvalid').style.visibility='visible'
      }
      
     })
     .catch(error=>{
        console.log(error)
        document.getElementById('emailvalid').innerText='Server Error'
        document.getElementById('emailvalid').style.visibility='visible'
     })
  
    }
    catch(error){
      console.log(error)
    }
     
      }
      const storeMyToken = async(token) => {
        return new Promise((resolve) => {
            document.cookie = `loginToken=${token}; path=/`;

            setTimeout(() => {
                resolve();
            }, 100); 
        }).then(() => {
            window.location = '/admin/admin.html';
        });
    };
    

let  validateSignPage=()=>{
     email = document.getElementById('emaill').value;
    var password = document.getElementById('passwordl').value;
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailvalid').style.visibility='visible'
        return false; 
    }
    else{
        document.getElementById('emailvalid').style.visibility='hidden' 
    }
    if (password.length < 6 || !/\d/.test(password)) {
        document.getElementById('passwordvalid').style.visibility='visible'
        return false;

    }
    else(
        document.getElementById('passwordvalid').style.visibility='hidden'
    )
  
    selectUser()
}