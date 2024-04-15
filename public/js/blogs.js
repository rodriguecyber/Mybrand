 const displayBlogs=async() =>{
    const blogsContainer = document.getElementById('blogs-container');  
    const loading=document.getElementById('loading') 
    
    blogsContainer.innerHTML = ''
    try {
          loading.style.display='block'
        await fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/blogs')
            .then(response => {
                if (!response.ok) {
     
                    throw new Error('Network response was not ok');
                }
            loading.innerText='blogs loaded sccesful'
           
                
                return response.json();

            })
            .then(blogs=>{
                blogs.forEach(blog => {
                    const blogElement=document.createElement('div')
                    blogElement.classList.add('blog');
                    blogElement.innerHTML = `
                    <h2>${blog.title}</h2>            
                    <div class="image">
                    <img class="blog-image" src="${blog.image}" alt="Blog Image">
                    </div>
                    <p>${blog.content}</p>
                    <button class="like-btn" onclick=likeBlog("${blog._id}")>Like</button>
                    <textarea class="comment-input" id="${blog._id}" placeholder="Add a comment"></textarea>
                    <button class="comment-btn" onclick=addComment("${blog._id}")>Comment</button>
                    <div class="comments" data-id="${blog._id}">
                    <p>${blog.comments.length} comments</p>                    
                  </div>
                    <div class="likes-count">Likes: <span>${blog.likes}</span></div>
                    `   
                    
          blogsContainer.appendChild(blogElement); 
          const commentsContainer = blogElement.querySelector('.comments');
          const savedComments = blog.comments;
          if (savedComments) {
            savedComments.forEach(comment => {
                const commentElement = document.createElement('p');
                commentElement.textContent = comment.comment;
                commentsContainer.appendChild(commentElement);
            });
        }
          
         
             });
            })
            .catch(error => {
                console.log(error);
                loading.innerText='failed to load blog'
            });
            setTimeout(()=>{loading.style.display='none'},4000)
    } catch (error) {
        loading.innerText='network error'
        alert(error.message);
    } 
    
    
}
const likeBlog = async(id)=>{
    try{
        like={
            liked:true
        }
    await fetch(`https://portfolio-back-end-1-pm2e.onrender.com/brand/like/${id}`,{
     method:'PATCH',
     headers:{
        'Content-Type':'application/json',
     
     },
     body:JSON.stringify(like)
     

    })
    .then(response=>{
        response.json()
        .then(res=>{
            console.log(res)
            displayBlogs()
        })
        .catch(error=>{
            console.log(error)
        })
    })

}
catch(error){
    console.error(error)
}
   }

   const addComment=async(id)=>{
    const comment=document.getElementById(id).value
     body={
        comment:comment
     }
     try{
     await fetch(`https://portfolio-back-end-1-pm2e.onrender.com/brand/comment/${id}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"           
        },
        body:JSON.stringify(body)
     })
     .then(response=>{
        response.json()
        .then(res=>{
            console.log(res)
            displayBlogs()
        })
        .catch(error=>{
            console.log(error)
        })

        
     })
    }
    catch(error){
        console.error(error)
    }
      
   }  
