function sendMessage (sender, email, text)  {
    formData={
        sender: sender,
        email: email,
        messageText: text
    }
    try{
    fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/Sendmessage',{
        method:"POST",
        body: JSON.stringify(formData),
        headers:{
            "Content-Type": "application/json"
            }   
    })
    .then(response=>{
      alert(response.json())
    })
  }
  catch(error){
    console.log("Error")
  }
}



function validateContactForm() {
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
    
    sendMessage (name, email, message) 
       
}
