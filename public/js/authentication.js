let selectUser=async()=>{
  event.preventDefault()
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
    storeMyToken(result.token)
   })
   .catch(error=>{
    console.log(error)
   })

  }
  catch(error){
    console.log(error)
  }
   
    }
     const storeMyToken=async(token)=>{
      document.cookie=`loginToken=${token}; path=/`
       window.location='/admin/admin.html'

     }
