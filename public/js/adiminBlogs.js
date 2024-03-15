function displayBlogs() {
  const blogsContainer = document.getElementById('blogs-container');

 
  function renderBlogs() {
      blogsContainer.innerHTML = '';
      const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      blogs.forEach((blog, index)  => {
         
          const blogElement = document.createElement('div');
          blogElement.classList.add('blog');
          blogElement.innerHTML = `
          <span class="delete" id='${blog.title}' onclick="deleted(this)">Delete</span>
              <h2>${blog.title}</h2>            
              <div class="image">
              <img class="blog-image" src="${blog.image}" alt="Blog Image">
              </div>
              <p>${blog.content}</p>
              <button class="like-btn" data-id="${blog.id}">Like</button>
              <textarea class="comment-input" placeholder="Add a comment"></textarea>
              <button class="comment-btn" data-id="${blog.id}">Comment</button>
              <div class="comments" data-id="${blog.id}"></div>
              <div class="likes-count">Likes: <span>${blog.likes}</span></div>
             
          `;
          blogsContainer.appendChild(blogElement);

          const likeBtn = blogElement.querySelector('.like-btn');
          likeBtn.addEventListener('click', handleLike);

          const commentBtn = blogElement.querySelector('.comment-btn');
          commentBtn.addEventListener('click', handleComment);

          
          const savedComments = JSON.parse(localStorage.getItem(`blog_${blog.id}_comments`));
          const commentsContainer = blogElement.querySelector('.comments');
          if (savedComments) {
              savedComments.forEach(comment => {
                  const commentElement = document.createElement('p');
                  commentElement.textContent = comment;
                  commentsContainer.appendChild(commentElement);
              });
          }
         
      });
  }

 
  function handleLike(event) {
      const blogId = event.target.getAttribute('data-id');
      const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      const blogIndex = blogs.findIndex(blog => blog.id == blogId);
      if (blogIndex !== -1) {
          blogs[blogIndex].likes = (blogs[blogIndex].likes || 0) + 1;
          localStorage.setItem('blogs', JSON.stringify(blogs));
          renderBlogs();
      }
  }

 
  function handleComment(event) {
      const blogId = event.target.getAttribute('data-id');
      const commentInput = event.target.parentElement.querySelector('.comment-input');
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
          const commentsContainer = event.target.parentElement.querySelector('.comments');
          const commentElement = document.createElement('p');
          commentElement.textContent = commentText;
          commentsContainer.appendChild(commentElement);
          saveComment(blogId, commentText);
          commentInput.value = '';
      } else {
          alert('Please enter a valid comment.');
      }
  }

  
  function saveComment(blogId, comment) {
      const savedComments = JSON.parse(localStorage.getItem(`blog_${blogId}_comments`)) || [];
      savedComments.push(comment);
      localStorage.setItem(`blog_${blogId}_comments`, JSON.stringify(savedComments));
  }

 
  renderBlogs();
}
function addNewBlog() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image'); // Input element for image file
    const imageFile = imageInput.files[0];

    if (!imageFile) {
        alert('Please select an image');
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        const imageDataURL = event.target.result;

        const newBlog = {
            id: Date.now(),
            title: title,
            content: content,
            image: imageDataURL,
            likes: 0
        };

        // Store the new blog in local storage
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        blogs.push(newBlog);
        localStorage.setItem('blogs', JSON.stringify(blogs));
       alert('added new blog')
      
        // Optionally, you can perform further actions like showing a success message
    };

    reader.readAsDataURL(imageFile);
}

let deleted=(blog)=>{
    const blogs = JSON.parse(localStorage.getItem('blogs'))
    
    blogs.forEach((b, index) => {
        if (b.title === blog.id) {
            blogs.splice(index, 1);
        }
    });
    localStorage.setItem('blogs', JSON.stringify(blogs));
displayBlogs()
   

     

}
