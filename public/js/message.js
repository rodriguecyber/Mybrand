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
        window.alert('Please fill out all the required fields.');
        return false;
    }

    var namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        window.alert('Please enter a valid name containing only alphabetic characters.');
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        window.alert('Please enter a valid email address.');
        return false;
    }  

    sendMessage (name, email, message) 
      return true; 
}
