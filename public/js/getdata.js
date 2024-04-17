 const getdata=async()=>{
   const response = await fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/blogs')
   return response.json()
}
 const getmessage=async()=>{
   const response =   await fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/message')
   return response.json()
}


  const admin = async() => {
    try {
        let likes = 0;
        let mostLiked={likes:0}
        let lastPosted=null
        const container = document.getElementById('home');
        const data = await getdata();
        const message =await getmessage()
      //   message.forEach(element=>{
      //       console.log(element)
      //   })

        data.forEach(element => {
            likes += element.likes;
           if (element.likes>mostLiked.likes){
            mostLiked=element
           }
           if (!lastPosted || new Date(element.time) > new Date(lastPosted.time)) {
            lastPosted = element;
        }
        });
     
        container.innerHTML =
            `<span>Total Blogs:<p>${data.length}</p></span>
            <span>Total Likes:<p>${likes}</p></span>
            <span>Most Liked:
           <div><h5>title:</h5><p>${mostLiked.title}</p></div>
           <div><h5>likes:</h5><p>${mostLiked.likes}</p></div>
            </span>
            <span>Last Posted
            <div>
            <h5>Title:</h5>
            <p>${lastPosted ? lastPosted.title : 'No posts yet'}</hp></div>
            <div> <h5>Posted on:</h5>
          <p>${lastPosted ? new Date(lastPosted.time).toLocaleDateString('en',{
                year:'numeric',
                month:'short',
                day:'numeric' 
            }): ' '}</p></div>
            </span>
            <span>Total Messages:<p></p></span>
            <span>Last received:<p></p></span>`;
    } catch (err) {
        console.log("Error in Dashboard:", err);
    }
};



