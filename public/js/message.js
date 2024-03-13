function sendMessage (sender, email, text)  {
    var messages = JSON.parse(localStorage.getItem("message")) || [];
    messages.push({ 'names': sender, 'address': email, 'body': text });
    localStorage.setItem("message", JSON.stringify(messages));
    window.alert("Thank you for your message");
};



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
      return true; 
}
