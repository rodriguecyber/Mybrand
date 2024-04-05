 const displayBlogs=() =>{
    const blogsContainer = document.getElementById('blogs-container');   
    
    blogsContainer.innerHTML = ''
    try {
        fetch('https://portfolio-back-end-1-pm2e.onrender.com/brand/blogs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                return response.json();

            }).then(blogs=>{
             blogs.forEach(blog => {
                const blogElement=document.createElement('div')
            blogElement.classList.add('blog');
            blogElement.innerHTML = `
                    <h2>${blog.title}</h2>            
                    <div class="image">
                         <img class="blog-image" src="${blog.image}" alt="Blog Image">
                    </div>
                    <p>${blog.content}</p>
                    <button class="like-btn" data-id="${blog._id}">Like</button>
                    <textarea class="comment-input" placeholder="Add a comment"></textarea>
                    <button class="comment-btn" data-id="${blog._id}">Comment</button>
                    <div class="comments" data-id="${blog._id}"></div>
                    <div class="likes-count">Likes: <span>${blog.likes}</span></div>
            `   
          blogsContainer.appendChild(blogElement); 
             });

            })
            .catch(error => {
               console.log(error);
            });
    } catch (error) {
        alert(error.message);
    }     
}
       