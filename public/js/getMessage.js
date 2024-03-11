let selectMessage = () => {
    var templateDiv = document.getElementById('messages');
    var divContainer = document.getElementById('side');
    var messages = JSON.parse(localStorage.getItem('message')) || [];

    messages.forEach((message, index) => {
        if (index === 0) {
            var originalMessagediv = templateDiv.querySelector(".sender h4");
            var originalAddressdiv = templateDiv.querySelector(".sender p");
            originalMessagediv.textContent = message.names;
            originalAddressdiv.textContent = message.address;
        } else {
            let messagediv = templateDiv.cloneNode(true);
            var messaged = messagediv.querySelector(".sender h4");
            var emailed = messagediv.querySelector(".sender p");
            messaged.textContent = message.names; 
            emailed.textContent = message.address; 
            divContainer.appendChild(messagediv);
        }
    });
}

