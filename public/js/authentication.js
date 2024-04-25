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


const isLoggedIn=()=>{
    try{
    fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/isloggedin',{
        method:'post',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${getLoginToken()}`
            }
    })
    .then(response=>{
        response.json()
        .then(res=>{
            if(response.status!=200){
                window.location='../index.html' 
            }
        })
    })
}
catch(error){
    console.log(error)
}
}