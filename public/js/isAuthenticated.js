const getLoginToken = () => {
    const name = 'loginToken=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    
    return ''; 
}


   const getMessage=async()=>{
    var divContainer = document.getElementById('side');
    try{
     await fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/message',{
         method:'GET',
        headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${getLoginToken()}`
        }
     })
     
     .then(response=>{
        if(!response.ok)
        {
            window.location='../index.html' 
            
            return;
            
        }

        return response.json()
      
        
     .then(async(res)=>{
         res.forEach((message, index) => {
             const date= new Date()
            let time
            let sentdate = new Date(message.message[0].sent);
            if(sentdate.getMonth()===date.getMonth()){
               if(sentdate.getDate()===date.getDate()){
                if(sentdate.getMinutes()===date.getMinutes()){
                    time="now"
                }
                else{
                time=" today "+sentdate.getHours()+":"+" "+sentdate.getMinutes()
            }
               }
               else{
                time=sentdate.getDate()+"/"+(sentdate.getMonth()+1)
               }
            }
            else{
                time=message.message[0].sent
            }
            const messageElement=document.createElement('div')
            messageElement.classList.add('messages')
            messageElement.innerHTML=`
            <i class="fa-regular fa-circle-user userlogo"></i>
            <span class='sender-detail'>
            <div class="sender" id="sender">
            <h4>${message.Sender}</h4>
            </div>
            <p>${message.message[0].text}</p>
            <h5>${time}</h5>
            <span>
             `
            divContainer.appendChild(messageElement)
          })
         

     })
     .catch(error=>{
        console.log(error)
     })
    })   
    }
    catch(error){
        console.log({'message':error.message})
    }


   }