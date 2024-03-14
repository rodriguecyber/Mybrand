let displayBlogs=()=> {
    
    let divContainer = document.getElementById('article-holder');
    let templateDiv = divContainer.querySelector('.article')
   
    let blogaction=document.getElementById('blogaction')
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];    
  let blogLength=blogs.length
        blogs.forEach(function(blog, index) {
              templateDiv.id=blog.Id
              let cloneDiv = templateDiv.cloneNode(true);
              cloneDiv.id=blog.id+"-"+index
                if(index>=blogLength-3){

                if(index==blogLength-1){
                    let orginalImage= templateDiv.querySelector(".image img")
                    let originalTitle=templateDiv.querySelector(".desc h3")
                    let originalDescription=templateDiv.querySelector(".desc p")
                    let orginalComment=templateDiv.querySelector(".comments")
                    orginalImage.src=blog.image
                    originalTitle.textContent=blog.title   
                    originalDescription.textContent=blog.description     
                   for(i=0; i<blogs[index].comments.length;i++){
                      newComment=document.createElement('p')
                     newComment.textContent=blogs[index].comments[i].content
                     orginalComment.appendChild(newComment)
                    
                   }           
                    
                                
                }
                    else{
                      
                        let clonedImage = cloneDiv.querySelector(".image img");
                        let clonedTitle = cloneDiv.querySelector(".desc h3");
                        let cloneDescription= cloneDiv.querySelector(".desc p");
                        clonedImage.src=  blog.image
                        clonedTitle.textContent = blog.title; 
                        cloneDescription.textContent = blog.description; 
                        divContainer.appendChild(cloneDiv);                       
                         let copiedComment=templateDiv.querySelector(".comments")
                         for(i=0; i<blogs[index].comments.length;i++){
                            newComment=document.createElement('p')
                           newComment.textContent=blogs[index].comments[i].content
                           copiedComment.appendChild(newComment)
                          
                         }
                         
                         
                    } 
            }
        
           
      });
   
  }
  