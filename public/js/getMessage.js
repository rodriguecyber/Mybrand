let selectMessage = () => {
    var templateDiv = document.getElementById('messages');
    var divContainer = document.getElementById('side');

    messages.forEach((message, index) => {
        if (index === 0) {
            let originalMessagediv = templateDiv.querySelector(".sender h4");
            let originalAddressdiv = templateDiv.querySelector(".sender p");
            originalMessagediv.textContent = message.names;
            originalAddressdiv.textContent = message.address;
        } else {
            let messagediv = templateDiv.cloneNode(true);
            let messaged = messagediv.querySelector(".sender h4");
            let emailed = messagediv.querySelector(".sender p");
            messaged.textContent = message.names; 
            emailed.textContent = message.address; 
            divContainer.appendChild(messagediv);
        }
    });
}

