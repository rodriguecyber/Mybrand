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
    console.log(getLoginToken())
    try{
     await fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/message',{
         method:'GET',
        headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${getLoginToken()}`
        }
     })
     .then(response=> response.json())
     
     .then(async(res)=>{
        console.log({"response":res.status})
     })
     .catch(error=>{
        console.log(error)
     })
    }
    catch(error){
        console.log(error)
    }


   }