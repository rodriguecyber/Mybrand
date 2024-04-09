const sendMessage = async() => {    
  let sender = document.getElementById('name').value; 
  let email = document.getElementById('email').value; 
  let text = document.getElementById('message').value;
  let sent=document.getElementById('sent') 
  let checkbox=document.getElementById('check') 
    let check
  if(checkbox.checked){
    check=true
  }
  else{
  check=false
  }
  
  const formData = {
      name: sender,
      email: email,
      text: text,
      subscribe:check
  };

  try {
       sent.style.display='block'
       sent.innerText='sending message'
      await fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/Sendmessage', {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
              "Content-Type": "application/json"
          }
      })
      .then(response => response.json())
      .then(async( result ) => {
          sent.innerText=await result.message;
          
      })
      .catch(error => {
          console.log(error);
      });
      
      setTimeout(()=>{sent.style.display='none'},4000)
  
    } catch (error) {
      alert("Error:", error); 
  }
};



const validateContactForm = async() =>{
    event.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
        alert('Please fill all fields');
        return false;
    }

    var namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        document.getElementById('errorname').innerText='Enter valid name'
        document.getElementById('name').style.borderColor='red'
        return false;
    }
    else{
        document.getElementById('name').style.borderColor='rgba(4, 217, 178, 1)'
        document.getElementById('errorname').style.display='none'
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('erroremail').innerText='Enter valid email'
        document.getElementById('email').style.borderColor='red'
        
        return false;
    }  
    else{
        document.getElementById('email').style.borderColor='rgba(4, 217, 178, 1)'
        document.getElementById('erroremail').style.display='none'

    }
    
   await sendMessage () 
    document.getElementById('name').value='';
   document.getElementById('email').value='';
   document.getElementById('message').value='';

       
}
