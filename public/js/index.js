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
 }
 let closeLogin=()=>{
   document.getElementById('login').style.display="none"
 }
 let resetProperty  = () => {
  if(window.innerWidth>800){
    document.getElementById('drop').style.display="block"
    }
 }
 

