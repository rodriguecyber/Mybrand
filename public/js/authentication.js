let changestyle=(Element)=>{
  Element.style.visibility='visible'
}

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
      'Content-Type':'application/json'
     },
     body:JSON.stringify(user)
    
   })
   .then(response=>response.json())
   .then((result)=>{
    console.log(result)
   })
   .catch(error=>{
    console.log(error)
   })

  }
  catch(error){
    console.log(error)
  }
   
    }