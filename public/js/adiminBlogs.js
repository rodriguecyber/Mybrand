 const alertbox = document.createElement('div')
 alertbox.classList.add('alert')
// access login token from cookie
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

const displayBlogs=async() =>{
    const blogsContainer = document.getElementById('blogs-container');      
    try {
        alertbox.innerHTML='loading blogs...'
        blogsContainer.appendChild(alertbox)
        await fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/blogs')
            .then(response => {
                if (!response.ok) {
                    alertbox.innerHTML='server error '
                    blogsContainer.appendChild(alertbox)
                    throw new Error('Network response was not ok');
                }           
                
                return response.json();

            }).then(async(blogs)=>{
                 await  blogs.forEach(blog => {
                    const blogElement=document.createElement('div')
                    blogElement.classList.add('blog');
                    blogElement.innerHTML = `
                    <button style='float:right' onclick='deleteBlog("${blog._id}")'>delete<button>
                    <h2>${blog.title}</h2>          
                    <div class="image">
                    <img class="blog-image" src="${blog.image}" alt="Blog Image">
                    </div>
                    <p>${blog.content}</p>
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
          
        blogsContainer.appendChild(alertbox)
        alertbox.innerHTML='blogs loaded'
       
             });
            })
            .catch(error => {
                console.log(error);
                alertbox.innerHTML='failed to load blogs'
            });
            setTimeout(() => {alertbox.style.visibility='hidden'},2000);
    } catch (error) {
        alertbox.innerHTML='check your internet'
        console.log(error.message);
    } 
    
    
}
       
const addNewBlog = async () => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image').files[0]; 

    if (!imageInput) {
        document.getElementById('image').style.color='red'
        return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', imageInput);

    try {
        alertbox.style.visibility='visible'
         alertbox.innerHTML='sending blog'
        document.getElementById('blogs-container').appendChild(alertbox)
         await fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/addblog', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${getLoginToken()}` 
            },
            body: formData
        })
        .then(async(response)=>{
        if (!response.ok) {
            alertbox.style.visibility='visible'
         alertbox.innerHTML='Filed to add blog'
        document.getElementById('blogs-container').appendChild(alertbox)
            throw new Error('Failed to add blog');
        }

        await response.json()
        .then(data=>{
            alertbox.style.visibility='visible'
            alertbox.innerHTML=data.message
           document.getElementById('blogs-container').appendChild(alertbox)
        
        displayBlogs()
    })
    .catch(error=>{
        alertbox.style.visibility='visible'
         alertbox.innerHTML='failed to add blog'
        document.getElementById('blogs-container').appendChild(alertbox)
        console.log("Error", error);
    })
    setTimeout(() => {alertbox.style.visibility='hidden'},2000);
    })
    } catch (error) {
        alertbox.style.visibility='visible'
         alertbox.innerHTML='network error'
        document.getElementById('blogs-container').appendChild(alertbox) 
        setTimeout(() => {alertbox.style.visibility='hidden'},2000);
    }

};




  const deleteBlog=async(id)=>{
    try{
        alertbox.style.visibility='visible'
         alertbox.innerHTML='deleting post'
        document.getElementById('blogs-container').appendChild(alertbox)
   await fetch(`https://portfolio-back-end-1-pm2e.onrender.com/brand/deleteblog/${id}`,{
    method:'DELETE',
    headers:{
        'Content-Type':'application/json',
         'Authorization':`Bearer ${getLoginToken()}`
    }
   })
   .then(response=>{
     response.json()
     .then(async(res)=>{
        alertbox.style.visibility='visible'
         alertbox.innerHTML=await res.blog
        document.getElementById('blogs-container').appendChild(alertbox)
         console.log(res)
        //  displayBlogs()
     })
     .catch(error=>{
        alertbox.style.visibility='visible'
        alertbox.innerHTML='failed to delete post'
        console.log(error)
       document.getElementById('blogs-container').appendChild(alertbox)
     })
    })
    }
    catch(error){
        alertbox.style.visibility='visible'
        alertbox.innerHTML='network eror'
       document.getElementById('blogs-container').appendChild(alertbox)
    }
  }
 