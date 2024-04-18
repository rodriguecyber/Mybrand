alertbox = document.createElement('div')
alertbox.classList.add('alert')
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
      alertbox.innerHTML='loading message'
      divContainer.appendChild(alertbox)
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
            alertbox.innerHTML='failed to load message'
            divContainer.appendChild(alertbox)
            window.location='../index.html' 
            document.getElementById('login').style.display="block"
            return;
            
        }

        return response.json()
      
        
     .then(async(res)=>{
        await res.forEach((message, index) => {
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
                 time = sentdate.toLocaleString('en-US', { weekday: 'long' }) + " " + sentdate.getDate() + " " + (sentdate.toLocaleString('en-US', { month: 'long' }));

                
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
          alertbox.innerHTML='message loaded'
          divContainer.appendChild(alertbox)
          setTimeout(()=>{alertbox.style.visibility='hidden'},2000)
          
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
   const logout = ()=>{
    document.cookie=`loginToken=''; path=/`
       window.location='../index.html'
     }
   