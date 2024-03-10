let validateForm=()=> {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var textMessage = document.getElementById("message").value;

    if (name.trim() == "") {
        alert("Name must be filled out");
        return false;
    }

    if (email.trim() == "") {
        alert("Email must be filled out");
        return false;
    } else if (!validateEmail(email)) {
        alert("Invalid email format");
        return false;
    }
    if (textMessage.trim() == "") {
        alert("Password must be filled out");
        return false;
    }

    return false; 
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
