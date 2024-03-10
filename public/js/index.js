let scrollFuction=(elementId)=>{
  if(elementId){
   let element=document.getElementById(elementId)
element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

let openMenu = () =>{
  document.getElementById('drop').style.display="block"
}
let closeMenu = () =>{
  if(window.innerWidth<=800){
  document.getElementById('drop').style.display="none"
  }
}
 let openLogin=()=>{
   document.getElementById('login').style.display="block"
   document.getElementById('signup').style.display='none'
 }
 let closeLogin=()=>{
   document.getElementById('login').style.display="none"
 }
 let closeSignup=()=>{
   document.getElementById('signup').style.display="none"
 }
 let resetProperty  = () => {
  if(window.innerWidth>800){
    document.getElementById('drop').style.display="block"
    }
 }
 let openSignup = () =>{
   document.getElementById('signup').style.display="block"
   document.getElementById('login').style.display="none"
 }

let like=(like)=>{
  likeCount=parseInt(like.nextElementSibling.innerText)
  color=like.style.color
  if(color=='red'){
    var likeC=likeCount-1
 like.nextElementSibling.innerText=likeC
 like.style.color="aqua"
}
  
else{
  var likeC=likeCount+1
  like.nextElementSibling.innerText=likeC
  like.style.color="red"
 }}

  

