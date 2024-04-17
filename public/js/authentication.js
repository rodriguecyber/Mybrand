// let selectUser=async()=>{
//   event.preventDefault()
//   const alert=document.createElement('p')
//   alert.classList.add('alert')
//     username=document.getElementById('emaill').value
//     password=document.getElementById('passwordl').value
//     const user={
//       email:username,
//       password:password
//     }
//     try{
//       await fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/login',{
//     method:'POST',
//      headers:{
//       'Content-Type':'application/json',
      
//      },
//      body:JSON.stringify(user)
    
//    })
//    .then(response=>response.json())
//    .then(async(result)=>{
//      console.log(result)
//     if(result.message==='Password does not match'){
//       document.getElementById('emailvalid').innerText=result.message
//       document.getElementById('emailvalid').style.visibility='visible'
//     }
//     else if(result.message=='Logged in'){
//       storeMyToken(result.token)

//     }
//     else{
//       document.getElementById('emailvalid').style.visibility='visible'
//     }
//    })
//    .catch(error=>{
//     window.alert('failed to login')
//    })

//   }
//   catch(error){
//     console.log(error)
//   }
   
//     }
//      const storeMyToken=async(token)=>{
//       document.cookie=`loginToken=${token}; path=/`
//        window.location='/admin/admin.html'

//      }
