let copyData=(element)=>{
    let parent=element.parentNode.parentNode
    let imgSource=parent.firstElementChild.nextElementSibling.firstElementChild
    let newImg=document.createElement('img')
    newImg.src=imgSource.src
    headingsource=element.parentNode.firstElementChild
    paragraphSource=headingsource.nextElementSibling
    newHeading=document.createElement('h3')
    newParagraph=document.createElement('p')
    newComment=paragraphSource.nextElementSibling
    newParagraph.textContent=paragraphSource.textContent
    newHeading.textContent=headingsource.textContent
    document.getElementById('img').appendChild(newImg) 
    document.getElementById('description').appendChild(newHeading)
    document.getElementById('description').appendChild(newParagraph)
    document.getElementById('description').appendChild(newComment)
    newComment.style.display='block'

    document.getElementById('blogcomment').style.visibility='visible'

   commentSection=newParagraph.parentNode.firstElementChild
   commentSection.style.visibility='visible'
   document.getElementById('description').appendChild(commentSection)

    
    
   
}




