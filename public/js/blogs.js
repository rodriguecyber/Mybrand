let openAddBlog=()=>{
    document.getElementById('addblog').style.visibility='visible'
    }

    let addBlog = () => {
        document.getElementById("submitblog").addEventListener("click", function () {
            var blogImage = document.getElementById("blogimage").files[0];
            var heading = document.getElementById("heading").value;
            var paragraph = document.getElementById("paragraph").value;
            var blogs = JSON.parse(localStorage.getItem("blogs")) || [];
            let newId=blogs.length+1
            var reader = new FileReader();
           
            reader.onload = function (event) {
                var imageDataUrl = event.target.result;
                var newBlog = {
                    Id:newId,
                    image: imageDataUrl, 
                    title: heading,
                    description: paragraph

                };
                blogs.push(newBlog);
    
               localStorage.setItem("blogs", JSON.stringify(blogs));                
                document.getElementById("blogimage").value = "";
                document.getElementById("heading").value = "";
                document.getElementById("paragraph").value = "";
    
                alert(newId);
            };
    
           
            reader.readAsDataURL(blogImage);
        });
    };
    

let displayBlogs=()=> {
    let templateDiv = document.getElementById('article');
    let divContainer = document.getElementById('article-holder');
    let blogaction=document.getElementById('blogaction')
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];    
  let blogLength=blogs.length
        blogs.forEach(function(blog, index) {
            
                if(index>=blogLength-3){

                if(index==blogLength-1){
                    let orginalImage= templateDiv.querySelector(".image img")
                    let originalTitle=templateDiv.querySelector(".desc h3")
                    let originalDescription=templateDiv.querySelector(".desc p")
                    orginalImage.src=blog.image
                    originalTitle.textContent=blog.Id   
                    originalDescription.textContent=blog.description
                    templateDiv.id=blog.Id
                    
                    
                                
                    }
                    else{
                        let cloneDiv = templateDiv.cloneNode(true);
                        let clonedImage = cloneDiv.querySelector(".image img");
                        let clonedTitle = cloneDiv.querySelector(".desc h3");
                        let cloneDescription= cloneDiv.querySelector(".desc p");
                        clonedImage.src=  blog.image
                        clonedTitle.textContent = blog.Id; 
                        cloneDescription.textContent = blog.description; 
                        divContainer.appendChild(cloneDiv);
                         cloneDiv.id=blog.Id
                    } 
            }
        
           
      });
   
  }


let addComment=(blog) =>{
    let blogIndex=blog.parentNode.parentNode.parentNode.parentNode.className
   alert(blogIndex)
    }
    commentContent=document.getElementById('commentid').value
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    if (blogIndex >= 0 && blogIndex < blogs.length) {
     
        var newComment = {
            content: commentContent,
            timestamp: new Date() 
        };

       
        blogs[blogIndex].comments.push(newComment);

    
        localStorage.setItem("blogs", JSON.stringify(blogs));
         alert('comment added')
        displayBlogs();
    }