 function displayBlogs() {
    const blogsContainer = document.getElementById('blogs-container');

   
    function renderBlogs() {
        blogsContainer.innerHTML = '';
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        blogs.forEach((blog, index)  => {
           if(index>=blogs.length-3){
            const blogElement = document.createElement('div');
            blogElement.classList.add('blog');
            blogElement.innerHTML = `
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